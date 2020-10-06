<?php

namespace App\Entity\FormExample;

use Doctrine\ORM\Mapping as ORM;
use Umbrella\CoreBundle\Model\IdTrait;

/**
 * Class DateExample
 *
 * @ORM\Entity()
 */
class DateExample
{

    use IdTrait;

    /**
     * @var \DateTime
     * @ORM\Column(type="date", nullable=true)
     */
    public $date;

    /**
     * @var \DateTime
     * @ORM\Column(type="date", nullable=true)
     */
    public $future;

    /**
     * @var \DateTime
     * @ORM\Column(type="date", nullable=true)
     */
    public $past;

    /**
     * @var \DateTime
     * @ORM\Column(type="datetime", nullable=true)
     */
    public $dateTime;
}
