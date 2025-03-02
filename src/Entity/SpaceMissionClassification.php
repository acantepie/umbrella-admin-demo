<?php

namespace App\Entity;

use App\Repository\SpaceMissionClassificationRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Umbrella\CoreBundle\Model\IdTrait;

#[ORM\Entity(repositoryClass: SpaceMissionClassificationRepository::class)]
#[Gedmo\Tree(type: 'nested')]
class SpaceMissionClassification
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
     * @var ArrayCollection<int, SpaceMissionClassification>
     */
    #[ORM\OneToMany(targetEntity: SpaceMissionClassification::class, mappedBy: 'parent', cascade: ['ALL'])]
    #[ORM\OrderBy(['left' => 'ASC'])]
    public Collection $children;

    #[ORM\Column(type: Types::STRING)]
    public string $name;

    #[ORM\Column(type: Types::STRING)]
    public string $type;

    public function __construct(string $name = '', string $type = self::ROOT)
    {
        $this->name = $name;
        $this->type = $type;
        $this->children = new ArrayCollection();
    }

    public function addChild(SpaceMissionClassification $child): void
    {
        $child->parent = $this;
        $this->children->add($child);
    }

    public function removeChild(SpaceMissionClassification $child): void
    {
        $child->parent = null;
        $this->children->removeElement($child);
    }

    public function __toString(): string
    {
        return (string) $this->name;
    }
}
