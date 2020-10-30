<?php


namespace App\Repository;


use App\Entity\CustomMenuConfig;
use Doctrine\ORM\EntityRepository;

/**
 * Class CustomMenuConfigRepository
 */
class CustomMenuConfigRepository extends EntityRepository
{

    /**
     * @return CustomMenuConfig
     */
    public function getConfig()
    {
        $config = $this->createQueryBuilder('e')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();

        if (null === $config) {
            $config = new CustomMenuConfig();
        }

        return $config;
    }

}