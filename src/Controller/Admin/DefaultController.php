<?php

namespace App\Controller\Admin;

use Symfony\Component\Routing\Annotation\Route;
use Umbrella\AdminBundle\Controller\AdminController;

/**
 * Class DefaultController.
 *
 * @Route("/")
 */
class DefaultController extends AdminController
{
    /**
     * @Route("/")
     */
    public function index()
    {
        return $this->redirectToRoute('app_admin_default_about');
    }

    /**
     * @Route("/about")
     */
    public function about()
    {
        return $this->render('admin/default/about.html.twig');
    }
}
