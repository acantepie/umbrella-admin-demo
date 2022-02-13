<?php

namespace App\Message\Handler;

use App\Entity\AdminNotification;
use App\Message\CounterMessage;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;

class CounterMessageHandler implements MessageHandlerInterface
{
    /**
     * CounterMessageHandler constructor.
     */
    public function __construct(private EntityManagerInterface $em)
    {
    }

    public function __invoke(CounterMessage $message)
    {
        $notification = new AdminNotification();
        $notification->runningIcon();
        $notification->title = 'Count from 0 to ' . $message->max;

        $this->em->persist($notification);
        $this->em->flush();

        for ($i = 0; $i <= $message->max; ++$i) {
            sleep(1);

            $notification->text = ' ... ... ... ' . $i;
            $this->em->flush();
        }

        $notification->successIcon();
        $notification->text = 'then ' . $message->max . ' !';
        $this->em->flush();
    }
}
