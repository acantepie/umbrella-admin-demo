<?php

namespace App\Controller\Admin;

use App\DataTable\LaunchTableType;
use App\DataTable\SpaceMissionClassificationTableType;
use App\DataTable\SpaceMissionTableType;
use App\Entity\SpaceMission;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\AdminBundle\Controller\AdminController;
use Umbrella\CoreBundle\Utils\Utils;

/**
 * @Route("/datatable")
 */
class DatatableController extends AdminController
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
     * @Route("/draggable")
     */
    public function draggable(Request $request)
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
    public function editable(Request $request)
    {
        $table = $this->createTable(SpaceMissionTableType::class, [
            'exportable' => true,
            'editable' => true,
        ]);
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
        foreach (SpaceMission::MISSION_STATUSES as $status) {
            $table = $this->createTable(SpaceMissionTableType::class, [
                'editable' => true,
                'show_mission_status_filter' => false,
                'mission_status' => $status,
                'id' => 'space_mission_' . Utils::to_underscore($status),
                'page_length' => 10
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
        return $this->render('admin/datatable/modal.html.twig', [
            'statuses' => SpaceMission::MISSION_STATUSES
        ]);
    }

    /**
     * @Route("/xhr-modal/{status}")
     */
    public function xhrModal(Request $request, string $status)
    {
        $table = $this->createTable(SpaceMissionTableType::class, [
            'show_mission_status_filter' => false,
            'mission_status' => $status,
            'load_url' => $this->generateUrl('app_admin_datatable_xhrmodal', ['status' => $status]),
            'page_length' => 10
        ]);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->jsResponseBuilder()->modal('admin/datatable/_modal.html.twig', [
            'status' => $status,
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
