<?php

namespace App\Entity;

use App\Repository\SpaceMissionClassificationRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Umbrella\CoreBundle\Model\IdTrait;
use Umbrella\CoreBundle\Model\NestedTreeEntityInterface;

#[ORM\Entity(repositoryClass: SpaceMissionClassificationRepository::class)]
#[Gedmo\Tree(type: 'nested')]
class SpaceMissionClassification implements NestedTreeEntityInterface, \Stringable
{
    use IdTrait;
    public const ROOT = 'root';

    public const COMPANY = 'company';
    public const STATUS = 'status';
    public const MISSION = 'mission';

    #[Gedmo\TreeLevel]
    #[ORM\Column(type: Types::INTEGER)]
    public ?int $level = null;

    #[Gedmo\TreeLeft]
    #[ORM\Column(name: '`left`', type: Types::INTEGER)]
    public ?int $left = null;

    #[Gedmo\TreeRight]
    #[ORM\Column(name: '`right`', type: Types::INTEGER)]
    public ?int $right = null;

    #[Gedmo\TreeRoot]
    #[ORM\ManyToOne(targetEntity: SpaceMissionClassification::class)]
    #[ORM\JoinColumn(onDelete: 'CASCADE')]
    public ?SpaceMissionClassification $root = null;

    #[Gedmo\TreeParent]
    #[ORM\ManyToOne(targetEntity: SpaceMissionClassification::class, inversedBy: 'children')]
    #[ORM\JoinColumn(onDelete: 'CASCADE')]
    public ?SpaceMissionClassification $parent = null;

    /**
     * @var SpaceMissionClassification[]|ArrayCollection
     */
    #[ORM\OneToMany(mappedBy: 'parent', targetEntity: SpaceMissionClassification::class, cascade: ['ALL'])]
    #[ORM\OrderBy(['left' => 'ASC'])]
    public Collection $children;

    #[ORM\Column(type: Types::STRING)]
    public string $name;

    #[ORM\Column(type: Types::STRING)]
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
    public function getId(): ?int
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
    public function __toString(): string
    {
        return (string) $this->name;
    }
}
