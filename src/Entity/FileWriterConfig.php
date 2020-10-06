<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Umbrella\AdminBundle\Entity\UmbrellaFileWriterConfig;

/**
 * Class FileWriterConfig
 *
 * @ORM\Entity()
 * @ORM\HasLifecycleCallbacks()
 */
class FileWriterConfig extends UmbrellaFileWriterConfig
{
    /**
     * @var string
     * @ORM\Column(type="string", nullable=true)
     */
    public $habitat;

    /**
     * @var array
     * @ORM\Column(type="json", nullable=true)
     */
    public $fishIds = [];

    /**
     * @var array
     * @ORM\Column(type="json", nullable=true)
     */
    public $datatableQuery = [];
}
