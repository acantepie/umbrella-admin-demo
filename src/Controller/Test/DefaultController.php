<?php

namespace App\Controller\Test;

use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * @Route("/")
 */
class DefaultController extends BaseController
{
    /**
     * @Route("")
     */
    public function indexAction()
    {
        return $this->render('test/default/index.html.twig');
    }
}
