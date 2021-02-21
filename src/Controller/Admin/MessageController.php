<?php

namespace App\Controller\Admin;

use App\Form\Message\NewFishType;
use App\Message\ExportFishMessage;
use App\Message\NewFishMessage;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * Class MessageController
 *
 * @Route("/message")
 */
class MessageController extends BaseController
{
    /**
     * @Route("")
     */
    public function indexAction(Request $request)
    {
        $newFishForm = $this->createForm(NewFishType::class);
        $newFishForm->handleRequest($request);

        if ($newFishForm->isSubmitted() && $newFishForm->isValid()) {
            $message = new NewFishMessage($newFishForm->getData()['speciesId']);
            $this->dispatchMessage($message);

            $this->addFlash('message_registered', true);

            return $this->redirectToRoute('app_admin_message_index');
        }

        if ($request->query->get('export_fish')) {
            $message = new ExportFishMessage();
            $this->dispatchMessage($message);

            $response = new Response($message->output);
            $disposition = $response->headers->makeDisposition(
                ResponseHeaderBag::DISPOSITION_ATTACHMENT,
                'fishes.csv'
            );
            $response->headers->set('Content-Disposition', $disposition);

            return $response;
        }

        return $this->render('admin/message/index.html.twig', [
            'new_fish_form' => $newFishForm->createView(),
        ]);
    }
}
