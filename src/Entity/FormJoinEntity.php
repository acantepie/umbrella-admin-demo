<?php
/**
 * Created by PhpStorm.
 * User: acantepie
 * Date: 18/04/20
 * Time: 19:06
 */

namespace App\Entity;

use Umbrella\CoreBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;
use Umbrella\CoreBundle\Model\OrderableTrait;

/**
 * Class ContactCategory
 *
 * @ORM\Entity()
 * @ORM\HasLifecycleCallbacks
 */
class FormJoinEntity extends BaseEntity implements \JsonSerializable
{
    use OrderableTrait;

    /**
     * @var FormEntity
     *
     * @ORM\ManyToOne(targetEntity="FormEntity", inversedBy="collectionItems")
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


    /**
     * @inheritdoc
     */
    public function jsonSerialize()
    {
        return array(
            'id' => $this->id,
            'text' => $this->label,
            'description' => $this->description
        );
    }

    /**
     * @return string
     */
    public function __toString()
    {
        return (string) $this->label;
    }
}