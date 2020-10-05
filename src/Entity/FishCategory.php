<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Umbrella\CoreBundle\Entity\BaseEntity;
use Doctrine\Common\Collections\ArrayCollection;
use Umbrella\CoreBundle\Model\TreeNodeInterface;
use Umbrella\CoreBundle\Model\TreeNodeEntityTrait;
use Umbrella\CoreBundle\Annotation\SearchableField;

/**
 * Class FishCategory
 *
 * @Gedmo\Tree(type="nested")
 * @ORM\Entity(repositoryClass="App\Repository\FishCategoryRepository")
 *
 * @ORM\HasLifecycleCallbacks
 */
class FishCategory extends BaseEntity implements TreeNodeInterface
{
    use TreeNodeEntityTrait;

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
     * @ORM\OrderBy({"lft" = "ASC"})
     */
    public $children;

    /**
     * @var string
     * @ORM\Column(type="string", nullable=false)
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
     * FishCategory constructor.
     */
    public function __construct()
    {
        $this->children = new ArrayCollection();
    }

    /**
     * @inheritDoc
     */
    public function __toString()
    {
        return (string) $this->name;
    }
}
