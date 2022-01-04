<?php

namespace App\Controller\Admin;

use App\DataTable\LaunchTableType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * @Route("/datatable/custom-adapter")
 */
class DataTableCustomAdapterController extends BaseController
{
    /**
     * @Route("")
     */
    public function index(Request $request)
    {
        $table = $this->createTable(LaunchTableType::class);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('admin/datatable/custom_adapter/index.html.twig', [
            'table' => $table,
        ]);
    }
}
