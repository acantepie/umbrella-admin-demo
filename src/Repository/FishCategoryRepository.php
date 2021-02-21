<?php

namespace App\Repository;

use App\Entity\FishCategory;
use Doctrine\ORM\EntityManagerInterface;
use Gedmo\Tree\Entity\Repository\NestedTreeRepository;

/**
 * Class FishCategoryRepository
 */
class FishCategoryRepository extends NestedTreeRepository
{
    /**
     * FishCategoryRepository constructor.
     */
    public function __construct(EntityManagerInterface $manager)
    {
        parent::__construct($manager, $manager->getClassMetadata(FishCategory::class));
    }

    /**
     * @return FishCategory|null
     */
    public function findRoot(bool $create = false)
    {
        $root = $this->getRootNodesQueryBuilder()
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();

        if (null === $root && $create) {
            $root = new FishCategory();
        }

        return $root;
    }
}
