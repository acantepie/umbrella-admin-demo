<?php

namespace App\Controller\Admin;

use App\DataTable\KangarooTableType;
use App\Entity\Kangaroo;
use App\Form\KangarooType;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * @Route("/kangaroo")
 */
class KangarooController extends BaseController
{
    /**
     * @Route("")
     */
    public function simpleAction(Request $request)
    {
        $table = $this->createTable(KangarooTableType::class);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return new JsonResponse($table->getApiResults());
        }

        return $this->render('@UmbrellaAdmin/DataTable/index.html.twig', array(
            'table' => $table
        ));
    }

    /**
     * @Route(path="/edit/{id}", requirements={"id"="\d+"})
     */
    public function editAction(Request $request, $id = null)
    {
        if ($id === null) {
            $entity = new Kangaroo();
        } else {
            $entity = $this->findOrNotFound(Kangaroo::class, $id);
        }

        $form = $this->createForm(KangarooType::class, $entity);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->persistAndFlush($entity);

            return $this->jsResponseBuilder()
                ->closeModal()
                ->reloadTable()
                ->toastSuccess('message.entity_updated');
        }

        return $this->jsResponseBuilder()
            ->openModalView('@UmbrellaAdmin/Layout/edit_modal.html.twig', array(
                'form' => $form->createView(),
                'title' => $entity->id ? $this->trans('action.edit_cat') :  $this->trans('action.add_cat'),
                'entity' => $entity,
            ));
    }

    /**
     * @Route(path="/delete/{id}", requirements={"id"="\d+"})
     */
    public function deleteAction(Request $request, $id)
    {
        $entity = $this->findOrNotFound(Kangaroo::class, $id);
        $this->removeAndFlush($entity);

        return $this->jsResponseBuilder()
            ->reloadTable()
            ->toastSuccess('message.entity_deleted');
    }

}