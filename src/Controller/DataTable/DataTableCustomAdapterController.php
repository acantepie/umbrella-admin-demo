<?php

namespace App\Controller\DataTable;

use App\DataTable\LaunchTableType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Umbrella\AdminBundle\Lib\Controller\AdminController;

#[Route('/datatable/custom-adapter')]
class DataTableCustomAdapterController extends AdminController
{
    #[Route('')]
    public function index(Request $request): Response
    {
        $table = $this->createTable(LaunchTableType::class);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('datatable/custom_adapter/index.html.twig', [
            'table' => $table,
        ]);
    }
}
