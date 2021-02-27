<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Umbrella\CoreBundle\Model\IdTrait;
use Umbrella\CoreBundle\Model\OrderTrait;

/**
 * Class FormFieldsItem
 *
 * @ORM\Entity
 */
class FormFieldsItem
{
    use IdTrait;
    use OrderTrait;

    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    public $id;

    /**
     * @var FormFields
     *
     * @ORM\ManyToOne(targetEntity="FormFields", inversedBy="items")
     * @ORM\JoinColumn(name="form_fields_id", referencedColumnName="id", onDelete="CASCADE")
     */
    public $formFields;

    /**
     * @var string
     *
     * @ORM\Column(type="string", nullable=false)
     */
    public $label;

    /**
     * @var string
     *
     * @ORM\Column(type="text", nullable=false)
     */
    public $description;
}
