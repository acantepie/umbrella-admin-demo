<?php
/**
 * Created by PhpStorm.
 * User: acantepie
 * Date: 18/04/20
 * Time: 23:10
 */

namespace App\Controller\Admin;

use App\Entity\FishCategory;
use App\Form\FishCategoryType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * @Route("/fish-category")
 */
class FishCategoryCRUDController extends BaseController
{
    /**
     * @Route("/edit/{id}", requirements={"id": "\d+"})
     *
     * @param mixed|null $id
     */
    public function editAction(Request $request, $id = null)
    {
        if (null === $id) {
            $entity = new FishCategory();
            $entity->parent = $this->getRepository(FishCategory::class)->findRoot(true);
        } else {
            $entity = $this->findOrNotFound(FishCategory::class, $id);
        }

        $form = $this->createForm(FishCategoryType::class, $entity);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->persistAndFlush($entity);

            return $this->jsResponseBuilder()
                ->closeModal()
                ->toastSuccess('message.entity_updated')
                ->reloadTable();
        }

        return $this->jsResponseBuilder()
            ->openModalView('@UmbrellaAdmin/edit_modal.html.twig', [
                'form' => $form->createView(),
                'entity' => $entity,
            ]);
    }

    /**
     * @Route("/delete/{id}", requirements={"id": "\d+"})
     *
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
