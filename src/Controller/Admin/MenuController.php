<?php

namespace App\Controller\Admin;

use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * Class MenuController
 *
 * @Route("/menu")
 */
class MenuController extends BaseController
{
    /**
     * @Route("/how-to")
     */
    public function howToAction()
    {
        $this->getBreadcrumb()->addItem(['label' => 'breadcrumb.howto']);

        return $this->render('admin/menu/howto.html.twig');
    }

    /**
     * @Route("/exemple")
     */
    public function exempleAction()
    {
        $this->getMenu()->setCurrent(':menu');
        $this->getBreadcrumb()->addItem(['label' => 'breadcrumb.exemple']);

        return $this->render('admin/menu/exemple.html.twig');
    }
}
