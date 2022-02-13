<?php

namespace App\Controller\DataTable;

use App\DataTable\SpaceMissionSelectableTableType;
use App\Entity\SpaceMission;
use App\Form\SpaceMissionBulkType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;
use Umbrella\CoreBundle\DataTable\Utils\DataTableActionState;

#[Route('/datatable/selectable')]
class DataTableSelectableController extends BaseController
{
    #[Route('')]
    public function index(Request $request)
    {
        $table = $this->createTable(SpaceMissionSelectableTableType::class);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('datatable/selectable/index.html.twig', [
            'table' => $table,
        ]);
    }

    /**
     * @return SpaceMission[]
     */
    private function getBulkMission(Request $request): array
    {
        $state = DataTableActionState::createFromRequest($request);

        return $this->createTable(SpaceMissionSelectableTableType::class)
            ->getAdapterQueryBuilder()
            ->andWhere('e.id IN (:ids)')
            ->setParameter('ids', $state->getSelectedIds())
            ->getQuery()
            ->getResult();
    }

    #[Route('/edit')]
    public function edit(Request $request)
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
                ->toastSuccess(sprintf('%d row.s updated', count($missions)))
                ->clearSelectionTable()
                ->reloadTable();
        }

        return $this->js()
            ->modal('@UmbrellaCore/Modal/form.html.twig', [
                'title' => 'Bulk edition',
                'form' => $form->createView()
            ]);
    }

    #[Route('/delete')]
    public function delete(Request $request)
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
}
