<?php

namespace App\Controller\DataTable;

use App\DataTable\SpaceMissionMultipleTableType;
use App\Enum\RocketStatus;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

#[Route('/datatable/multiple')]
class DataTableMultipleController extends BaseController
{
    #[Route('')]
    public function index(Request $request)
    {
        $tableA = $this->createTable(SpaceMissionMultipleTableType::class, [
            'id' => 'table_active', // You must define different id it them same table was rendered multiple times on view
            'rocket_status' => RocketStatus::ACTIVE
        ]);

        if ($tableA->handleRequest($request)->isCallback()) {
            return $tableA->getCallbackResponse();
        }

        $tableB = $this->createTable(SpaceMissionMultipleTableType::class, [
            'id' => 'table_retired', // You must define different id it them same table was rendered multiple times on view
            'rocket_status' => RocketStatus::RETIRED
        ]);

        if ($tableB->handleRequest($request)->isCallback()) {
            return $tableB->getCallbackResponse();
        }

        return $this->render('datatable/multiple/index.html.twig', [
            'tableA' => $tableA,
            'tableB' => $tableB
        ]);
    }
}
