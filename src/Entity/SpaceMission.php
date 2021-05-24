<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Umbrella\CoreBundle\Model\IdTrait;
use Umbrella\CoreBundle\Model\SearchTrait;
use Umbrella\CoreBundle\Search\Annotation\Searchable;
use Umbrella\CoreBundle\Search\Annotation\SearchableField;

/**
 * Class SpaceMission
 *
 * @ORM\Entity
 * @Searchable
 */
class SpaceMission
{
    use IdTrait;
    use SearchTrait;
    const ROCKET_ACTIVE = 'Active';
    const ROCKET_RETIRED = 'Retired';

    const MISSION_FAILURE = 'Failure';
    const MISSION_PARTIAL_FAILURE = 'Partial Failure';
    const MISSION_PRELAUNCH_FAILURE = 'Prelaunch Failure';
    const MISSION_SUCCESS = 'Success';

    const MISSION_STATUSES = [
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

    public static function getIconStatus(string $status)
    {
        return isset(self::STATUS_COLORS[$status])
            ? sprintf('<i class="mdi mdi-circle text-%s me-1"></i> %s', self::STATUS_COLORS[$status], $status)
            : $status;
    }

    /**
     * @var int
     * @ORM\Column(type="smallint", options={"default": 0})
     */
    public $sequence = 0;

    /**
     * @var string
     * @ORM\Column(type="string")
     *
     * @SearchableField
     */
    public $companyName;

    /**
     * @var string
     * @ORM\Column(type="string")
     *
     * @SearchableField
     */
    public $location;

    /**
     * @var \DateTimeInterface
     * @ORM\Column(type="date")
     */
    public $date;

    /**
     * @var string
     * @ORM\Column(type="string")
     *
     * @SearchableField
     */
    public $detail;

    /**
     * @var string
     * @ORM\Column(type="string")
     */
    public $rocketStatus = self::ROCKET_ACTIVE;

    /**
     * @var ?int
     * @ORM\Column(type="integer", nullable=true)
     */
    public $cost;

    /**
     * @var string
     * @ORM\Column(type="string")
     */
    public $missionStatus = self::MISSION_SUCCESS;

    public function __toString()
    {
        return (string) $this->companyName;
    }
}
