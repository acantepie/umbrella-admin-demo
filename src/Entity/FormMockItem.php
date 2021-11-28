<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Umbrella\CoreBundle\Model\IdTrait;
use Umbrella\CoreBundle\Model\OrderTrait;

/**
 * @ORM\Entity
 */
class FormMockItem
{
    use IdTrait;
    use OrderTrait;

    /**
     * @ORM\ManyToOne(targetEntity="FormMock", inversedBy="collectionItems")
     * @ORM\JoinColumn(name="parent_id", referencedColumnName="id", onDelete="CASCADE")
     */
    public ?FormMock $collectionParent = null;

    /**
     * @ORM\ManyToOne(targetEntity="FormMock", inversedBy="collectionOrderableItems")
     * @ORM\JoinColumn(name="parent_orderable_id", referencedColumnName="id", onDelete="CASCADE")
     */
    public ?FormMock $collectionOrderableParent = null;

    /**
     * @ORM\Column(type="string", nullable=false)
     */
    public ?string $label = null;

    /**
     * @var \DateTime|null
     * @ORM\Column(type="date", nullable=true)
     */
    public ?\DateTimeInterface $date = null;
}
