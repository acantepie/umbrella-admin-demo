<?php
/**
 * Created by PhpStorm.
 * User: acantepie
 * Date: 11/04/18
 * Time: 13:33
 */

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Umbrella\AdminBundle\Entity\BaseUserGroup;
use Doctrine\Common\Collections\ArrayCollection;
use Umbrella\CoreBundle\Annotation\Searchable;

/**
 * Class UserGroup
 *
 * @ORM\Entity()
 * @ORM\HasLifecycleCallbacks
 * @Searchable()
 */
class UserGroup extends BaseUserGroup
{
    /**
     * @var ArrayCollection
     * @ORM\ManyToMany(targetEntity="User", mappedBy="groups")
     */
    public $users;
}
