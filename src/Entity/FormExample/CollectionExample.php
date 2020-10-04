<?php

namespace App\Entity\FormExample;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Umbrella\CoreBundle\Entity\BaseEntity;
use Umbrella\CoreBundle\Entity\UmbrellaFile;

/**
 * Class BaseExample
 *
 * @ORM\Entity()
 * @ORM\HasLifecycleCallbacks()
 */
class CollectionExample extends BaseEntity
{
    /**
     * @var CollectionItemExample[]|ArrayCollection
     * @ORM\OneToMany(targetEntity="App\Entity\FormExample\CollectionItemExample", mappedBy="parent", orphanRemoval=true, cascade={"ALL"})
     * @ORM\OrderBy({"order": "ASC"})
     */
    public $items;

    /**
     * @var array
     * @ORM\Column(type="json", nullable=true)
     */
    public $strings = [];

    /**
     * @var UmbrellaFile[]|ArrayCollection
     *
     * @ORM\ManyToMany(targetEntity="Umbrella\CoreBundle\Entity\UmbrellaFile", cascade={"ALL"})
     * @ORM\JoinTable(name="collection_example_file",
     *      joinColumns={@ORM\JoinColumn(name="collection_example_id", referencedColumnName="id", onDelete="CASCADE")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="file_id", referencedColumnName="id", unique=true, onDelete="CASCADE")}
     *      )
     */
    public $files;

    /**
     * CollectionExample constructor.
     */
    public function __construct()
    {
        $this->items = new ArrayCollection();
        $this->files = new ArrayCollection();
    }

    /**
     * @param CollectionItemExample $item
     */
    public function addItem(CollectionItemExample $item)
    {
        $item->parent = $this;
        $this->items->add($item);
    }

    /**
     * @param CollectionItemExample $item
     */
    public function removeItem(CollectionItemExample $item)
    {
        $item->parent = null;
        $this->items->removeElement($item);
    }

}
