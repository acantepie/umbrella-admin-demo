<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Umbrella\CoreBundle\Entity\BaseEntity;
use Umbrella\CoreBundle\Annotation\SearchableField;

/**
 * Class Fish
 *
 * @ORM\Entity()
 * @ORM\HasLifecycleCallbacks
 */
class Fish extends BaseEntity
{
    const HABITAT_SEA = 'sea';
    const HABITAT_LAKE = 'lake';
    const HABITAT_RIVER = 'river';

    /**
     * @var string
     * @ORM\Column(type="string", nullable=false)
     *
     * @SearchableField()
     */
    public $name;

    /**
     * @var string
     * @ORM\Column(type="text", nullable=true)
     * @SearchableField()
     */
    public $description;

    /**
     * @var string
     * @ORM\Column(type="string", nullable=true)
     */
    public $color;

    /**
     * @var array
     * @ORM\Column(type="json", nullable=true)
     */
    public $habitats = [];

    /**
     * @var bool
     * @ORM\Column(type="boolean", nullable=false)
     */
    public $edible = false;

    /**
     * @inheritDoc
     */
    public function __toString()
    {
        return (string) $this->name;
    }
}
