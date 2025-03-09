<?php

namespace App\Entity;

use App\Enum\MissionStatus;
use App\Enum\RocketStatus;
use App\Repository\SpaceMissionRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Umbrella\AdminBundle\Entity\Trait\IdTrait;
use Umbrella\AdminBundle\Entity\Trait\SearchTrait;
use Umbrella\AdminBundle\Lib\Search\Attribute\Searchable;
use Umbrella\AdminBundle\Lib\Search\Attribute\SearchableField;

#[ORM\Entity(repositoryClass: SpaceMissionRepository::class)]
#[Searchable]
class SpaceMission
{
    use IdTrait;
    use SearchTrait;

    #[ORM\Column(type: Types::STRING)]
    #[SearchableField]
    public ?string $companyName = null;

    #[ORM\Column(type: Types::STRING)]
    #[SearchableField]
    public ?string $location = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    public ?\DateTimeInterface $date = null;

    #[ORM\Column(type: Types::STRING)]
    #[SearchableField]
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
