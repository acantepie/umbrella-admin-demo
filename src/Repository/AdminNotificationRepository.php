<?php

namespace App\Repository;

use App\Entity\AdminNotification;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;

/**
 * @method AdminNotification|null find($id, $lockMode = null, $lockVersion = null)
 * @method AdminNotification|null findOneBy(array $criteria, array $orderBy = null)
 * @method AdminNotification[]    findAll()
 * @method AdminNotification[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AdminNotificationRepository extends EntityRepository
{
    public function __construct(EntityManagerInterface $manager)
    {
        parent::__construct($manager, $manager->getClassMetadata(AdminNotification::class));
    }
}
