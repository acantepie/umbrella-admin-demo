<?php

namespace App\Controller\DataTable;

use App\DataTable\SpaceMissionMultipleTableType;
use App\Enum\RocketStatus;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Umbrella\AdminBundle\Lib\Controller\AdminController;

#[Route('/datatable/multiple')]
class DataTableMultipleController extends AdminController
{
    #[Route('')]
    public function index(Request $request): Response
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
