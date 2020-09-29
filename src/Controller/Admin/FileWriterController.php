<?php

namespace App\Controller\Admin;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * Class FileWriterController
 *
 * @Route("file-writer")
 */
class FileWriterController extends BaseController
{
    /**
     * @Route("")
     */
    public function indexAction(Request $request)
    {
        return $this->render('file_writer/index.html.twig');
    }
}
