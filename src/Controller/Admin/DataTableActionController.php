<?php

namespace App\Controller\Admin;

use App\DataTable\SpaceMissionTableType;
use App\Entity\SpaceMission;
use App\Entity\SpaceMissionClassification;
use App\Form\SpaceMissionType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use function Symfony\Component\Translation\t;
use Umbrella\CoreBundle\Component\DataTable\Adapter\EntityAdapter;
use Umbrella\CoreBundle\Component\DataTable\DTO\ChangeSet;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * @Route("/datatable")
 */
class DataTableActionController extends BaseController
{
    /**
     * @Route(path="/classification/{id}/missions", requirements={"id": "\d+"})
     */
    public function missionsAction(Request $request, SpaceMissionClassification $classification)
    {
        $table = $this->createTable(SpaceMissionTableType::class, [
            'classification' => $classification,
            'load_url' => $request->getUri()
        ]);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->jsResponseBuilder()
            ->openModalView('admin/datatable/missions.html.twig', [
                'table' => $table,
                'classification' => $classification
            ]);
    }

    // edit API

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
                ->toastSuccess(t('message.entity_updated'));
        }

        return $this->jsResponseBuilder()
            ->openModalView('@UmbrellaAdmin/edit_modal.html.twig', [
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
            ->toastSuccess(t('message.entity_deleted'));
    }

    // RowReorder API

    /**
     * @Route("row-reorder")
     */
    public function rowReorderAction(Request $request)
    {
        $changeSet = ChangeSet::createFromRequest($request);
        $changeSet->apply($this->em(), SpaceMission::class, 'sequence');

        return $this
            ->jsResponseBuilder()
            ->reloadTable();
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
