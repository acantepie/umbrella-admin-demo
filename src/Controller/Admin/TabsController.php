<?php

namespace App\Controller\Admin;

use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * @Route("tabs")
 */
class TabsController extends BaseController
{
    /**
     * @Route("")
     */
    public function index()
    {
        return $this->render('admin/tabs/index.html.twig');
    }
}
