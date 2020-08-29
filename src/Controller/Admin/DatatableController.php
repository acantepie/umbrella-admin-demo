<?php
/**
 * Created by PhpStorm.
 * User: acantepie
 * Date: 22/03/20
 * Time: 20:26
 */

namespace App\Controller\Admin;

use App\Entity\Cat;
use App\Form\CatType;
use App\DataTable\ArrayTableType;
use App\DataTable\SimpleTableType;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * @Route("/datatable")
 */
class DatatableController extends BaseController
{

    /**
     * @Route("/simple")
     */
    public function simpleAction(Request $request)
    {
        $table = $this->createTable(SimpleTableType::class);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return new JsonResponse($table->getApiResults());
        }

        return $this->render('@UmbrellaAdmin/DataTable/index.html.twig', array(
            'table' => $table
        ));
    }

    /**
     * @Route(path="/simple/edit/{id}", requirements={"id"="\d+"})
     */
    public function simpleEditAction(Request $request, $id = null)
    {
        if ($id === null) {
            $entity = new Cat();
        } else {
            $entity = $this->findOrNotFound(Cat::class, $id);
        }

        $form = $this->createForm(CatType::class, $entity);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->persistAndFlush($entity);

            return $this->jsResponseBuilder()
                ->closeModal()
                ->reloadTable('app_datatable_simpletable')
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
     * @Route(path="/simple/delete/{id}", requirements={"id"="\d+"})
     */
    public function simpleDeleteAction(Request $request, $id)
    {
        $entity = $this->findOrNotFound(Cat::class, $id);
        $this->removeAndFlush($entity);

        return $this->jsResponseBuilder()
            ->reloadTable('app_datatable_simpletable')
            ->toastSuccess('message.entity_deleted');
    }

    /**
     * @Route("/array")
     */
    public function arrayAction(Request $request)
    {
        $table = $this->createTable(ArrayTableType::class);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return new JsonResponse($table->getApiResults());
        }

        return $this->render('@UmbrellaAdmin/DataTable/index.html.twig', array(
            'table' => $table
        ));
    }

    /**
     * @Route("/multiple")
     */
    public function multipleAction(Request $request)
    {
        $table1 = $this->createTable(SimpleTableType::class);
        $table1->handleRequest($request);

        $table2 = $this->createTable(ArrayTableType::class);
        $table2->handleRequest($request);

        if ($table1->isCallback()) {
            return new JsonResponse($table1->getApiResults());
        }

        if ($table2->isCallback()) {
            return new JsonResponse($table2->getApiResults());
        }

        return $this->render('datatable/multiple.html.twig', array(
            'table1' => $table1,
            'table2' => $table2
        ));
    }

}