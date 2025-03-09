<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Umbrella\AdminBundle\Lib\Controller\AdminController;

#[Route('/')]
class DefaultController extends AdminController
{
    #[Route('')]
    public function index(): Response
    {
        return $this->redirectToRoute('app_datatable_datatablebasic_index');
    }
}
