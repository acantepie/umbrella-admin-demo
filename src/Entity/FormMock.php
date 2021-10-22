<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Umbrella\CoreBundle\Model\IdTrait;

/**
 * @ORM\Entity
 */
class FormMock
{
    use IdTrait;

    // Basic

    /**
     * @ORM\Column(type="boolean", options={"default": true})
     */
    public bool $active = true;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    public ?string $color = null;

    /**
     * @ORM\Column(type="smallint", nullable=false, options={"default": 0})
     */
    public int $amount = 0;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    public ?string $url = null;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    public ?string $text = null;

    // Date

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

    // Collection

    /**
     * @var FormMockItem[]|ArrayCollection
     * @ORM\OneToMany(targetEntity="FormMockItem", mappedBy="formFields", orphanRemoval=true, cascade={"ALL"})
     * @ORM\OrderBy({"order": "ASC"})
     */
    public $items;

    // Ckeditor

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    public ?string $text1 = null;

    // Select 2

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    public ?string $choiceMission = null;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    public ?string $choiceMissionReadonly = null;

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
        $this->items = new ArrayCollection();
        $this->asyncChoiceMissions = new ArrayCollection();
    }

    public function addItem(FormMockItem $item): void
    {
        $item->formFields = $this;
        $this->items->add($item);
    }

    public function removeItem(FormMockItem $item): void
    {
        $item->formFields = null;
        $this->items->removeElement($item);
    }
}
