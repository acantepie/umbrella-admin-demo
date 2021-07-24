<?php

namespace App\Notification;

use App\Entity\AdminNotification;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Security;
use Umbrella\AdminBundle\Notification\BaseNotificationProvider;

class AdminNotificationProvider extends BaseNotificationProvider
{
    private EntityManagerInterface $em;
    private Security $security;

    /**
     * AdminNotificationProvider constructor.
     */
    public function __construct(EntityManagerInterface $em, Security $security)
    {
        $this->em = $em;
        $this->security = $security;
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
