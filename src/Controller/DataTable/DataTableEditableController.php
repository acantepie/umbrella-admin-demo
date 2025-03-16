<?php

namespace App\Controller\DataTable;

use App\DataTable\SpaceMissionEditableTableType;
use App\Entity\SpaceMission;
use App\Form\SpaceMissionType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Umbrella\AdminBundle\Lib\Controller\AdminController;

#[Route('/datatable/editable')]
class DataTableEditableController extends AdminController
{
    #[Route('')]
    public function index(Request $request): Response
    {
        $table = $this->createTable(SpaceMissionEditableTableType::class);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('datatable/editable/index.html.twig', [
            'table' => $table,
        ]);
    }

    #[Route('/edit/{id}', requirements: ['id' => '\d+'])]
    public function edit(Request $request, ?int $id = null): Response
    {
        if (null === $id) {
            $entity = new SpaceMission();
        } else {
            $entity = $this->findOrNotFound(SpaceMission::class, $id);
        }

        $form = $this->createForm(SpaceMissionType::class, $entity);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->persistAndFlush($entity);

            return $this->js()
                ->closeModal()
                ->reloadTable()
                ->toastSuccess('Item updated');
        }

        return $this->js()
            ->modal('@UmbrellaAdmin/edit_modal.html.twig', [
                'form' => $form->createView(),
                'entity' => $entity,
            ]);
    }

    #[Route('/delete/{id}', requirements: ['id' => '\d+'])]
    public function delete(int $id): Response
    {
        $entity = $this->findOrNotFound(SpaceMission::class, $id);
        $this->removeAndFlush($entity);

        return $this->js()
            ->reloadTable()
            ->toastSuccess('Item deleted');
    }
}
