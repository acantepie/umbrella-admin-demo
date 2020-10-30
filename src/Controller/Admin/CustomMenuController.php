<?php


namespace App\Controller\Admin;

use App\Entity\CustomMenuConfig;
use App\Form\CustomMenuConfigType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * Class MenuController
 * @Route("/custom-menu")
 */
class CustomMenuController extends BaseController
{

    /**
     * @Route("")
     */
    public function indexAction(Request $request)
    {
        $config = $this->getRepository(CustomMenuConfig::class)->getConfig();
        $form = $this->createForm(CustomMenuConfigType::class, $config);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->persistAndFlush($config);

            $this->toastSuccess('message.entity_updated');
            return $this->redirectToRoute('app_admin_custommenu_index');
        }

        return $this->render('custommenu/index.html.twig', [
            'form' => $form->createView()
        ]);
    }

}