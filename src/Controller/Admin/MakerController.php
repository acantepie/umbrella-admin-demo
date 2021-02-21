<?php

namespace App\Controller\Admin;

use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * Class MakerController
 *
 * @Route("/maker")
 */
class MakerController extends BaseController
{
    /**
     * @Route("")
     */
    public function indexAction()
    {
        return $this->render('admin/maker/index.html.twig');
    }
}
