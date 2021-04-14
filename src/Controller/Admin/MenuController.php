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
     * @Route("")
     */
    public function indexAction()
    {
        return $this->render('admin/menu/index.html.twig', [
            'admin_sidebar_yml' => file_get_contents(__DIR__ . '/../../../config/menu/admin_sidebar.yaml')
        ]);
    }
}
