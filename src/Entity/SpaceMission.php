<?php

namespace App\Entity;

use App\Enum\MissionStatus;
use App\Enum\RocketStatus;
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
    public string $rocketStatus = RocketStatus::ACTIVE;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    public ?int $cost = null;

    /**
     * @ORM\Column(type="string")
     */
    public string $missionStatus = MissionStatus::SUCCESS;

    public function __toString()
    {
        return (string) $this->detail;
    }
}
