<?php

namespace App\Controller\Admin;

use App\DataTable\SpaceMissionTableType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * @Route("/datatable/basic")
 */
class DataTableBasicController extends BaseController
{
    /**
     * @Route("")
     */
    public function index(Request $request)
    {
        $table = $this->createTable(SpaceMissionTableType::class);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('admin/datatable/basic.html.twig', [
            'table' => $table,
        ]);
    }
}
