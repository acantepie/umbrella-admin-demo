<?php

namespace App\Controller\Admin;

use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * @Route("/")
 */
class DefaultController extends BaseController
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
