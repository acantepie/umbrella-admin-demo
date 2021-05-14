<?php

namespace App\Controller\Admin;

use App\DataTable\SpaceMissionTableType;
use App\Entity\SpaceMission;
use App\Entity\SpaceMissionClassification;
use App\Form\SpaceMissionType;
use App\Repository\SpaceMissionClassificationRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use function Symfony\Component\Translation\t;
use Umbrella\AdminBundle\Controller\AdminController;
use Umbrella\CoreBundle\Component\DataTable\Adapter\EntityAdapter;
use Umbrella\CoreBundle\Component\DataTable\DTO\RowReorder;
use Umbrella\CoreBundle\Component\JsResponse\JsResponse;

/**
 * @Route("/datatable")
 */
class DataTableActionController extends AdminController
{
    /**
     * @Route(path="/edit/{id}", requirements={"id": "\d+"})
     */
    public function editAction(Request $request, $id = null)
    {
        if (null === $id) {
            $entity = new SpaceMission();
        } else {
            $entity = $this->findOrNotFound(SpaceMission::class, $id);
        }

        $form = $this->createForm(SpaceMissionType::class, $entity);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->persistAndFlush($entity);

            return $this->jsResponseBuilder()
                ->closeModal()
                ->reloadTable()
                ->alertSuccess(t('message.entity_updated'));
        }

        return $this->jsResponseBuilder()
            ->modal('@UmbrellaAdmin/edit_modal.html.twig', [
                'form' => $form->createView(),
                'entity' => $entity,
            ]);
    }

    /**
     * @Route(path="/del/{id}", requirements={"id": "\d+"})
     */
    public function deleteAction($id)
    {
        $entity = $this->findOrNotFound(SpaceMission::class, $id);
        $this->removeAndFlush($entity);

        return $this->jsResponseBuilder()
            ->reloadTable()
            ->alertSuccess(t('message.entity_deleted'));
    }

    /**
     * @Route("/move/{id}/{direction}", requirements={"id": "\d+"})
     */
    public function moveAction(SpaceMissionClassificationRepository $repository, $id, string $direction)
    {
        $entity = $this->findOrNotFound(SpaceMissionClassification::class, $id);
        if ('up' === $direction) {
            $repository->moveUp($entity);
        } else {
            $repository->moveDown($entity);
        }

        return $this->jsResponseBuilder()
            ->reloadTable();
    }

    // RowReorder API

    /**
     * @Route("row-reorder")
     */
    public function rowReorderAction(Request $request)
    {
        $rowMove = RowReorder::createFromRequest($request);
        $rowMove->applyChanges($this->em(), SpaceMission::class, 'sequence');

        return new JsResponse();
    }

    // Export API

    /**
     * @Route("dump-selected")
     */
    public function dumpSelectedAction(Request $request)
    {
        $table = $this->createTable(SpaceMissionTableType::class);

        /** @var EntityAdapter $adapter */
        $adapter = $table->getAdapter();
        $missions = $adapter
            ->getQueryBuilder($table->createRequest(), $table->getAdapterOptions())
            ->andWhere('e.id IN (:ids)')
            ->setParameter('ids', $request->query->get('ids'))
            ->getQuery()
            ->getResult();

        return $this->csvResponse($missions);
    }

    /**
     * @Route("dump-filtered")
     */
    public function dumpFilteredAction(Request $request)
    {
        $table = $this->createTable(SpaceMissionTableType::class, [
            'paging' => false
        ]);

        /** @var EntityAdapter $adapter */
        $adapter = $table->getAdapter();
        $missions = $adapter
            ->getQueryBuilder($table->createRequest($request), $table->getAdapterOptions())
            ->getQuery()
            ->getResult();

        return $this->csvResponse($missions);
    }

    /**
     * @param SpaceMission[] $missions
     */
    private function csvResponse(array $missions): Response
    {
        $fp = fopen('php://temp', 'w');
        foreach ($missions as $mission) {
            fputcsv($fp, [
                $mission->date->format(DATE_ISO8601),
                $mission->companyName,
                $mission->location,
                $mission->detail,
                $mission->cost,
                $mission->rocketStatus,
                $mission->missionStatus
            ]);
        }
        rewind($fp);

        $response = new Response(\stream_get_contents($fp));
        fclose($fp);

        $response->headers->set('Content-Type', 'text/csv');
        $response->headers->set('Content-Disposition', 'attachment; filename="export.csv"');

        return $response;
    }
}
