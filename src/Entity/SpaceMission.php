<?php

namespace App\Entity;

use App\Enum\MissionStatus;
use App\Enum\RocketStatus;
use App\Repository\SpaceMissionRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Umbrella\AdminBundle\Entity\Trait\IdTrait;

#[ORM\Entity(repositoryClass: SpaceMissionRepository::class)]
class SpaceMission
{
    use IdTrait;

    // SearchableField
    #[ORM\Column(type: Types::STRING)]
    public ?string $companyName = null;

    // SearchableField
    #[ORM\Column(type: Types::STRING)]
    public ?string $location = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    public ?\DateTimeInterface $date = null;

    // SearchableField
    #[ORM\Column(type: Types::STRING)]
    public ?string $detail = null;

    #[ORM\Column(type: Types::STRING)]
    public string $rocketStatus = RocketStatus::ACTIVE;

    #[ORM\Column(type: Types::INTEGER, nullable: true)]
    public ?int $cost = null;

    #[ORM\Column(type: Types::STRING)]
    public string $missionStatus = MissionStatus::SUCCESS;

    public function __toString(): string
    {
        return (string) $this->detail;
    }
}
