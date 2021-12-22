<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Umbrella\CoreBundle\Model\IdTrait;
use Umbrella\CoreBundle\Model\NestedTreeEntityInterface;

/**
 * @Gedmo\Tree(type="nested")
 * @ORM\Entity(repositoryClass="App\Repository\SpaceMissionClassificationRepository")
 */
class SpaceMissionClassification implements NestedTreeEntityInterface
{
    use IdTrait;
    public const ROOT = 'root';

    public const COMPANY = 'company';
    public const STATUS = 'status';
    public const MISSION = 'mission';

    /**
     * @Gedmo\TreeLevel
     * @ORM\Column(type="integer")
     */
    public ?int $level = null;

    /**
     * @Gedmo\TreeLeft
     * @ORM\Column(type="integer", name="`left`")
     */
    public ?int $left = null;

    /**
     * @Gedmo\TreeRight
     * @ORM\Column(type="integer", name="`right`")
     */
    public ?int $right = null;

    /**
     * @Gedmo\TreeRoot
     * @ORM\ManyToOne(targetEntity="SpaceMissionClassification")
     * @ORM\JoinColumn(referencedColumnName="id", onDelete="CASCADE")
     */
    public ?SpaceMissionClassification $root = null;

    /**
     * @Gedmo\TreeParent
     * @ORM\ManyToOne(targetEntity="SpaceMissionClassification", inversedBy="children")
     * @ORM\JoinColumn(referencedColumnName="id", onDelete="CASCADE")
     */
    public ?SpaceMissionClassification $parent = null;

    /**
     * @var SpaceMissionClassification[]|ArrayCollection
     *
     * @ORM\OneToMany(targetEntity="SpaceMissionClassification", mappedBy="parent", cascade={"ALL"})
     * @ORM\OrderBy({"left": "ASC"})
     */
    public Collection $children;

    /**
     * @ORM\Column(type="string")
     */
    public string $name;

    /**
     * @ORM\Column(type="string")
     */
    public string $type;

    /**
     * SpaceMissionClassification constructor.
     */
    public function __construct(string $name = '', string $type = self::ROOT)
    {
        $this->name = $name;
        $this->type = $type;
        $this->children = new ArrayCollection();
    }

    /**
     * {@inheritdoc}
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * {@inheritdoc}
     */
    public function getLevel(): int
    {
        return $this->level;
    }

    /**
     * {@inheritdoc}
     */
    public function getParent(): ?SpaceMissionClassification
    {
        return $this->parent;
    }

    /**
     * @param ?SpaceMissionClassification $parent
     */
    public function setParent(?NestedTreeEntityInterface $parent)
    {
        $this->parent = $parent;
    }

    /**
     * {@inheritdoc}
     */
    public function getChildren(): Collection
    {
        return $this->children;
    }

    /**
     * {@inheritdoc}
     */
    public function addChild(NestedTreeEntityInterface $child)
    {
        $child->setParent($this);
        $this->children->add($child);
    }

    /**
     * {@inheritdoc}
     */
    public function removeChild(NestedTreeEntityInterface $child)
    {
        $child->setParent(null);
        $this->children->removeElement($child);
    }

    /**
     * {@inheritdoc}
     */
    public function __toString()
    {
        return (string) $this->name;
    }
}
