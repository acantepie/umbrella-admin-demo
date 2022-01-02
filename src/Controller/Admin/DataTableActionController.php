<?php

namespace App\Controller\Admin;

use App\DataTable\SpaceMissionSelectableTableType;
use App\DataTable\SpaceMissionTableType;
use App\Entity\SpaceMission;
use App\Entity\SpaceMissionClassification;
use App\Form\SpaceMissionBulkType;
use App\Form\SpaceMissionType;
use App\Repository\SpaceMissionClassificationRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use function Symfony\Component\Translation\t;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * @Route("/datatable")
 */
class DataTableActionController extends BaseController
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

            return $this->js()
                ->closeModal()
                ->reloadTable()
                ->toastSuccess(t('Item updated'));
        }

        return $this->js()
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

        return $this->js()
            ->reloadTable()
            ->callTable(null, 'unselectRowId', $id)
            ->toastSuccess(t('Item deleted'));
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

        return $this->js()
            ->reloadTable();
    }

    // Bulk Api

    /**
     * @return SpaceMission[]
     */
    private function getBulkMission(Request $request): array
    {
        return $this->createTable(SpaceMissionSelectableTableType::class)
            ->getAdapterQueryBuilder()
            ->andWhere('e.id IN (:ids)')
            ->setParameter('ids', $request->query->get('ids'))
            ->getQuery()
            ->getResult();
    }

    /**
     * @Route("/bulk/delete")
     */
    public function bulkDelete(Request $request)
    {
        $missions = $this->getBulkMission($request);
        foreach ($missions as $mission) {
            $this->em()->remove($mission);
        }
        $this->em()->flush();

        return $this->js()
            ->toastSuccess(sprintf('%d row.s deleted', count($missions)))
            ->clearSelectionTable()
            ->reloadTable();
    }

    /**
     * @Route("/bulk/edit")
     */
    public function bulkEdit(Request $request)
    {
        $form = $this
            ->createForm(SpaceMissionBulkType::class)
            ->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $missions = $this->getBulkMission($request);
            $data = $form->getData();

            foreach ($missions as $mission) {
                if ($data['rocketStatus']) {
                    $mission->rocketStatus = $data['rocketStatus'];
                }

                if ($data['missionStatus']) {
                    $mission->missionStatus = $data['missionStatus'];
                }
            }

            $this->em()->flush();

            return $this->js()
                ->closeModal()
                ->toastSuccess(sprintf('%d row.s updated', 18))
                ->clearSelectionTable()
                ->reloadTable();
        }

        return $this->js()
            ->modal('@UmbrellaCore/Modal/form.html.twig', [
                'title' => 'Bulk edition',
                'form' => $form->createView()
            ]);
    }

    // Export API

    /**
     * @Route("export")
     */
    public function export(Request $request)
    {
        $table = $this->createTable(SpaceMissionTableType::class);
        $mode = $request->query->get('mode');

        if ('selection' === $mode) {
            $missions = $table
                ->getAdapterQueryBuilder()
                ->andWhere('e.id IN (:ids)')
                ->setParameter('ids', $request->query->get('ids'))
                ->getQuery()
                ->getResult();
        } else {
            $parameters = $request->query->all();
            unset($parameters['length']); // disable pagination

            $missions = $table
                ->handleParameters($parameters)
                ->getAdapterQueryBuilder()
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

        return $this->js()
            ->download($content, 'export.csv');
    }
}
