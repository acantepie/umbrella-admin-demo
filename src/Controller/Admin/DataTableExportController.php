<?php

namespace App\Controller\Admin;

use App\DataTable\FishTableType;
use App\Entity\Fish;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Component\DataTable\Adapter\EntityAdapter;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * Class DataTableExportController
 *
 * @Route("/datatable/export")
 */
class DataTableExportController extends BaseController
{
    /**
     * @Route("")
     */
    public function indexAction(Request $request)
    {
        $table = $this->createTable(FishTableType::class, [
            'disabled' => true,
            'exportable' => true,
        ]);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('@UmbrellaAdmin/DataTable/index.html.twig', [
            'table' => $table,
        ]);
    }

    /**
     * @Route("/selected")
     */
    public function selectedAction(Request $request)
    {
        $table = $this->createTable(FishTableType::class);

        /** @var EntityAdapter $adapter */
        $adapter = $table->getAdapter();
        $fishes = $adapter
            ->getQueryBuilder($table->createRequest(), $table->getAdapterOptions())
            ->andWhere('e.id IN (:ids)')
            ->setParameter('ids', $request->query->get('ids'))
            ->getQuery()
            ->getResult();

        return $this->csvResponse($fishes);
    }

    /**
     * @Route("/filtered")
     */
    public function filteredAction(Request $request)
    {
        $table = $this->createTable(FishTableType::class, [
            'paging' => false
        ]);

        /** @var EntityAdapter $adapter */
        $adapter = $table->getAdapter();
        $fishes = $adapter
            ->getQueryBuilder($table->createRequest($request), $table->getAdapterOptions())
            ->getQuery()
            ->getResult();

        return $this->csvResponse($fishes);
    }

    /**
     * @param Fish[] $fishes
     */
    private function csvResponse(array $fishes): Response
    {
        $fp = fopen('php://temp', 'w');
        foreach ($fishes as $fish) {
            fputcsv($fp, [
                $fish->name,
                $fish->description,
                $fish->edible ? 'Oui' : 'Non',
            ], ';');
        }
        rewind($fp);

        $response = new Response(\stream_get_contents($fp));
        fclose($fp);

        $response->headers->set('Content-Type', 'text/csv');
        $response->headers->set('Content-Disposition', 'attachment; filename="export.csv"');

        return $response;
    }
}
