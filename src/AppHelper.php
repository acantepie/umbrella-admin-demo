<?php

namespace App;

use Doctrine\ORM\EntityManagerInterface;

class AppHelper
{
    private EntityManagerInterface $em;

    /**
     * AppHelper constructor.
     */
    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
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
