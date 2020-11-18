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
     * @param bool $create
     *
     * @return FishCategory|null
     */
    public function findRoot($create = false)
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
