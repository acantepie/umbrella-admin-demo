<?php
/**
 * Created by PhpStorm.
 * User: acantepie
 * Date: 28/03/20
 * Time: 18:43
 */

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Umbrella\CoreBundle\Entity\BaseEntity;
use Umbrella\CoreBundle\Entity\UmbrellaFile;

/**
 * Class FormEntity
 *
 * @ORM\Entity()
 * @ORM\HasLifecycleCallbacks
 */
class FormEntity extends BaseEntity
{
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
     * @ORM\Column(type="smallint", nullable=false, options={"default":0})
     */
    public $amount = 0;

    /**
     * @var int
     * @ORM\Column(type="text", nullable=true)
     */
    public $text = 0;

    /**
     * @var int
     * @ORM\Column(type="string", nullable=true)
     */
    public $inputGroup = 0;

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

    // Select2 / types

    /**
     * @var string
     * @ORM\Column(type="string", nullable=true)
     */
    public $country;

    /**
     * @var array
     * @ORM\Column(type="json_array", nullable=true)
     */
    public $regions = array();

    /**
     * @var array
     * @ORM\Column(type="json_array", nullable=true)
     */
    public $tags = array();

    /**
     * @var FormJoinEntity
     * @ORM\ManyToOne(targetEntity="FormJoinEntity")
     * @ORM\JoinColumn(name="join_id", referencedColumnName="id", onDelete="SET NULL")
     */
    public $entity;

    /**
     * @var FormJoinEntity[]|ArrayCollection
     *
     * @ORM\ManyToMany(targetEntity="FormJoinEntity")
     * @ORM\JoinTable(name="form_join",
     *      joinColumns={@ORM\JoinColumn(name="form_id", referencedColumnName="id")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="join_id", referencedColumnName="id", unique=true)}
     *      )
     */
    public $entities;

    // Collection


    /**
     * @var FormJoinEntity[]|ArrayCollection
     * @ORM\OneToMany(targetEntity="FormJoinEntity", mappedBy="parent", orphanRemoval=true, cascade={"ALL"})
     * @ORM\OrderBy({"order": "ASC"})
     */
    public $collectionItems;

    /**
     * @var array
     * @ORM\Column(type="json_array", nullable=true)
     */
    public $collectionStrings = array();

    /**
     * @var UmbrellaFile[]|ArrayCollection
     *
     * @ORM\ManyToMany(targetEntity="Umbrella\CoreBundle\Entity\UmbrellaFile", cascade={"ALL"})
     * @ORM\JoinTable(name="form_entity_file",
     *      joinColumns={@ORM\JoinColumn(name="form_entity_id", referencedColumnName="id", onDelete="CASCADE")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="file_id", referencedColumnName="id", unique=true, onDelete="CASCADE")}
     *      )
     */
    public $collectionFiles;


    // Other

    /**
     * @var UmbrellaFile
     * @ORM\ManyToOne(targetEntity="Umbrella\CoreBundle\Entity\UmbrellaFile", cascade={"ALL"})
     * @ORM\JoinColumn(name="file_id", referencedColumnName="id", onDelete="SET NULL")
     */
    public $file;


    /**
     * FormEntity constructor.
     */
    public function __construct()
    {
        $this->entities = new ArrayCollection();
        $this->collectionItems = new ArrayCollection();
        $this->collectionFiles = new ArrayCollection();
    }

    public function addCollectionItem(FormJoinEntity $entity)
    {
        $entity->parent = $this;
        $this->collectionItems->add($entity);
    }

    public function removeCollectionItem(FormJoinEntity $entity)
    {
        $entity->parent = null;
        $this->collectionItems->removeElement($entity);
    }

    public function addCollectionFile(UmbrellaFile $file)
    {
        $this->collectionFiles->add($file);
    }

    public function removeCollectionFile(UmbrellaFile $file)
    {
        $this->collectionFiles->removeElement($file);
    }


}