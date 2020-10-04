<?php
/**
 * Created by PhpStorm.
 * User: acantepie
 * Date: 18/04/20
 * Time: 23:10
 */

namespace App\Controller\Admin;

use App\Entity\FishCategory;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * @Route("/fish-category")
 */
class FishCategoryCRUDController extends BaseController
{
    /**
     * @Route("/edit/{id}", requirements={"id"="\d+"})
     * @param null|mixed $id
     */
    public function editAction(Request $request, $id = null)
    {
        if ($id === null) {
            if ($request->query->has('parentId')) {
                $parent = $this->findOrNotFound(FishCategory::class, $request->query->get('parentId'));
            } else {
                $parent = $this->getRepository(FishCategory::class)->findRoot();
            }
            $entity = new FishCategory();
            $entity->parent = $parent;
        } else {
            $entity = $this->findOrNotFound(FishCategory::class, $id);
        }

        $form = $this->createForm(FishCategoryType::class, $entity);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->persistAndFlush($entity);
            return $this->jsResponseBuilder()
                ->closeModal()
                ->toastSuccess('message.entity_update')
                ->reloadTable();
        }

        return $this->jsResponseBuilder()
            ->openModalView('@UmbrellaAdmin/Layout/edit_modal.html.twig', [
                'form' => $form->createView(),
                'title' => $entity->id ? $this->trans('action.edit_node') :  $this->trans('action.add_node'),
                'entity' => $entity,
            ]);
    }

    /**
     * @Route("/delete/{id}", requirements={"id"="\d+"})
     * @param mixed $id
     */
    public function deleteAction($id)
    {
        $entity = $this->findOrNotFound(FishCategory::class, $id);
        $this->removeAndFlush($entity);

        return $this->jsResponseBuilder()
            ->reloadTable()
            ->toastSuccess('message.entity_deleted');
    }
}
