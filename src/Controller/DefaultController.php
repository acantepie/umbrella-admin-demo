<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * Class DefaultController
 *
 * @Route("/")
 */
class DefaultController extends BaseController
{
    /**
     * @Route("")
     */
    public function indexAction()
    {
        return $this->render('landing.html.twig');
    }
}
