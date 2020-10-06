<?php

namespace App\Entity\FormExample;

use Doctrine\ORM\Mapping as ORM;
use Umbrella\CoreBundle\Entity\UmbrellaFile;
use Umbrella\CoreBundle\Model\IdTrait;

/**
 * Class BaseExample
 *
 * @ORM\Entity()
 */
class BaseExample
{
    use IdTrait;

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
     * @var string
     * @ORM\Column(type="text", nullable=true)
     */
    public $url;

    /**
     * @var string
     * @ORM\Column(type="text", nullable=true)
     */
    public $text;

    /**
     * @var UmbrellaFile
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
}
