<?php

namespace App\Entity\FormExample;

use Doctrine\ORM\Mapping as ORM;
use Umbrella\CoreBundle\Model\IdTrait;
use Umbrella\CoreBundle\Model\OrderTrait;

/**
 * Class CollectionItemExample
 *
 * @ORM\Entity
 * @ORM\Table("form_collection_item")
 */
class CollectionItemExample
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
     * @var CollectionExample
     *
     * @ORM\ManyToOne(targetEntity="CollectionExample", inversedBy="items")
     * @ORM\JoinColumn(name="parent_id", referencedColumnName="id", onDelete="CASCADE")
     */
    public $parent;

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
