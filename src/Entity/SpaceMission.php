<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Umbrella\CoreBundle\Component\Search\Annotation\Searchable;
use Umbrella\CoreBundle\Component\Search\Annotation\SearchableField;
use Umbrella\CoreBundle\Model\IdTrait;
use Umbrella\CoreBundle\Model\SearchTrait;

/**
 * Class SpaceMission
 *
 * @ORM\Entity
 * @Searchable
 */
class SpaceMission
{
    const ROCKET_ACTIVE = 'Active';
    const ROCKET_RETIRED = 'Retired';

    const MISSION_FAILURE = 'Failure';
    const MISSION_PARTIAL_FAILURE = 'Partial Failure';
    const MISSION_PRELAUNCH_FAILURE = 'Prelaunch Failure';
    const MISSION_SUCCESS = 'Success';

    const MISSION_STATUSES = [
        self::MISSION_FAILURE, self::MISSION_PARTIAL_FAILURE, self::MISSION_PRELAUNCH_FAILURE, self::MISSION_SUCCESS
    ];

    const STATUS_COLORS = [
        self::ROCKET_ACTIVE => 'primary',
        self::ROCKET_RETIRED => 'danger',
        self::MISSION_FAILURE => 'danger',
        self::MISSION_PARTIAL_FAILURE => 'warning',
        self::MISSION_PRELAUNCH_FAILURE => 'warning',
        self::MISSION_SUCCESS => 'success',
    ];

    use IdTrait;
    use SearchTrait;

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
     * @var string
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
