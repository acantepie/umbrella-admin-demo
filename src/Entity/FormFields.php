<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Umbrella\CoreBundle\Model\IdTrait;
use Umbrella\CoreBundle\Model\TimestampTrait;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * Class BaseExample
 *
 * @ORM\Entity
 * @ORM\HasLifecycleCallbacks
 * @Vich\Uploadable
 */
class FormFields
{
    use IdTrait;
    use TimestampTrait;

    // Basic

    /**
     * @var bool
     * @ORM\Column(type="boolean", options={"default": true})
     */
    public $active = true;

    /**
     * @var string
     * @ORM\Column(type="string", nullable=true)
     */
    public $color;

    /**
     * @var int
     * @ORM\Column(type="smallint", nullable=false, options={"default": 0})
     */
    public $amount = 0;

    /**
     * @var string
     * @ORM\Column(type="text", nullable=true)
     */
    public $url;

    /**
     * @var string
     * @ORM\Column(type="text", nullable=true)
     */
    public $text;

    // Date

    /**
     * @var \DateTime
     * @ORM\Column(type="date", nullable=true)
     */
    public $date;

    /**
     * @var \DateTime
     * @ORM\Column(type="datetime", nullable=true)
     */
    public $dateTime;

    // Select 2

    /**
     * @var SpaceMission[]|ArrayCollection
     * @ORM\ManyToMany(targetEntity="App\Entity\SpaceMission")
     * @ORM\JoinTable(name="form_fields_spacemission",
     *     joinColumns={@ORM\JoinColumn(name="form_fields_id", referencedColumnName="id", onDelete="CASCADE")},
     *     inverseJoinColumns={@ORM\JoinColumn(name="space_mission_id", referencedColumnName="id", unique=true, onDelete="CASCADE")}
     * )
     */
    public $missions;

    /**
     * @var SpaceMission[]|ArrayCollection
     *
     * @ORM\ManyToMany(targetEntity="App\Entity\SpaceMission")
     * @ORM\JoinTable(name="form_fields_spacemission_async",
     *     joinColumns={@ORM\JoinColumn(name="form_fields_id", referencedColumnName="id", onDelete="CASCADE")},
     *     inverseJoinColumns={@ORM\JoinColumn(name="space_mission_id", referencedColumnName="id", unique=true, onDelete="CASCADE")}
     * )
     */
    public $asyncMissions;

    // File

    /**
     * @Vich\UploadableField(mapping="public_file", fileNameProperty="imageName")
     *
     * @var File|null
     */
    public $image;

    /**
     * @ORM\Column(type="string", nullable=true)
     *
     * @var string|null
     */
    public $imageName;

    public function setImage(?File $image = null): void
    {
        $this->image = $image;
        if (null !== $image) {
            $this->updatedAt = new \DateTimeImmutable();
        }
    }

    // Ckeditor

    /**
     * @var string
     * @ORM\Column(type="text", nullable=true)
     */
    public $htmlText;

    // Collection

    /**
     * @var FormFieldsItem[]|ArrayCollection
     * @ORM\OneToMany(targetEntity="App\Entity\FormFieldsItem", mappedBy="formFields", orphanRemoval=true, cascade={"ALL"})
     * @ORM\OrderBy({"order": "ASC"})
     */
    public $items;

    /**
     * @var array
     * @ORM\Column(type="simple_array", nullable=true)
     */
    public $strings = [];

    public function __construct()
    {
        $this->missions = new ArrayCollection();
        $this->asyncMissions = new ArrayCollection();
        $this->items = new ArrayCollection();
    }

    public function addItem(FormFieldsItem $item)
    {
        $item->formFields = $this;
        $this->items->add($item);
    }

    public function removeItem(FormFieldsItem $item)
    {
        $item->formFields = null;
        $this->items->removeElement($item);
    }
}
