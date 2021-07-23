<?php

namespace App\Controller\Admin;

use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * @Route("/menu")
 */
class MenuController extends BaseController
{
    /**
     * @Route("")
     */
    public function index()
    {
        return $this->render('admin/menu/index.html.twig');
    }
}
