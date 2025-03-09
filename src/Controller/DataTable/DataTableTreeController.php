<?php

namespace App\Controller\DataTable;

use App\DataTable\SpaceMissionClassificationTableType;
use App\Entity\SpaceMissionClassification;
use App\Repository\SpaceMissionClassificationRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Umbrella\AdminBundle\Lib\Controller\AdminController;

#[Route('/datatable/tree')]
class DataTableTreeController extends AdminController
{
    #[Route('')]
    public function index(Request $request): Response
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
    public function move(SpaceMissionClassificationRepository $repository, int $id, string $direction): Response
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
