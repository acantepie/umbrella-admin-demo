<?php

namespace App\Notification;

use App\Entity\AdminUser;
use App\Entity\Notification;
use Doctrine\ORM\EntityManagerInterface;
use Umbrella\AdminBundle\Notification\Provider\NotificationProviderInterface;

class NotificationProvider implements NotificationProviderInterface
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
        $qb->from(Notification::class, 'e');
        $qb->leftJoin('e.users', 'user');

        $orX = $qb->expr()->orX();
        $orX->add('e.sendToAll =  TRUE');

        if ($user instanceof AdminUser) {
            $orX->add('user = :user');
            $qb->setParameter('user', $user);
        }

        $qb->andWhere($orX);
        $qb->orderBy('e.createdAt', 'DESC');

        $qb->leftJoin('e.users', 'users');

        $qb->setMaxResults(10);

        return $qb->getQuery()->getResult();
    }
}
