<?php

namespace App\Controller;

use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Umbrella\AdminBundle\Lib\Controller\AdminController;

#[Route('/js')]
class JsController extends AdminController
{
    #[Route('')]
    public function index(): Response
    {
        return $this->render('js/index.html.twig');
    }

    // modal

    #[Route('/modal')]
    public function modal(): Response
    {
        return $this->js()->modal('@UmbrellaAdmin/lib/modal/default.html.twig', [
            'title' => 'A modal',
            'content' => '...'
        ]);
    }

    #[Route('/modal/small')]
    public function smallModal(): Response
    {
        return $this->js()->modal('@UmbrellaAdmin/lib/modal/default.html.twig', [
            'title' => 'A modal',
            'content' => '...',
            'class' => 'modal-sm'
        ]);
    }

    #[Route('/modal/form')]
    public function formModal(Request $request): Response
    {
        $form = $this->createFormBuilder()
            ->add('Recipient', TextType::class, ['required' => false])
            ->add('message', TextareaType::class, ['required' => false])
            ->getForm()
            ->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            return $this->js()->closeModal();
        }

        return $this->js()->modal('@UmbrellaAdmin/lib/modal/form.html.twig', [
            'title' => 'New message',
            'class' => 'modal-sm',
            'form' => $form->createView()
        ]);
    }

    #[Route('/modal/sleep')]
    public function sleepModal(): Response
    {
        \sleep(1);

        return $this->js()->modal('@UmbrellaAdmin/lib/modal/default.html.twig', [
            'title' => 'A modal',
            'content' => '...'
        ]);
    }

    // offcanvas

    #[Route('/offcanvas')]
    public function offcanvas(): Response
    {
        return $this->js()->offcanvas('@UmbrellaAdmin/lib/offcanvas/default.html.twig', [
            'title' => 'Left offcanvas',
            'content' => '...'
        ]);
    }

    #[Route('/offcanvas/left')]
    public function leftOffcanvas(): Response
    {
        return $this->js()->offcanvas('@UmbrellaAdmin/lib/offcanvas/default.html.twig', [
            'title' => 'Left offcanvas',
            'class' => 'offcanvas-start',
            'content' => '...'
        ]);
    }

    #[Route('/offcanvas/form')]
    public function formOffcanvas(Request $request): Response
    {
        $form = $this->createFormBuilder()
            ->add('Recipient', TextType::class, ['required' => false])
            ->add('message', TextareaType::class, ['required' => false])
            ->getForm()
            ->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            return $this->js()->closeOffcanvas();
        }

        return $this->js()->offcanvas('@UmbrellaAdmin/lib/offcanvas/form.html.twig', [
            'title' => 'New message',
            'form' => $form->createView()
        ]);
    }

    // toast

    #[Route('/toast/success')]
    public function successToast(): Response
    {
        return $this->js()->toastSuccess('...', 'Success toast');
    }

    #[Route('/toast/error')]
    public function errorToast(): Response
    {
        return $this->js()->toastError('...', 'Error toast');
    }

    // dom

    #[Route('/dom/update')]
    public function updateDOM(): Response
    {
        $now = new \DateTime();
        $h = sprintf('<div class="alert alert-info my-2">Server time %s</div>', $now->format(\DateTimeInterface::ISO8601));

        return $this->js()->updateHtml($h, '#alert-stack');
    }

    #[Route('/dom/remove')]
    public function removeDOM(): Response
    {
        return $this->js()->remove('#alert-stack > *');
    }

    // web components

    #[Route('/menu/toggle')]
    public function toggleMenu(): Response
    {
        return $this->js()->call('toggle', [], '[is=umbrella-sidebar]');
    }

    // custom

    #[Route('/custom')]
    public function custom(): Response
    {
        return $this->js()->add('alert', ['text' => '...']);
    }
}
