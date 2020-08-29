<?php
/**
 * Created by PhpStorm.
 * User: acantepie
 * Date: 18/04/20
 * Time: 23:10
 */

namespace App\Controller\Admin;

use App\DataTable\NodeTableType;
use App\Entity\NodeEntity;
use App\Form\NodeEntityType;
use App\Model\TreeNode;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * @Route("/treetable")
 */
class TreeTableController extends BaseController
{
    /**
     * @Route("")
     */
    public function indexAction(Request $request)
    {
//        $this->init();
        $table = $this->createTable(NodeTableType::class);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return new JsonResponse($table->getApiResults());
        }

        return $this->render('@UmbrellaAdmin/DataTable/index.html.twig', array(
            'table' => $table,
        ));
    }

    /**
     * @Route("/edit/{id}", requirements={"id"="\d+"})
     */
    public function editAction(Request $request, $id = null)
    {
        if ($id === null) {
            if ($request->query->has('parentId')) {
                $parent = $this->findOrNotFound(NodeEntity::class, $request->query->get('parentId'));
            } else {
                $parent = $this->getRepository(NodeEntity::class)->findRoot();
            }
            $entity = new NodeEntity();
            $entity->parent = $parent;
        } else {
            $entity = $this->findOrNotFound(NodeEntity::class, $id);
        }

        $form = $this->createForm(NodeEntityType::class, $entity);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->persistAndFlush($entity);
            return $this->jsResponseBuilder()
                ->closeModal()
                ->toastSuccess('message.entity_update')
                ->reloadTable();
        }

        return $this->jsResponseBuilder()
            ->openModalView('@UmbrellaAdmin/Layout/edit_modal.html.twig', array(
                'form' => $form->createView(),
                'title' => $entity->id ? $this->trans('action.edit_node') :  $this->trans('action.add_node'),
                'entity' => $entity,
            ));
    }

    /**
     * @Route("/delete/{id}", requirements={"id"="\d+"})
     */
    public function deleteAction($id)
    {
        $entity = $this->findOrNotFound(NodeEntity::class, $id);
        $this->removeAndFlush($entity);

        return $this->jsResponseBuilder()
            ->reloadTable()
            ->toastSuccess('message.entity_deleted');
    }

    /**
     *
     */
    private function treeData()
    {
        $root = new TreeNode(1, null, null);
        $root
            ->addChild(new TreeNode(2, 'Mammifère', 'famille'))
                ->addChild(new TreeNode(3, 'Rongeur', 'sous-famille'))
                    ->addChild(new TreeNode(4, 'Castor', 'animal'))->parent()
                    ->addChild(new TreeNode(5, 'hamster', 'animal'))->parent()
                ->parent()
                ->addChild(new TreeNode(6, 'Felin', 'sous-famille'))
                    ->addChild(new TreeNode(7, 'Chat', 'animal'))->parent()
                    ->addChild(new TreeNode(8, 'tigre', 'animal'))->parent()
                    ->addChild(new TreeNode(9, 'lion', 'animal'))->parent()
                ->parent()
            ->parent()
            ->addChild(new TreeNode(10, 'Marin', 'famille'))
                ->addChild(new TreeNode(11, 'Batracien', 'sous-famille'))->parent()
                ->addChild(new TreeNode(12, 'Poisson', 'sous-famille'))
                    ->addChild(new TreeNode(13, 'truite', 'animal'))->parent()
                    ->addChild(new TreeNode(14, 'saumon', 'animal'));

        return $root;
    }

    private function init()
    {
        $this->em()->createQuery('DELETE ' . NodeEntity::class . ' e')->execute();

        $root = new NodeEntity();
        $root
            ->addChild(new NodeEntity('Mammifère', 'famille'))
                ->addChild(new NodeEntity('Rongeur', 'sous-famille'))
                    ->addChild(new NodeEntity('Castor', 'animal'))->parent()
                    ->addChild(new NodeEntity('hamster', 'animal'))->parent()
                ->parent()
                ->addChild(new NodeEntity('Felin', 'sous-famille'))
                    ->addChild(new NodeEntity('Chat', 'animal'))->parent()
                    ->addChild(new NodeEntity('tigre', 'animal'))->parent()
                    ->addChild(new NodeEntity('lion', 'animal'))->parent()
                ->parent()
            ->parent()
            ->addChild(new NodeEntity('Marin', 'famille'))
                ->addChild(new NodeEntity('Batracien', 'sous-famille'))->parent()
                ->addChild(new NodeEntity('Poisson', 'sous-famille'))
                    ->addChild(new NodeEntity('truite', 'animal'))->parent()
                    ->addChild(new NodeEntity('saumon', 'animal'));

        $this->em()->persist($root);
        $this->em()->flush();
    }
}