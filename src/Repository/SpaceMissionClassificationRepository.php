<?php

namespace App\Repository;

use App\Entity\SpaceMission;
use Doctrine\ORM\EntityManagerInterface;
use Gedmo\Tree\Entity\Repository\NestedTreeRepository;

/**
 * Class SpaceMissionClassificationRepository
 */
class SpaceMissionClassificationRepository extends NestedTreeRepository
{
    /**
     * SpaceMissionClassificationRepository constructor.
     */
    public function __construct(EntityManagerInterface $manager)
    {
        parent::__construct($manager, $manager->getClassMetadata(SpaceMission::class));
    }

    public function findRoot(bool $create = false) : SpaceMission
    {
        $root = $this->getRootNodesQueryBuilder()
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();

        if (null === $root && $create) {
            $root = new SpaceMission();
        }

        return $root;
    }
}
