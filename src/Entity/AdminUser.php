<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Umbrella\AdminBundle\Entity\BaseAdminUser;

#[ORM\Entity]
#[UniqueEntity('email')]
class AdminUser extends BaseAdminUser
{
    public function getRoles(): array
    {
        return ['ROLE_ADMIN'];
    }
}
