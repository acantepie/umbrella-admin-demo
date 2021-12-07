<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Umbrella\CoreBundle\Model\IdTrait;

/**
 * @ORM\Entity
 */
class FormMock
{
    use IdTrait;

    // Simple form elements

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    public ?string $text = null;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    public ?string $textarea = null;

    /**
     * @ORM\Column(type="boolean", nullable=false)
     */
    public bool $checkMe = false;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    public ?string $color = null;

    /**
     * @ORM\Column(type="smallint", nullable=false, options={"default": 0})
     */
    public int $amount = 0;

    /**
     * @ORM\Column(name="`select`", type="string", nullable=true)
     */
    public ?string $select = null;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    public ?string $selectExpanded = null;

    /**
     * @ORM\Column(type="simple_array", nullable=true)
     */
    public ?array $selectMultiple = null;

    /**
     * @ORM\Column(type="simple_array", nullable=true)
     */
    public ?array $selectMultipleExpanded = null;

    // Addon form extension

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    public ?string $inputGroupText = null;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    public ?string $inputGroupButton = null;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    public ?string $inputIcon = null;

    // Advanced form elements

    /**
     * @var \DateTime|null
     * @ORM\Column(type="date", nullable=true)
     */
    public ?\DateTimeInterface $date = null;

    /**
     * @var \DateTime|null
     * @ORM\Column(type="datetime", nullable=true)
     */
    public ?\DateTimeInterface $dateTime = null;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    public ?string $richText = null;

    // Collection

    /**
     * @var FormMockItem[]|ArrayCollection
     * @ORM\OneToMany(targetEntity="FormMockItem", mappedBy="collectionParent", orphanRemoval=true, cascade={"ALL"})
     */
    public Collection $collectionItems;

    /**
     * @var FormMockItem[]|ArrayCollection
     * @ORM\OneToMany(targetEntity="FormMockItem", mappedBy="collectionOrderableParent", orphanRemoval=true, cascade={"ALL"})
     * @ORM\OrderBy({"order": "ASC"})
     */
    public Collection $collectionOrderableItems;

    // Select 2

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    public ?string $choiceMission = null;

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    public ?array $choiceMissions = [];

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    public ?string $choiceMissionTemplated = null;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    public ?string $choiceMissionGrouped = null;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\SpaceMission")
     * @ORM\JoinColumn(onDelete="SET NULL")
     */
    public ?SpaceMission $choiceMissionEntity = null;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\SpaceMissionClassification")
     * @ORM\JoinColumn(onDelete="SET NULL")
     */
    public ?SpaceMissionClassification $choiceMissionClassificationEntity = null;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\SpaceMission")
     * @ORM\JoinColumn(onDelete="SET NULL")
     */
    public ?SpaceMission $asyncChoiceMission = null;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\SpaceMission")
     * @ORM\JoinColumn(onDelete="SET NULL")
     */
    public ?SpaceMission $asyncChoiceMissionTemplated = null;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\SpaceMission")
     * @ORM\JoinColumn(onDelete="SET NULL")
     */
    public ?SpaceMission $asyncChoiceMissionPaginated = null;

    /**
     * @var ArrayCollection|SpaceMission[]
     * @ORM\ManyToMany(targetEntity="App\Entity\SpaceMission")
     * @ORM\JoinTable(
     *     joinColumns={@ORM\JoinColumn(onDelete="CASCADE")},
     *     inverseJoinColumns={@ORM\JoinColumn(onDelete="CASCADE")}
     * )
     */
    public $asyncChoiceMissions;

    public function __construct()
    {
        $this->collectionItems = new ArrayCollection();
        $this->collectionOrderableItems = new ArrayCollection();
        $this->asyncChoiceMissions = new ArrayCollection();
    }

    public function addCollectionItem(FormMockItem $item): void
    {
        $item->collectionParent = $this;
        $this->collectionItems->add($item);
    }

    public function removeCollectionItem(FormMockItem $item): void
    {
        $item->collectionParent = null;
        $this->collectionItems->removeElement($item);
    }

    public function addCollectionOrderableItem(FormMockItem $item): void
    {
        $item->collectionOrderableParent = $this;
        $this->collectionOrderableItems->add($item);
    }

    public function removeCollectionOrderableItem(FormMockItem $item): void
    {
        $item->collectionOrderableParent = null;
        $this->collectionOrderableItems->removeElement($item);
    }
}
