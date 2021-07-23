<?php

namespace App\Notification;

use App\Entity\AdminNotification;
use Doctrine\ORM\EntityManagerInterface;
use Umbrella\AdminBundle\Notification\BaseNotificationProvider;

class AdminNotificationProvider extends BaseNotificationProvider
{
    private EntityManagerInterface $em;

    /**
     * NotificationProvider constructor.
     */
    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    public function findByUser($user): iterable
    {
        $qb = $this->em->createQueryBuilder();
        $qb->select('e');
        $qb->from(AdminNotification::class, 'e');
        $qb->orderBy('e.createdAt', 'DESC');
        $qb->setMaxResults(10);

        if (null !== $user) {
            $qb->innerJoin('e.users', 'users');
            $qb->andWhere('users = :users');
            $qb->setParameter('users', $user);
        }

        return $qb->getQuery()->getResult();
    }
}
