<?php

namespace App\Controller\Admin;

use App\DataTable\SpaceMissionTableType;
use App\Entity\SpaceMission;
use App\Entity\SpaceMissionClassification;
use App\Form\SpaceMissionType;
use App\Repository\SpaceMissionClassificationRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use function Symfony\Component\Translation\t;
use Umbrella\AdminBundle\Controller\AdminController;
use Umbrella\CoreBundle\DataTable\DTO\RowReorder;
use Umbrella\CoreBundle\JsResponse\JsResponse;

/**
 * @Route("/datatable")
 */
class DataTableActionController extends AdminController
{
    /**
     * @Route(path="/edit/{id}", requirements={"id": "\d+"})
     */
    public function edit(Request $request, $id = null)
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
            ->modal('@UmbrellaAdmin/edit_modal.html.twig', [
                'form' => $form->createView(),
                'entity' => $entity,
            ]);
    }

    /**
     * @Route(path="/del/{id}", requirements={"id": "\d+"})
     */
    public function delete($id)
    {
        $entity = $this->findOrNotFound(SpaceMission::class, $id);
        $this->removeAndFlush($entity);

        return $this->jsResponseBuilder()
            ->reloadTable()
            ->callTable(null, 'unselectRowId', $id)
            ->toastSuccess(t('message.entity_deleted'));
    }

    /**
     * @Route("/move/{id}/{direction}", requirements={"id": "\d+"})
     */
    public function move(SpaceMissionClassificationRepository $repository, $id, string $direction)
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
    public function rowReorder(Request $request)
    {
        $rowMove = RowReorder::createFromRequest($request);
        $rowMove->applyChanges($this->em(), SpaceMission::class, 'sequence');

        return new JsResponse();
    }

    // Export API

    /**
     * @Route("export")
     */
    public function export(Request $request)
    {
        $mode = $request->query->get('mode');

        if ('selection' === $mode) {
            $table = $this->createTable(SpaceMissionTableType::class);

            $missions = $table
                ->getAdapter()
                ->getQueryBuilder($table->getState(), $table->getAdapterOptions())
                ->andWhere('e.id IN (:ids)')
                ->setParameter('ids', $request->query->get('ids'))
                ->getQuery()
                ->getResult();
        } else {
            $table = $this->createTable(SpaceMissionTableType::class);

            $parameters = $request->query->all();
            unset($parameters['length']);

            $state = $table
                ->handleParamaters($parameters)
                ->getState();

            $missions = $table
                ->getAdapter()
                ->getQueryBuilder($state, $table->getAdapterOptions())
                ->getQuery()
                ->getResult();
        }

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

        $content = \stream_get_contents($fp);
        fclose($fp);

        return $this->jsResponseBuilder()
            ->download($content, 'export.csv');
    }
}
