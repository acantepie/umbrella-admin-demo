<?php

namespace App\Controller\Admin;

use App\Form\ToastType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Component\Toast\Toast;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * Class ToastController
 *
 * @Route("/toast")
 */
class ToastController extends BaseController
{
    /**
     * @Route("")
     */
    public function indexAction(Request $request)
    {
        $toast = new Toast();
        $toast->setText('Lorm ipsum ...');

        $form = $this->createForm(ToastType::class, $toast);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            return $this->jsResponseBuilder()
                ->toast($toast);
        }

        return $this->render('admin/toast/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
