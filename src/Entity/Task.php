<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Umbrella\CoreBundle\Entity\BaseTask;

/**
 * Class Task
 *
 * @ORM\Entity()
 * @ORM\HasLifecycleCallbacks
 */
class Task extends BaseTask
{

    /**
     * @var string
     * @ORM\Column(type="string", nullable=true)
     */
    public $speciesId;
}
