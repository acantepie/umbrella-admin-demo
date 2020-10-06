<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Umbrella\CoreBundle\Entity\BaseTaskConfig;

/**
 * Class Task
 * @ORM\Entity()
 * @ORM\HasLifecycleCallbacks()
 */
class TaskConfig extends BaseTaskConfig
{
    /**
     * @var string
     * @ORM\Column(type="string", nullable=true)
     */
    public $speciesId;
}
