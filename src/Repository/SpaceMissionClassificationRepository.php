<?php

namespace App\Repository;

use App\Entity\SpaceMissionClassification;
use Doctrine\ORM\EntityManagerInterface;
use Gedmo\Tree\Entity\Repository\NestedTreeRepository;

/**
 * Class SpaceMissionClassificationRepository
 */
class SpaceMissionClassificationRepository extends NestedTreeRepository
{
    public function __construct(EntityManagerInterface $manager)
    {
        parent::__construct($manager, $manager->getClassMetadata(SpaceMissionClassification::class));
    }
}
