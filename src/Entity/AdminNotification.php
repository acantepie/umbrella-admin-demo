<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Umbrella\AdminBundle\Entity\BaseNotification;

/**
 * @ORM\Entity
 */
class AdminNotification extends BaseNotification
{
    /**
     * @var ArrayCollection|AdminUser[]
     *
     * @ORM\ManyToMany(targetEntity="AdminUser")
     * @ORM\JoinTable(
     *     joinColumns={@ORM\JoinColumn(onDelete="CASCADE")},
     *     inverseJoinColumns={@ORM\JoinColumn(onDelete="CASCADE")}
     * )
     */
    public $users;

    /**
     * Notification constructor.
     */
    public function __construct()
    {
        $this->users = new ArrayCollection();
        parent::__construct();
    }
}
