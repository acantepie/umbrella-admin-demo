<?php
/**
 * Created by PhpStorm.
 * User: acantepie
 * Date: 19/04/20
 * Time: 21:00
 */

namespace App\Repository;

use App\Entity\FishCategory;
use Gedmo\Tree\Entity\Repository\NestedTreeRepository;

/**
 * Class FishCategoryRepository
 */
class FishCategoryRepository extends NestedTreeRepository
{
    /**
     * @return FishCategory
     */
    public function findRoot()
    {
        return $this->getRootNodesQueryBuilder()
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }
}
