<?php

namespace App\Controller\Admin;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * Class DefaultController.
 *
 * @Route("/")
 */
class DefaultController extends BaseController
{

    /**
     * @Route("/")
     *
     * @return Response
     */
    public function indexAction()
    {
        return $this->redirectToRoute('umbrella_admin_user_index');
    }
}
