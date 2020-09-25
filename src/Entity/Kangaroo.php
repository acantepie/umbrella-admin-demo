<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Umbrella\CoreBundle\Entity\BaseEntity;
use App\Repository\KangarooRepository;

/**
 * Class App\Entity\Kangaroo.
 *
 * @ORM\Entity(KangarooRepository::class)
 * @ORM\HasLifecycleCallbacks
 */
class Kangaroo extends BaseEntity
{
}