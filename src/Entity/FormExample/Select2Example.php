<?php

namespace App\Entity\FormExample;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Umbrella\CoreBundle\Model\IdTrait;

/**
 * Class Select2Example
 *
 * @ORM\Entity
 */
class Select2Example
{
    const SPECIES = [
        'Gardon',
        'Saumon',
        'Anguille',
        'Lamproie',
    ];

    const SPECIES_DESCRIPTION = [
        'Gardon' => 'Poisson d\'eau douce trés commun',
        'Saumon' => 'Poisson migrateur dont la chaire est appréciée',
        'Anguille' => 'Poisson long et visqueux',
        'Lamproie' => 'Poisson de vase, ayant une anatomie proche des poissons préhistoriques',
    ];

    use IdTrait;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    public $fishSpecies;

    /**
     * @ORM\Column(type="string", nullable=false)
     */
    public $requiredFishSpecies = 'Saumon';

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    public $manyFishSpecies = [];

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    public $requiredManyFishSpecies = [];

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    public $manyTplFishSpecies = [];

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Fish")
     * @ORM\JoinTable(name="select2_example_fish",
     *     joinColumns={@ORM\JoinColumn(name="s2_id", referencedColumnName="id", onDelete="CASCADE")},
     *     inverseJoinColumns={@ORM\JoinColumn(name="fish_id", referencedColumnName="id", unique=true, onDelete="CASCADE")}
     * )
     */
    public $fishes;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Fish")
     * @ORM\JoinTable(name="select2_example_fishasync",
     *     joinColumns={@ORM\JoinColumn(name="s2_id", referencedColumnName="id", onDelete="CASCADE")},
     *     inverseJoinColumns={@ORM\JoinColumn(name="fish_id", referencedColumnName="id", unique=true, onDelete="CASCADE")}
     * )
     */
    public $fishesAsync;

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    public $tags = [];

    /**
     * Select2Example constructor.
     */
    public function __construct()
    {
        $this->fishes = new ArrayCollection();
        $this->fishesAsync = new ArrayCollection();
    }
}
