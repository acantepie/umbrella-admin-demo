<?php

namespace App\Controller\Admin;

use App\DataTable\SpaceMissionTableType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * @Route("/datatable/modal")
 */
class DataTableModalController extends BaseController
{
    /**
     * @Route("")
     */
    public function index()
    {
        return $this->render('admin/datatable/modal.html.twig');
    }

    /**
     * @Route("/open")
     */
    public function open(Request $request)
    {
        $table = $this->createTable(SpaceMissionTableType::class, [
            'page_length' => 10
        ]);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->js()->modal('admin/datatable/_datatable_modal.html.twig', [
            'table' => $table
        ]);
    }
}
