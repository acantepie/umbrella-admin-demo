<?php

namespace App\Controller\Admin;

use App\DataTable\SpaceMissionEditableTableType;
use App\Enum\MissionStatus;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use function Symfony\Component\String\u;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * @Route("/datatable/multiple")
 */
class DataTableMultipleController extends BaseController
{
    /**
     * @Route("")
     */
    public function index(Request $request)
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
}
