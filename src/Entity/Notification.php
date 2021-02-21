<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Umbrella\AdminBundle\Entity\BaseNotification;

/**
 * Class App\Entity\Notification.
 *
 * @ORM\Entity
 */
class Notification extends BaseNotification
{
    /**
     * @var ArrayCollection|User[]
     *
     * @ORM\ManyToMany(targetEntity="App\Entity\User")
     * @ORM\JoinTable(name="notification_users",
     *     joinColumns={@ORM\JoinColumn(name="notification_id", referencedColumnName="id", onDelete="CASCADE")},
     *     inverseJoinColumns={@ORM\JoinColumn(name="user_id", referencedColumnName="id", onDelete="CASCADE")}
     * )
     */
    public $users;

    /**
     * @var bool
     * @ORM\Column(type="boolean", nullable=false)
     */
    public $sendToAll = false;

    /**
     * Notification constructor.
     */
    public function __construct()
    {
        $this->users = new ArrayCollection();
        parent::__construct();
    }
}
