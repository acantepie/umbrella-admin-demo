<?php

namespace App\Controller\Admin;

use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * Class IconController
 *
 * @Route("/icon")
 */
class IconController extends BaseController
{
    /**
     * @Route("/md")
     */
    public function mdAction()
    {
        return $this->render('admin/icon/md.html.twig');
    }

    /**
     * @Route("/unicon")
     */
    public function uniconAction()
    {
        return $this->render('admin/icon/unicon.html.twig');
    }
}
