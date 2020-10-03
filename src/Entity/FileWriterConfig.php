<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Umbrella\AdminBundle\Entity\UmbrellaFileWriterConfig;

/**
 * Class FileWriterConfig
 *
 * @ORM\Entity()
 */
class FileWriterConfig extends UmbrellaFileWriterConfig
{
    /**
     * @var string
     * @ORM\Column(type="string", nullable=true)
     */
    public $habitat;
}
