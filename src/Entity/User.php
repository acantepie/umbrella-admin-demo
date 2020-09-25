<?php
/**
 * Created by PhpStorm.
 * User: acantepie
 * Date: 11/04/18
 * Time: 11:24
 */

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Umbrella\CoreBundle\Entity\UmbrellaFile;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Umbrella\AdminBundle\Entity\BaseUser;

/**
 * Class User
 *
 * @ORM\Entity()
 * @ORM\Table("umbrella_user")
 *
 * @ORM\HasLifecycleCallbacks
 * @UniqueEntity("email")
 */
class User extends BaseUser
{
    /**
     * @var UmbrellaFile
     * @ORM\ManyToOne(targetEntity="Umbrella\CoreBundle\Entity\UmbrellaFile", cascade={"ALL"})
     * @ORM\JoinColumn(name="avatar_id", referencedColumnName="id", onDelete="SET NULL")
     */
    public $avatar;

    /**
     * @var ArrayCollection
     * @ORM\ManyToMany(targetEntity="UserGroup", inversedBy="users")
     * @ORM\JoinTable(name="umbrella_user_group_assoc")
     */
    public $groups;
}
