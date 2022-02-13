<?php

namespace App\Controller\DataTable;

use App\DataTable\SpaceMissionExportableTableType;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;
use Umbrella\CoreBundle\DataTable\Utils\DataTableActionState;
use Umbrella\CoreBundle\JsResponse\JsResponse;

#[Route('/datatable/exportable')]
class DataTableExportableController extends BaseController
{
    #[Route('')]
    public function index(Request $request)
    {
        $table = $this->createTable(SpaceMissionExportableTableType::class);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('datatable/exportable/index.html.twig', [
            'table' => $table,
        ]);
    }

    #[Route('/export/confirm')]
    public function exportConfirm(Request $request)
    {
        $state = DataTableActionState::createFromRequest($request);

        return $this->js()->modal('datatable/exportable/_confirm_modal.html.twig', [
            'state' => $state
        ]);
    }

    #[Route('/export/search')]
    public function exportSearch(Request $request)
    {
        $state = DataTableActionState::createFromRequest($request);

        $qb = $this->createTable(SpaceMissionExportableTableType::class)
            ->submit($state->disablePagination()->getData())
            ->getAdapterQueryBuilder();

        return $this->exportResponse($qb);
    }

    #[Route('/export/selection')]
    public function exportSelection(Request $request)
    {
        $state = DataTableActionState::createFromRequest($request);

        $qb = $this->createTable(SpaceMissionExportableTableType::class)
            ->getAdapterQueryBuilder()
            ->andWhere('e.id IN (:ids)')
            ->setParameter('ids', $state->getSelectedIds());

        return $this->exportResponse($qb);
    }

    #[Route('/export/page')]
    public function exportPage(Request $request)
    {
        $state = DataTableActionState::createFromRequest($request);

        $qb = $this->createTable(SpaceMissionExportableTableType::class)
            ->submit($state->getData())
            ->getAdapterQueryBuilder();

        return $this->exportResponse($qb);
    }

    #[Route('/export/all')]
    public function exportAll()
    {
        $qb = $this->createTable(SpaceMissionExportableTableType::class)
            ->getAdapterQueryBuilder();

        return $this->exportResponse($qb);
    }

    private function exportResponse(QueryBuilder $qb): JsResponse
    {
        $missions = $qb->getQuery()->getResult();

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
            ->closeModal()
            ->download($content, 'export.csv')
            ->getResponse();
    }
}
