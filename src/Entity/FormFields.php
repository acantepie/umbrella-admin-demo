<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Umbrella\CoreBundle\Entity\UmbrellaFile;
use Umbrella\CoreBundle\Model\IdTrait;

/**
 * Class BaseExample
 *
 * @ORM\Entity
 */
class FormFields
{
    use IdTrait;

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
     * @ORM\Column(type="string", nullable=true)
     */
    public $fish;

    /**
     * @var Fish[]|ArrayCollection
     * @ORM\ManyToMany(targetEntity="App\Entity\Fish")
     * @ORM\JoinTable(name="form_fields_fish",
     *     joinColumns={@ORM\JoinColumn(name="form_fields_id", referencedColumnName="id", onDelete="CASCADE")},
     *     inverseJoinColumns={@ORM\JoinColumn(name="fish_id", referencedColumnName="id", unique=true, onDelete="CASCADE")}
     * )
     */
    public $fishEntities;

    /**
     * @var Fish[]|ArrayCollection
     *
     * @ORM\ManyToMany(targetEntity="App\Entity\Fish")
     * @ORM\JoinTable(name="form_fields_fish_async",
     *     joinColumns={@ORM\JoinColumn(name="form_fields_id", referencedColumnName="id", onDelete="CASCADE")},
     *     inverseJoinColumns={@ORM\JoinColumn(name="fish_id", referencedColumnName="id", unique=true, onDelete="CASCADE")}
     * )
     */
    public $asyncFishEntities;

    /**
     * @ORM\Column(type="simple_array", nullable=true)
     */
    public $tags = [];

    // File

    /**
     * @var UmbrellaFile
     *
     * @ORM\ManyToOne(targetEntity="Umbrella\CoreBundle\Entity\UmbrellaFile", cascade={"ALL"})
     * @ORM\JoinColumn(name="file_id", referencedColumnName="id", onDelete="SET NULL")
     */
    public $file;

    /**
     * @var UmbrellaFile
     * @ORM\ManyToOne(targetEntity="Umbrella\CoreBundle\Entity\UmbrellaFile", cascade={"ALL"})
     * @ORM\JoinColumn(name="pdf_id", referencedColumnName="id", onDelete="SET NULL")
     */
    public $pdf;

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
        $this->fishEntities = new ArrayCollection();
        $this->asyncFishEntities = new ArrayCollection();
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
