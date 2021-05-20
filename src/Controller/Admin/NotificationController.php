<?php

namespace App\Controller\Admin;

use App\Entity\Notification;
use App\Form\NotificationType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\AdminBundle\Controller\AdminController;
use Umbrella\AdminBundle\Notification\NotificationManager;

/**
 * Class NotificationController
 *
 * @Route("/notification")
 */
class NotificationController extends AdminController
{
    /**
     * @Route("")
     */
    public function index(NotificationManager $manager, Request $request)
    {
        $notification = new Notification();
        $notification->title = 'Hello world !';
        $notification->icon = 'mdi mdi-bell-outline';
        $form = $this->createForm(NotificationType::class, $notification);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            if (0 === count($notification->users)) {
                $notification->sendToAll = true;
            }
            $manager->send($notification);

            $this->alertSuccess('Click on bell to see me !', 'New notification');

            return $this->redirectToRoute('app_admin_notification_index');
        }

        return $this->render('admin/notification/index.html.twig', [
            'form' => $form->createView()
        ]);
    }
}
