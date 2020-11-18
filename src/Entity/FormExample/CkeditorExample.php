<?php

namespace App\Entity\FormExample;

use Doctrine\ORM\Mapping as ORM;
use Umbrella\CoreBundle\Model\IdTrait;

/**
 * Class CkeditorExample
 *
 * @ORM\Entity
 */
class CkeditorExample
{
    use IdTrait;

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
