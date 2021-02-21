<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Umbrella\CoreBundle\Component\Search\Annotation\Searchable;
use Umbrella\CoreBundle\Component\Search\Annotation\SearchableField;
use Umbrella\CoreBundle\Model\IdTrait;
use Umbrella\CoreBundle\Model\NestedTreeEntityInterface;
use Umbrella\CoreBundle\Model\NestedTreeEntityTrait;
use Umbrella\CoreBundle\Model\SearchTrait;
use Umbrella\CoreBundle\Model\TimestampTrait;

/**
 * Class FishCategory
 *
 * @Gedmo\Tree(type="nested")
 * @ORM\Entity(repositoryClass="App\Repository\FishCategoryRepository")
 *
 * @ORM\HasLifecycleCallbacks
 * @Searchable
 */
class FishCategory implements NestedTreeEntityInterface
{
    use IdTrait;
    use SearchTrait;
    use TimestampTrait;
    use NestedTreeEntityTrait;

    /**
     * @Gedmo\TreeLevel
     * @ORM\Column(type="integer")
     */
    public $level;

    /**
     * @Gedmo\TreeLeft
     * @ORM\Column(type="integer", name="`left`")
     */
    public $left;

    /**
     * @Gedmo\TreeRight
     * @ORM\Column(type="integer", name="`right`")
     */
    public $right;

    /**
     * @var FishCategory
     *
     * @Gedmo\TreeRoot
     * @ORM\ManyToOne(targetEntity="FishCategory")
     * @ORM\JoinColumn(referencedColumnName="id", onDelete="CASCADE")
     */
    public $root;

    /**
     * @var FishCategory
     *
     * @Gedmo\TreeParent
     * @ORM\ManyToOne(targetEntity="FishCategory", inversedBy="children")
     * @ORM\JoinColumn(referencedColumnName="id", onDelete="CASCADE")
     */
    public $parent;

    /**
     * @var FishCategory[]|ArrayCollection
     *
     * @ORM\OneToMany(targetEntity="FishCategory", mappedBy="parent", cascade={"ALL"})
     * @ORM\OrderBy({"left": "ASC"})
     */
    public $children;

    /**
     * @var string
     * @ORM\Column(type="string", nullable=false)
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
     * FishCategory constructor.
     */
    public function __construct()
    {
        $this->children = new ArrayCollection();
    }

    /**
     * {@inheritdoc}
     */
    public function __toString()
    {
        return (string) $this->name;
    }
}
