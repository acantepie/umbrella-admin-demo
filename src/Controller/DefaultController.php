<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

#[Route('/')]
class DefaultController extends BaseController
{
    #[Route('')]
    public function index()
    {
        return $this->redirectToRoute('app_datatable_datatablebasic_index');
    }
}
