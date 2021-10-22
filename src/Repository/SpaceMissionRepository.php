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
    public function search(string $q): array
    {
        $qb = $this->createQueryBuilder('e');

        $q = trim($q);
        if (!empty($q)) {
            $qb->andWhere('LOWER(e.search) LIKE :search');
            $qb->setParameter('search', '%' . strtolower($q) . '%');
        }

        return $qb->getQuery()->getResult();
    }

    public function searchAndPaginate(string $q, int $page = 1, int $pageLength = 5): array
    {
        $qb = $this->createQueryBuilder('e');

        $q = trim($q);
        if (!empty($q)) {
            $qb->andWhere('LOWER(e.search) LIKE :search');
            $qb->setParameter('search', '%' . strtolower($q) . '%');
        }

        $countQb = clone $qb;
        $countQb->select('COUNT(e.id)');

        $page = max(1, $page);
        $qb->setMaxResults($pageLength);
        $qb->setFirstResult(($page - 1) * $pageLength);

        return [
            'results' => $qb->getQuery()->getResult(),
            'more' => $countQb->getQuery()->getSingleScalarResult() > $page * $pageLength
        ];
    }
}
