<?php
/**
 * Created by PhpStorm.
 * User: acantepie
 * Date: 19/04/20
 * Time: 21:00
 */

namespace App\Repository;

use App\Entity\NodeEntity;
use Gedmo\Tree\Entity\Repository\NestedTreeRepository;

/**
 * Class NodeEntityRepository
 */
class NodeEntityRepository extends NestedTreeRepository
{

    /**
     * @return NodeEntity
     */
    public function findRoot()
    {
        return $this->getRootNodesQueryBuilder()
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

}