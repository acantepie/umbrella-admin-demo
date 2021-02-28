<?php

namespace App\Controller\Admin;

use App\Entity\Notification;
use App\Form\NotificationType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use function Symfony\Component\Translation\t;
use Umbrella\AdminBundle\Notification\NotificationManager;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * Class TabsController
 *
 * @Route("/notification")
 */
class NotificationController extends BaseController
{
    /**
     * @Route("/how-to")
     */
    public function howToAction()
    {
        $this->getBreadcrumb()->addItem(['label' => 'breadcrumb.howto']);

        return $this->render('admin/notification/howto.html.twig');
    }

    /**
     * @Route("/exemple")
     */
    public function exempleAction(Request $request, NotificationManager $manager)
    {
        $this->getMenu()->setCurrent(':notification');
        $this->getBreadcrumb()->addItem(['label' => 'breadcrumb.exemple']);

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

            $this->toastSuccess(t('message.notification_sent'));

            return $this->redirectToRoute('app_admin_notification_exemple');
        }

        return $this->render('admin/notification/exemple.html.twig', [
            'form' => $form->createView()
        ]);
    }
}
