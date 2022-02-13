<?php

namespace App\Controller\DataTable;

use App\DataTable\SpaceMissionTableType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

#[Route('/datatable/modal')]
class DataTableModalController extends BaseController
{
    #[Route('')]
    public function index()
    {
        return $this->render('datatable/modal/index.html.twig');
    }

    #[Route('/open')]
    public function open(Request $request)
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
