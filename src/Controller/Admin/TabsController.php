<?php

namespace App\Controller\Admin;

use Symfony\Component\Routing\Annotation\Route;
use Umbrella\AdminBundle\Controller\AdminController;

/**
 * Class TabsController
 *
 * @Route("tabs")
 */
class TabsController extends AdminController
{
    /**
     * @Route("")
     */
    public function indexAction()
    {
        return $this->render('admin/tabs/index.html.twig');
    }
}
