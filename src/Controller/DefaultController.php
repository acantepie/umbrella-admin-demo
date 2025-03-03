<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Umbrella\CoreBundle\Controller\BaseController;

#[Route('/')]
class DefaultController extends BaseController
{
    #[Route('')]
    public function index(): Response
    {
        return $this->redirectToRoute('app_datatable_datatablebasic_index');
    }
}
