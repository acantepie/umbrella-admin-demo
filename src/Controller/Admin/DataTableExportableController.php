<?php

namespace App\Controller\Admin;

use App\DataTable\SpaceMissionTableType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * @Route("/datatable/exportable")
 */
class DataTableExportableController extends BaseController
{
    /**
     * @Route("/export")
     */
    public function export(Request $request)
    {
        $table = $this->createTable(SpaceMissionTableType::class);
        $mode = $request->query->get('mode');

        if ('selection' === $mode) {
            $missions = $table
                ->getAdapterQueryBuilder()
                ->andWhere('e.id IN (:ids)')
                ->setParameter('ids', $request->query->get('ids'))
                ->getQuery()
                ->getResult();
        } else {
            $parameters = $request->query->all();
            unset($parameters['length']); // disable pagination

            $missions = $table
                ->submit($parameters)
                ->getAdapterQueryBuilder()
                ->getQuery()
                ->getResult();
        }

        $fp = fopen('php://temp', 'w');
        foreach ($missions as $mission) {
            fputcsv($fp, [
                $mission->date->format(DATE_ISO8601),
                $mission->companyName,
                $mission->location,
                $mission->detail,
                $mission->cost,
                $mission->rocketStatus,
                $mission->missionStatus
            ]);
        }
        rewind($fp);

        $content = \stream_get_contents($fp);
        fclose($fp);

        return $this->js()
            ->download($content, 'export.csv');
    }
}
