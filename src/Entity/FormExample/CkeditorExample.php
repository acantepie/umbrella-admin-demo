<?php

namespace App\Entity\FormExample;

use Doctrine\ORM\Mapping as ORM;
use Umbrella\CoreBundle\Entity\BaseEntity;

/**
 * Class CkeditorExample
 *
 * @ORM\Entity()
 * @ORM\HasLifecycleCallbacks()
 */
class CkeditorExample extends BaseEntity
{
    /**
     * @var string
     * @ORM\Column(type="text", nullable=true)
     */
    public $text1;

    /**
     * @var string
     * @ORM\Column(type="text", nullable=true)
     */
    public $text2;
}
