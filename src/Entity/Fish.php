<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Umbrella\CoreBundle\Annotation\Searchable;
use Umbrella\CoreBundle\Annotation\SearchableField;
use Umbrella\CoreBundle\Model\IdTrait;
use Umbrella\CoreBundle\Model\SearchTrait;
use Umbrella\CoreBundle\Model\TimestampTrait;

/**
 * Class Fish
 *
 * @ORM\Entity
 * @ORM\HasLifecycleCallbacks
 * @Searchable
 */
class Fish
{
    const HABITAT_SEA = 'sea';
    const HABITAT_LAKE = 'lake';
    const HABITAT_RIVER = 'river';

    use IdTrait;
    use SearchTrait;
    use TimestampTrait;

    /**
     * @var string
     * @ORM\Column(type="string", nullable=false)
     *
     * @SearchableField
     */
    public $name;

    /**
     * @var string
     * @ORM\Column(type="text", nullable=true)
     * @SearchableField
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
     * {@inheritdoc}
     */
    public function __toString()
    {
        return (string) $this->name;
    }
}
