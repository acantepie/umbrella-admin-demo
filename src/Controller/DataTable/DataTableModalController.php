<?php

namespace App\Controller\DataTable;

use App\DataTable\SpaceMissionTableType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Umbrella\AdminBundle\Lib\Controller\AdminController;

#[Route('/datatable/modal')]
class DataTableModalController extends AdminController
{
    #[Route('')]
    public function index(): Response
    {
        return $this->render('datatable/modal/index.html.twig');
    }

    #[Route('/open')]
    public function open(Request $request): Response
    {
        $table = $this->createTable(SpaceMissionTableType::class, [
            'page_length' => 10
        ]);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->js()->modal('datatable/modal/_modal.html.twig', [
            'table' => $table
        ]);
    }
}
