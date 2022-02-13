<?php

namespace App\Entity;

use App\Repository\AdminNotificationRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Umbrella\AdminBundle\Entity\BaseNotification;

#[ORM\Entity(repositoryClass: AdminNotificationRepository::class)]
class AdminNotification extends BaseNotification
{
    /**
     * @var ArrayCollection|AdminUser[]
     */
    #[ORM\ManyToMany(targetEntity: AdminUser::class)]
    #[ORM\JoinColumn(onDelete: 'CASCADE')]
    #[ORM\InverseJoinColumn(onDelete: 'CASCADE')]
    public Collection $users;

    public function __construct()
    {
        $this->users = new ArrayCollection();
        parent::__construct();
    }
}
