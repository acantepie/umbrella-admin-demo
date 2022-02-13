<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Umbrella\CoreBundle\Model\IdTrait;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

#[ORM\Entity]
#[Vich\Uploadable]
class FormMock
{
    use IdTrait;

    // Simple form elements

    #[ORM\Column(type: Types::STRING, nullable: true)]
    public ?string $text = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    public ?string $textarea = null;

    #[ORM\Column(type: Types::BOOLEAN, nullable: false)]
    public bool $checkMe = false;

    #[ORM\Column(type: Types::STRING, nullable: true)]
    public ?string $color = null;

    #[ORM\Column(type: Types::SMALLINT, options: ['default' => 0])]
    public int $amount = 0;

    #[ORM\Column(name: '`select`', type: Types::STRING, nullable: true)]
    public ?string $select = null;

    #[ORM\Column(type: Types::STRING, nullable: true)]
    public ?string $selectExpanded = null;

    #[ORM\Column(type: Types::SIMPLE_ARRAY, nullable: true)]
    public ?array $selectMultiple = null;

    #[ORM\Column(type: Types::SIMPLE_ARRAY, nullable: true)]
    public ?array $selectMultipleExpanded = null;

    // Addon form extension

    #[ORM\Column(type: Types::STRING, nullable: true)]
    public ?string $inputGroupText = null;

    #[ORM\Column(type: Types::STRING, nullable: true)]
    public ?string $inputGroupButton = null;

    #[ORM\Column(type: Types::STRING, nullable: true)]
    public ?string $inputIcon = null;

    // Advanced form elements

    /**
     * @var \DateTime|null
     */
    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    public ?\DateTimeInterface $date = null;

    /**
     * @var \DateTime|null
     */
    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    public ?\DateTimeInterface $dateTime = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    public ?string $richText = null;

    // Collection

    /**
     * @var FormMockItem[]|ArrayCollection
     */
    #[ORM\OneToMany(mappedBy: 'collectionParent', targetEntity: FormMockItem::class, cascade: ['ALL'], orphanRemoval: true)]
    public Collection $collectionItems;

    /**
     * @var FormMockItem[]|ArrayCollection
     */
    #[ORM\OneToMany(mappedBy: 'collectionOrderableParent', targetEntity: FormMockItem::class, cascade: ['ALL'], orphanRemoval: true)]
    #[ORM\OrderBy(['position' => 'ASC'])]
    public Collection $collectionOrderableItems;

    // Tom Select

    #[ORM\Column(type: Types::STRING, nullable: true)]
    public ?string $choiceMission = null;

    #[ORM\Column(type: Types::ARRAY, nullable: true)]
    public ?array $choiceMissions = [];

    #[ORM\Column(type: Types::STRING, nullable: true)]
    public ?string $choiceMissionTemplated = null;

    #[ORM\Column(type: Types::STRING, nullable: true)]
    public ?string $choiceMissionGrouped = null;

    #[ORM\ManyToOne(targetEntity: SpaceMission::class)]
    #[ORM\JoinColumn(onDelete: 'SET NULL')]
    public ?SpaceMission $choiceMissionEntity = null;

    #[ORM\ManyToOne(targetEntity: SpaceMissionClassification::class)]
    #[ORM\JoinColumn(onDelete: 'SET NULL')]
    public ?SpaceMissionClassification $choiceMissionClassificationEntity = null;

    #[ORM\ManyToOne(targetEntity: SpaceMission::class)]
    #[ORM\JoinColumn(onDelete: 'SET NULL')]
    public ?SpaceMission $asyncChoiceMission = null;

    #[ORM\ManyToOne(targetEntity: SpaceMission::class)]
    #[ORM\JoinColumn(onDelete: 'SET NULL')]
    public ?SpaceMission $asyncChoiceMissionTemplated = null;

    #[ORM\ManyToOne(targetEntity: SpaceMission::class)]
    #[ORM\JoinColumn(onDelete: 'SET NULL')]
    public ?SpaceMission $asyncChoiceMissionPaginated = null;

    /**
     * @var ArrayCollection|SpaceMission[]
     */
    #[ORM\ManyToMany(targetEntity: SpaceMission::class)]
    #[ORM\JoinColumn(onDelete: 'CASCADE')]
    #[ORM\InverseJoinColumn(onDelete: 'CASCADE')]
    public Collection $asyncChoiceMissions;

    #[ORM\Column(type: Types::ARRAY)]
    public array $tags = [];

    // File

    #[ORM\Column(type: Types::STRING, nullable: true)]
    public ?string $filename = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    public ?\DateTimeInterface $fileUpdatedAt = null;

    #[Vich\UploadableField(mapping: 'uploads', fileNameProperty: 'vichFilename')]
    public ?File $vichFile = null;

    #[ORM\Column(type: Types::STRING, nullable: true)]
    public ?string $vichFilename = null;

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

    public function setVichFile(?File $vichFile): void
    {
        $this->vichFile = $vichFile;

        if (null !== $vichFile) {
            $this->fileUpdatedAt = new \DateTimeImmutable();
        }
    }
}
