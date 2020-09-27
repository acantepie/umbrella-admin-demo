<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Umbrella\CoreBundle\Entity\BaseEntity;

/**
 * Class FishCategory
 *
 * @ORM\Entity()
 * @ORM\HasLifecycleCallbacks
 */
class FishCategory extends BaseEntity
{
}
