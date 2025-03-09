<?php

namespace App\Controller\DataTable;

use App\DataTable\SpaceMissionTableType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Umbrella\AdminBundle\Lib\Controller\AdminController;

#[Route('/datatable/basic')]
class DataTableBasicController extends AdminController
{
    #[Route('')]
    public function index(Request $request): Response
    {
        // Create table from Type with service DataTableFactory
        $table = $this->createTable(SpaceMissionTableType::class);

        // Handle callback to load data on Table
        $table->handleRequest($request);
        if ($table->isCallback()) {
            // Return a Json response
            return $table->getCallbackResponse();
        }

        return $this->render('datatable/basic/index.html.twig', [
            'table' => $table,
        ]);
    }
}
