<?php


namespace App\Entity\FormExample;

use Doctrine\ORM\Mapping as ORM;
use Umbrella\CoreBundle\Model\OrderableTrait;

/**
 * Class CollectionItemExample
 *
 * @ORM\Entity()
 */
class CollectionItemExample
{

    use OrderableTrait;

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