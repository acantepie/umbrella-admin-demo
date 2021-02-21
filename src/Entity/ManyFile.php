<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Umbrella\CoreBundle\Entity\UmbrellaFile;
use Umbrella\CoreBundle\Model\IdTrait;

/**
 * Class Files
 *
 * @ORM\Entity
 */
class ManyFile
{
    use IdTrait;

    /**
     * @var UmbrellaFile
     * @ORM\ManyToOne(targetEntity="Umbrella\CoreBundle\Entity\UmbrellaFile", cascade={"ALL"})
     * @ORM\JoinColumn(name="public_file_id", referencedColumnName="id", onDelete="SET NULL")
     */
    public $wallpaperFile;

    /**
     * @var UmbrellaFile
     * @ORM\ManyToOne(targetEntity="Umbrella\CoreBundle\Entity\UmbrellaFile", cascade={"ALL"})
     * @ORM\JoinColumn(name="protected_file_id", referencedColumnName="id", onDelete="SET NULL")
     */
    public $billFile;
}
