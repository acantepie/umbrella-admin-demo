<?php

namespace App\Controller\Admin;

use App\Entity\Fish;
use App\Form\FishType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * Class FishCRUDController
 * @Route("/fish")
 */
class FishCRUDController extends BaseController
{
    /**
     * @Route(path="/edit/{id}", requirements={"id"="\d+"})
     * @param null|mixed $id
     */
    public function editAction(Request $request, $id = null)
    {
        if ($id === null) {
            $entity = new Fish();
        } else {
            $entity = $this->findOrNotFound(Fish::class, $id);
        }

        $form = $this->createForm(FishType::class, $entity);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->persistAndFlush($entity);

            return $this->jsResponseBuilder()
                ->closeModal()
                ->reloadTable()
                ->toastSuccess('message.entity_updated');
        }

        return $this->jsResponseBuilder()
            ->openModalView('@UmbrellaAdmin/Layout/edit_modal.html.twig', [
                'form' => $form->createView(),
                'title' => $entity->id ? $this->trans('action.edit_fish') :  $this->trans('action.add_fish')
            ]);
    }

    /**
     * @Route(path="/delete/{id}", requirements={"id"="\d+"})
     * @param mixed $id
     */
    public function deleteAction(Request $request, $id)
    {
        $entity = $this->findOrNotFound(Fish::class, $id);
        $this->removeAndFlush($entity);

        return $this->jsResponseBuilder()
            ->reloadTable()
            ->toastSuccess('message.entity_deleted');
    }
}
