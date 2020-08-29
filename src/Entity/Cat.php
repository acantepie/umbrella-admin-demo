<?php
/**
 * Created by PhpStorm.
 * User: acantepie
 * Date: 22/03/20
 * Time: 20:26
 */

namespace App\Entity;

use Umbrella\CoreBundle\Annotation\SearchableField;
use Umbrella\CoreBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;
use Umbrella\CoreBundle\Model\OrderableTrait;

/**
 * Class Cat
 *
 * @ORM\Entity()
 *
 * @ORM\HasLifecycleCallbacks
 */
class Cat extends BaseEntity
{
    use OrderableTrait;

    /**
     * @ORM\Column(type="string", length=20)
     * @var string
     * @SearchableField()
     */
    public $name;

    /**
     * @ORM\Column(type="smallint", options={"default": 4})
     */
    public $nbPattes = 4;

}