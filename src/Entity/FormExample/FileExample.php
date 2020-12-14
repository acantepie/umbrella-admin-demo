<?php

namespace App\Entity\FormExample;

use Doctrine\ORM\Mapping as ORM;
use Umbrella\CoreBundle\Entity\UmbrellaFile;
use Umbrella\CoreBundle\Model\IdTrait;

/**
 * Class FileExample
 *
 * @ORM\Entity
 */
class FileExample
{
    use IdTrait;

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
}
