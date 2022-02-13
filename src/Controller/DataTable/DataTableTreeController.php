<?php

namespace App\Controller\DataTable;

use App\DataTable\SpaceMissionClassificationTableType;
use App\Entity\SpaceMissionClassification;
use App\Repository\SpaceMissionClassificationRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

#[Route('/datatable/tree')]
class DataTableTreeController extends BaseController
{
    #[Route('')]
    public function index(Request $request)
    {
        $table = $this->createTable(SpaceMissionClassificationTableType::class);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('datatable/tree/index.html.twig', [
            'table' => $table,
        ]);
    }

    #[Route('/move/{id}/{direction}', requirements: ['id' => '\d+'])]
    public function move(SpaceMissionClassificationRepository $repository, int $id, string $direction)
    {
        $entity = $this->findOrNotFound(SpaceMissionClassification::class, $id);
        if ('up' === $direction) {
            $repository->moveUp($entity);
        } else {
            $repository->moveDown($entity);
        }

        return $this->js()
            ->reloadTable();
    }
}
