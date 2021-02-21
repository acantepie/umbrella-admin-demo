<?php

namespace App\Controller\Admin;

use App\DataTable\ApiTableType;
use App\DataTable\FishCategoryTableType;
use App\DataTable\FishTableType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * @Route("/datatable")
 */
class DatatableController extends BaseController
{
    /**
     * @Route("/simple")
     */
    public function simpleAction(Request $request)
    {
        $table = $this->createTable(FishTableType::class);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('admin/datatable/simple.html.twig', [
            'table' => $table,
        ]);
    }

    /**
     * @Route("/multiple")
     */
    public function multipleAction(Request $request)
    {
        // If same action handle multiple instance on same TableType you must type different id for each of them

        $edibleTable = $this->createTable(FishTableType::class, ['id' => 'simple_table_1', 'edible' => true]);
        $edibleTable->handleRequest($request);

        $notEdibleTable = $this->createTable(FishTableType::class, ['id' => 'simple_table_2', 'edible' => false]);
        $notEdibleTable->handleRequest($request);

        if ($edibleTable->isCallback()) {
            return $edibleTable->getCallbackResponse();
        }

        if ($notEdibleTable->isCallback()) {
            return $notEdibleTable->getCallbackResponse();
        }

        return $this->render('admin/datatable/multiple.html.twig', [
            'edible_table' => $edibleTable,
            'notedible_table' => $notEdibleTable,
        ]);
    }

    /**
     * @Route("/api")
     */
    public function apiAction(Request $request)
    {
        $table = $this->createTable(ApiTableType::class);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('admin/datatable/api.html.twig', [
            'table' => $table,
        ]);
    }

    /**
     * @Route("/tree")
     */
    public function treeAction(Request $request)
    {
        $table = $this->createTable(FishCategoryTableType::class);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('admin/datatable/tree.html.twig', [
            'table' => $table,
        ]);
    }
}
