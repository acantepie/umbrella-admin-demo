<?php


namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Umbrella\CoreBundle\Model\IdTrait;

/**
 * Class Menu
 *
 * @ORM\Entity(repositoryClass="App\Repository\CustomMenuConfigRepository")
 */
class CustomMenuConfig
{
    use IdTrait;

    /**
     * @var string
     * @ORM\Column(type="string", nullable=false)
     */
    public $name = 'Umbrella';

    /**
     * @var bool
     * @ORM\Column(type="boolean", nullable=false)
     */
    public $shuffle = false;

}