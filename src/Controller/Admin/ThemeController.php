<?php

namespace App\Controller\Admin;

use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * Class ThemeController
 *
 * @Route("/theme")
 */
class ThemeController extends BaseController
{
    /**
     * @Route("")
     */
    public function indexAction()
    {
        return $this->render('theme/index.html.twig');
    }
}
