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
     * @ORM\ManyToOne(targetEntity="FormMock", inversedBy="items")
     * @ORM\JoinColumn(name="form_fields_id", referencedColumnName="id", onDelete="CASCADE")
     */
    public ?FormMock $formFields = null;

    /**
     * @ORM\Column(type="string", nullable=false)
     */
    public ?string $label = null;

    /**
     * @ORM\Column(type="text", nullable=false)
     */
    public ?string $description = null;
}
