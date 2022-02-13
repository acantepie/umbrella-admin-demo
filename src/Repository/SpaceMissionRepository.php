<?php

namespace App\Repository;

use App\Entity\SpaceMission;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;

/**
 * @method SpaceMission|null find($id, $lockMode = null, $lockVersion = null)
 * @method SpaceMission|null findOneBy(array $criteria, array $orderBy = null)
 * @method SpaceMission[]    findAll()
 * @method SpaceMission[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SpaceMissionRepository extends EntityRepository
{
    public function __construct(EntityManagerInterface $manager)
    {
        parent::__construct($manager, $manager->getClassMetadata(SpaceMission::class));
    }

    /**
     * @return SpaceMission[]
     */
    public function search(string $q, ?int $page = null, int $pageLength = 10): array
    {
        $qb = $this->createQueryBuilder('e');

        $q = trim($q);
        if (!empty($q)) {
            $qb->andWhere('LOWER(e.search) LIKE :search');
            $qb->setParameter('search', '%' . strtolower($q) . '%');
        }

        if (null !== $page) {
            $page = max(1, $page);
            $qb->setMaxResults($pageLength);
            $qb->setFirstResult(($page - 1) * $pageLength);
        }

        return $qb->getQuery()->getResult();
    }
}
