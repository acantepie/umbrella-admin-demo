<?php

namespace App\Notification;

use App\Entity\Notification;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Umbrella\AdminBundle\Notification\NotificationException;
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
        if (null === $user) {
            throw new NotificationException('Notification can be provided only to authenticated user.');
        }

        $qb = $this->em->createQueryBuilder();
        $qb->select('e');
        $qb->from(Notification::class, 'e');
        $qb->leftJoin('e.users', 'user');

        $orX = $qb->expr()->orX();
        $orX->add('e.sendToAll =  TRUE');

        if ($user instanceof User) {
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
