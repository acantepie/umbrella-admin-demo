<?php

namespace App\Notification;

use App\Entity\AdminNotification;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Security;
use Umbrella\AdminBundle\Notification\BaseNotificationProvider;

class AdminNotificationProvider extends BaseNotificationProvider
{
    public function __construct(private EntityManagerInterface $em, private Security $security)
    {
    }

    public function collect(): iterable
    {
        $qb = $this->em->createQueryBuilder();
        $qb->select('e');
        $qb->from(AdminNotification::class, 'e');
        $qb->orderBy('e.createdAt', 'DESC');
        $qb->setMaxResults(10);

        $user = $this->security->getUser();
        if (null !== $user) {
            $qb->innerJoin('e.users', 'users');
            $qb->andWhere('users = :user');
            $qb->setParameter('user', $user);
        }

        return $qb->getQuery()->getResult();
    }
}
