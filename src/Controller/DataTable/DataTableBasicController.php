<?php

namespace App\Controller\DataTable;

use App\DataTable\SpaceMissionTableType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

#[Route('/datatable/basic')]
class DataTableBasicController extends BaseController
{
    #[Route('')]
    public function index(Request $request)
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
