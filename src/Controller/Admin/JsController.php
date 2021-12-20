<?php

namespace App\Controller\Admin;

use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * @Route("/js")
 */
class JsController extends BaseController
{
    /**
     * @Route("")
     */
    public function index()
    {
        return $this->render('admin/js/index.html.twig');
    }

    // modal

    /**
     * @Route("/modal")
     */
    public function modal()
    {
        return $this->js()->modal('@UmbrellaCore/Modal/default.html.twig', [
            'title' => 'A modal',
            'content' => '...'
        ]);
    }

    /**
     * @Route("/small-modal")
     */
    public function smallModal()
    {
        return $this->js()->modal('@UmbrellaCore/Modal/default.html.twig', [
            'title' => 'A modal',
            'content' => '...',
            'class' => 'modal-sm'
        ]);
    }

    /**
     * @Route("/form-modal")
     */
    public function formModal(Request $request)
    {
        $form = $this->createFormBuilder()
            ->add('Recipient', TextType::class, ['required' => false])
            ->add('message', TextareaType::class, ['required' => false])
            ->getForm()
            ->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            return $this->js()->closeModal();
        }

        return $this->js()->modal('@UmbrellaCore/Modal/form.html.twig', [
            'title' => 'New message',
            'class' => 'modal-sm',
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/sleep-modal")
     */
    public function sleepModal()
    {
        \sleep(1);

        return $this->js()->modal('@UmbrellaCore/Modal/default.html.twig', [
            'title' => 'A modal',
            'content' => '...'
        ]);
    }

    // offcanvas

    /**
     * @Route("/offcanvas")
     */
    public function offcanvas()
    {
        return $this->js()->offcanvas('@UmbrellaCore/Offcanvas/default.html.twig', [
            'title' => 'Left offcanvas',
            'content' => '...'
        ]);
    }

    /**
     * @Route("/left-offcanvas")
     */
    public function leftOffcanvas()
    {
        return $this->js()->offcanvas('@UmbrellaCore/Offcanvas/default.html.twig', [
            'title' => 'Left offcanvas',
            'class' => 'offcanvas-start',
            'content' => '...'
        ]);
    }

    /**
     * @Route("/form-offcanvas")
     */
    public function formOffcanvas(Request $request)
    {
        $form = $this->createFormBuilder()
            ->add('Recipient', TextType::class, ['required' => false])
            ->add('message', TextareaType::class, ['required' => false])
            ->getForm()
            ->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            return $this->js()->closeOffcanvas();
        }

        return $this->js()->offcanvas('@UmbrellaCore/Offcanvas/form.html.twig', [
            'title' => 'New message',
            'form' => $form->createView()
        ]);
    }

    // toast

    /**
     * @Route("/success-toast")
     */
    public function successToast()
    {
        return $this->js()->toastSuccess('...', 'Success toast');
    }

    /**
     * @Route("/error-toast")
     */
    public function errorToast()
    {
        return $this->js()->toastError('...', 'Error toast');
    }

    // dom

    /**
     * @Route("/update-dom")
     */
    public function updateDOM()
    {
        $now = new \DateTime();
        $h = sprintf('<div class="alert alert-info my-2">Server time %s</div>', $now->format(\DateTimeInterface::ISO8601));

        return $this->js()->updateHtml('#alert-stack', $h);
    }

    /**
     * @Route("/remove-dom")
     */
    public function removeDOM()
    {
        return $this->js()->remove('#alert-stack > *');
    }

    // web components

    /**
     * @Route("/toggle-menu")
     */
    public function toggleMenu()
    {
        return $this->js()->callWebComponent('[is=umbrella-sidebar]', 'toggle');
    }

    // custom

    /**
     * @Route("/custom")
     */
    public function custom()
    {
        return $this->js()->add('alert', ['text' => '...']);
    }
}
