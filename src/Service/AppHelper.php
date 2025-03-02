<?php

namespace App\Service;

use Doctrine\ORM\EntityManagerInterface;

class AppHelper
{
    public function __construct(private readonly EntityManagerInterface $em)
    {
    }

    public function loadOne(string $entityClass): ?object
    {
        return $this->em
            ->createQueryBuilder()
            ->select('e')
            ->from($entityClass, 'e')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }
}
