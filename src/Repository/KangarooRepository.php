<?php

namespace App\Repository;

use App\Entity\Kangaroo;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Kangaroo|null find($id, $lockMode = null, $lockVersion = null)
 * @method Kangaroo|null findOneBy(array $criteria, array $orderBy = null)
 * @method Kangaroo[]    findAll()
 * @method Kangaroo[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class KangarooRepository extends ServiceEntityRepository
{

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Kangaroo::class);
    }

}