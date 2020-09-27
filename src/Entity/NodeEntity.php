<?php
/**
 * Created by PhpStorm.
 * User: acantepie
 * Date: 18/04/20
 * Time: 23:07
 */

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Umbrella\CoreBundle\Entity\BaseEntity;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @Gedmo\Tree(type="nested")
 * @ORM\Entity(repositoryClass="App\Repository\NodeEntityRepository")
 */
class NodeEntity extends BaseEntity
{
    /**
     * @Gedmo\TreeLeft
     * @ORM\Column(type="integer")
     */
    public $lft;

    /**
     * @Gedmo\TreeLevel
     * @ORM\Column(type="integer")
     */
    public $lvl;

    /**
     * @Gedmo\TreeRight
     * @ORM\Column(type="integer")
     */
    public $rgt;

    /**
     * @var NodeEntity
     *
     * @Gedmo\TreeRoot
     * @ORM\ManyToOne(targetEntity="NodeEntity")
     * @ORM\JoinColumn(referencedColumnName="id", onDelete="CASCADE")
     */
    public $root;

    /**
     * @var NodeEntity
     *
     * @Gedmo\TreeParent
     * @ORM\ManyToOne(targetEntity="NodeEntity", inversedBy="children")
     * @ORM\JoinColumn(referencedColumnName="id", onDelete="CASCADE")
     */
    public $parent;

    /**
     * @var NodeEntity[]|ArrayCollection
     *
     * @ORM\OneToMany(targetEntity="NodeEntity", mappedBy="parent", cascade={"ALL"})
     * @ORM\OrderBy({"lft" = "ASC"})
     */
    public $children;

    /**
     * @var string
     * @ORM\Column(type="string", nullable=true)
     */
    public $label;

    /**
     * @var string
     * @ORM\Column(type="string", nullable=true)
     */
    public $type;

    /**
     * NodeEntity constructor.
     * @param $label
     * @param $type
     */
    public function __construct($label = null, $type = null)
    {
        $this->label = $label;
        $this->type = $type;
        $this->children = new ArrayCollection();
    }

    /**
     * @param  NodeEntity $child
     * @return $this
     */
    public function addChild(NodeEntity $child)
    {
        $child->parent = $this;
        $this->children->add($child);
        return $child;
    }

    /**
     * @param  NodeEntity $child
     * @return $this
     */
    public function removeChild(NodeEntity $child)
    {
        $child->parent = null;
        $this->children->removeElement($child);
        return $this;
    }

    /**
     * @return NodeEntity
     */
    public function parent()
    {
        return $this->parent;
    }
}
