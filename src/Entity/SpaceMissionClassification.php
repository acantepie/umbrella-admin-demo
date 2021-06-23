<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Umbrella\CoreBundle\Model\IdTrait;
use Umbrella\CoreBundle\Model\NestedTreeEntityInterface;
use Umbrella\CoreBundle\Model\NestedTreeEntityTrait;

/**
 * Class SpaceMissionClassification
 *
 * @Gedmo\Tree(type="nested")
 * @ORM\Entity(repositoryClass="App\Repository\SpaceMissionClassificationRepository")
 */
class SpaceMissionClassification implements NestedTreeEntityInterface
{
    use IdTrait;
    use NestedTreeEntityTrait;
    public const ROOT = 'root';

    public const COMPANY = 'company';
    public const STATUS = 'status';
    public const MISSION = 'mission';

    /**
     * @var SpaceMissionClassification
     *
     * @Gedmo\TreeRoot
     * @ORM\ManyToOne(targetEntity="SpaceMissionClassification")
     * @ORM\JoinColumn(referencedColumnName="id", onDelete="CASCADE")
     */
    public $root;

    /**
     * @var SpaceMissionClassification
     *
     * @Gedmo\TreeParent
     * @ORM\ManyToOne(targetEntity="SpaceMissionClassification", inversedBy="children")
     * @ORM\JoinColumn(referencedColumnName="id", onDelete="CASCADE")
     */
    public $parent;

    /**
     * @var SpaceMissionClassification[]|ArrayCollection
     *
     * @ORM\OneToMany(targetEntity="SpaceMissionClassification", mappedBy="parent", cascade={"ALL"})
     * @ORM\OrderBy({"left": "ASC"})
     */
    public $children;

    /**
     * @var string
     * @ORM\Column(type="string")
     */
    public $name;

    /**
     * @var string
     * @ORM\Column(type="string")
     */
    public $type;

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
    public function __toString()
    {
        return (string) $this->name;
    }
}
