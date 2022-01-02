<?php

namespace App\Controller\Admin;

use App\DataTable\LaunchTableType;
use App\DataTable\SpaceMissionClassificationTableType;
use App\DataTable\SpaceMissionEditableTableType;
use App\DataTable\SpaceMissionSelectableTableType;
use App\DataTable\SpaceMissionTableType;
use App\Enum\MissionStatus;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use function Symfony\Component\String\u;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * @Route("/datatable")
 */
class DatatableController extends BaseController
{
    /**
     * @Route("/basic")
     */
    public function basic(Request $request)
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
    public function customAdapter(Request $request)
    {
        $table = $this->createTable(LaunchTableType::class);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('admin/datatable/custom_adapter.html.twig', [
            'table' => $table,
        ]);
    }

    /**
     * @Route("/selectable")
     */
    public function selectable(Request $request)
    {
        $table = $this->createTable(SpaceMissionSelectableTableType::class);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('admin/datatable/selectable.html.twig', [
            'table' => $table,
        ]);
    }

    /**
     * @Route("/editable")
     */
    public function editable(Request $request)
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
     * @Route("/multiple")
     */
    public function multiple(Request $request)
    {
        $tables = [];
        foreach (MissionStatus::all() as $status) {
            $table = $this->createTable(SpaceMissionEditableTableType::class, [
                'id' => 'space_mission_' . u($status)->snake(),
                'page_length' => 10,
                'mission_status' => $status
            ]);
            $table->handleRequest($request);

            if ($table->isCallback()) {
                return $table->getCallbackResponse();
            }

            $tables[$status] = $table;
        }

        return $this->render('admin/datatable/multiple.html.twig', [
            'tables' => $tables,
        ]);
    }

    /**
     * @Route("/modal")
     */
    public function modal()
    {
        return $this->render('admin/datatable/modal.html.twig');
    }

    /**
     * @Route("/open-modal")
     */
    public function openModal(Request $request)
    {
        $table = $this->createTable(SpaceMissionTableType::class, [
            'load_route' => 'app_admin_datatable_openmodal',
            'page_length' => 10
        ]);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->js()->modal('admin/datatable/_modal.html.twig', [
            'table' => $table
        ]);
    }

    /**
     * @Route("/tree")
     */
    public function tree(Request $request)
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
