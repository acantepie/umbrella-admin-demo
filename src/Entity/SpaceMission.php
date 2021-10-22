<?php

namespace App\Entity;

use App\Repository\SpaceMissionRepository;
use Doctrine\ORM\Mapping as ORM;
use Umbrella\CoreBundle\Model\IdTrait;
use Umbrella\CoreBundle\Model\SearchTrait;
use Umbrella\CoreBundle\Search\Annotation\Searchable;
use Umbrella\CoreBundle\Search\Annotation\SearchableField;

/**
 * @ORM\Entity(repositoryClass=SpaceMissionRepository::class)
 * @Searchable
 */
class SpaceMission
{
    use IdTrait;
    use SearchTrait;
    public const ROCKET_ACTIVE = 'Active';
    public const ROCKET_RETIRED = 'Retired';

    public const MISSION_FAILURE = 'Failure';
    public const MISSION_PARTIAL_FAILURE = 'Partial Failure';
    public const MISSION_PRELAUNCH_FAILURE = 'Prelaunch Failure';
    public const MISSION_SUCCESS = 'Success';

    public const MISSION_STATUSES = [
        self::MISSION_FAILURE, self::MISSION_PARTIAL_FAILURE, self::MISSION_PRELAUNCH_FAILURE, self::MISSION_SUCCESS
    ];

    public const STATUS_COLORS = [
        self::ROCKET_ACTIVE => 'primary',
        self::ROCKET_RETIRED => 'danger',
        self::MISSION_FAILURE => 'danger',
        self::MISSION_PARTIAL_FAILURE => 'warning',
        self::MISSION_PRELAUNCH_FAILURE => 'warning',
        self::MISSION_SUCCESS => 'success',
    ];

    public static function getIconStatus(string $status): string
    {
        return isset(self::STATUS_COLORS[$status])
            ? sprintf('<i class="mdi mdi-circle text-%s me-1"></i> %s', self::STATUS_COLORS[$status], $status)
            : $status;
    }

    /**
     * @ORM\Column(type="smallint", options={"default": 0})
     */
    public int $sequence = 0;

    /**
     * @ORM\Column(type="string")
     * @SearchableField
     */
    public ?string $companyName = null;

    /**
     * @ORM\Column(type="string")
     * @SearchableField
     */
    public ?string $location = null;

    /**
     * @ORM\Column(type="date")
     */
    public ?\DateTimeInterface $date = null;

    /**
     * @ORM\Column(type="string")
     * @SearchableField
     */
    public ?string $detail = null;

    /**
     * @ORM\Column(type="string")
     */
    public string $rocketStatus = self::ROCKET_ACTIVE;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    public ?int $cost = null;

    /**
     * @ORM\Column(type="string")
     */
    public string $missionStatus = self::MISSION_SUCCESS;

    public function __toString()
    {
        return (string) $this->detail;
    }
}
