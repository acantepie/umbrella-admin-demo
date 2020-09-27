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

/**
 * Class UserGroup
 *
 * @ORM\Entity()
 * @ORM\Table("umbrella_user_group")
 *
 * @ORM\HasLifecycleCallbacks
 */
class UserGroup extends BaseUserGroup
{
    /**
     * @var ArrayCollection
     * @ORM\ManyToMany(targetEntity="User", mappedBy="groups")
     */
    public $users;
}
