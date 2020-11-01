<?php
/**
 * Created by PhpStorm.
 * User: acantepie
 * Date: 28/03/20
 * Time: 18:45
 */

namespace App\Controller\Admin;

use App\Entity\Fish;
use App\Entity\FormExample\BaseExample;
use App\Entity\FormExample\CkeditorExample;
use App\Entity\FormExample\CollectionExample;
use App\Entity\FormExample\DateExample;
use App\Entity\FormExample\Select2Example;
use App\Form\FormExample\BaseExampleType;
use App\Form\FormExample\CkEditorExampleType;
use App\Form\FormExample\CollectionExampleType;
use App\Form\FormExample\DateExampleType;
use App\Form\FormExample\Select2ExampleType;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * Class FormController
 *
 * @Route("/form")
 */
class FormController extends BaseController
{
    /**
     * @Route("/base")
     */
    public function baseAction(Request $request)
    {
        $this->getBreadcrumb()->addItem(['label' => 'breadcrumb.form_base']);

        /** @var BaseExample $entity */
        $entity = $this->loadOne(BaseExample::class);

        $form = $this->createForm(BaseExampleType::class, $entity);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->persistAndFlush($entity);

            $this->toastSuccess('message.entity_updated');

            return $this->redirectToRoute('app_admin_form_base');
        }

        return $this->render('form/base.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/date")
     */
    public function dateAction(Request $request)
    {
        $this->getMenu()->setCurrent(':forms');
        $this->getBreadcrumb()->addItem(['label' => 'breadcrumb.form_date']);

        /** @var DateExample $entity */
        $entity = $this->loadOne(DateExample::class);

        $form = $this->createForm(DateExampleType::class, $entity);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->persistAndFlush($entity);

            $this->toastSuccess('message.entity_updated');

            return $this->redirectToRoute('app_admin_form_date');
        }

        return $this->render('form/date.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/ckeditor")
     */
    public function ckeditorAction(Request $request)
    {
        $this->getMenu()->setCurrent(':forms');
        $this->getBreadcrumb()->addItem(['label' => 'breadcrumb.form_ckeditor']);

        /** @var DateExample $entity */
        $entity = $this->loadOne(CkeditorExample::class);

        $form = $this->createForm(CkEditorExampleType::class, $entity);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->persistAndFlush($entity);

            $this->toastSuccess('message.entity_updated');

            return $this->redirectToRoute('app_admin_form_ckeditor');
        }

        return $this->render('form/ckeditor.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/select2")
     */
    public function select2Action(Request $request)
    {
        $this->getMenu()->setCurrent(':forms');
        $this->getBreadcrumb()->addItem(['label' => 'breadcrumb.form_select2']);

        /** @var Select2Example $entity */
        $entity = $this->loadOne(Select2Example::class);

        $form = $this->createForm(Select2ExampleType::class, $entity);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->persistAndFlush($entity);

            $this->toastSuccess('message.entity_updated');

            return $this->redirectToRoute('app_admin_form_select2');
        }

        return $this->render('form/select2.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/collection")
     */
    public function collectionAction(Request $request)
    {
        $this->getMenu()->setCurrent(':forms');
        $this->getBreadcrumb()->addItem(['label' => 'breadcrumb.form_collection']);

        /** @var Select2Example $entity */
        $entity = $this->loadOne(CollectionExample::class);

        $form = $this->createForm(CollectionExampleType::class, $entity);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->persistAndFlush($entity);

            $this->toastSuccess('message.entity_updated');

            return $this->redirectToRoute('app_admin_form_collection');
        }

        return $this->render('form/collection.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/fish-api")
     */
    public function fishApiAction(Request $request)
    {
        $qb = $this->em()->createQueryBuilder();
        $qb->select('e');
        $qb->from(Fish::class, 'e');

        $q = trim($request->query->get('q'));
        if (!empty($q)) {
            $qb->andWhere('LOWER(e.search) LIKE :search');
            $qb->setParameter('search', '%' . strtolower($q) . '%');
        }

        $serialized = [];

        /** @var Fish $fish */
        foreach ($qb->getQuery()->getResult() as $fish) {
            $serialized[] = [
                'id' => $fish->id,
                'text' => $fish->name,
                'description' => $fish->description,
            ];
        }

        return new JsonResponse($serialized);
    }

    /**
     * @param $entityClass
     *
     * @return mixed
     */
    private function loadOne($entityClass)
    {
        return $this->em()
            ->createQueryBuilder()
            ->select('e')
            ->from($entityClass, 'e')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }
}
