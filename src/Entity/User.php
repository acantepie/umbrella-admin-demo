<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Umbrella\AdminBundle\Entity\BaseUser;
use Umbrella\CoreBundle\Component\Search\Annotation\Searchable;

/**
 * Class User
 *
 * @ORM\Entity
 * @ORM\HasLifecycleCallbacks
 * @Searchable
 * @UniqueEntity("email")
 */
class User extends BaseUser
{
    /**
     * {@inheritdoc}
     */
    public function getRoles()
    {
        return ['ROLE_ADMIN'];
    }
}
