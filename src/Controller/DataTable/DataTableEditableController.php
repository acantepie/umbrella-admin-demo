<?php

namespace App\Controller\DataTable;

use App\DataTable\SpaceMissionEditableTableType;
use App\Entity\SpaceMission;
use App\Form\SpaceMissionType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use function Symfony\Component\Translation\t;
use Umbrella\CoreBundle\Controller\BaseController;

#[Route('/datatable/editable')]
class DataTableEditableController extends BaseController
{
    #[Route('')]
    public function index(Request $request)
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
    public function edit(Request $request, ?int $id = null)
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
                ->toastSuccess(t('Item updated'));
        }

        return $this->js()
            ->modal('@UmbrellaAdmin/edit_modal.html.twig', [
                'form' => $form->createView(),
                'entity' => $entity,
            ]);
    }

    #[Route('/delete/{id}', requirements: ['id' => '\d+'])]
    public function delete(int $id)
    {
        $entity = $this->findOrNotFound(SpaceMission::class, $id);
        $this->removeAndFlush($entity);

        return $this->js()
            ->reloadTable()
            ->callTable(null, 'unselectRowId', $id)
            ->toastSuccess(t('Item deleted'));
    }
}
