<?php

namespace App\Controller\Admin;

use App\DataTable\LaunchTableType;
use App\DataTable\SpaceMissionClassificationTableType;
use App\DataTable\SpaceMissionEditableTableType;
use App\DataTable\SpaceMissionTableType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * @Route("/datatable")
 */
class DatatableController extends BaseController
{
    /**
     * @Route("/basic")
     */
    public function basicAction(Request $request)
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

    /**
     * @Route("/custom-adapter")
     */
    public function customAdapterAction(Request $request)
    {
        $table = $this->createTable(LaunchTableType::class, [
            'length_change' => true,
        ]);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('admin/datatable/custom_adapter.html.twig', [
            'table' => $table,
        ]);
    }

    /**
     * @Route("/draggable")
     */
    public function draggableAction(Request $request)
    {
        $table = $this->createTable(SpaceMissionTableType::class, [
            'row_reorder' => true
        ]);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('admin/datatable/draggable.html.twig', [
            'table' => $table,
        ]);
    }

    /**
     * @Route("/editable")
     */
    public function editableAction(Request $request)
    {
        $table = $this->createTable(SpaceMissionEditableTableType::class);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('admin/datatable/editable.html.twig', [
            'table' => $table,
        ]);
    }

    /**
     * @Route("/tree")
     */
    public function treeAction(Request $request)
    {
        $table = $this->createTable(SpaceMissionClassificationTableType::class);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('admin/datatable/tree.html.twig', [
            'table' => $table,
        ]);
    }
}
