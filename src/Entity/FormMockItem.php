<?php

namespace App\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Umbrella\CoreBundle\Model\IdTrait;

#[ORM\Entity]
class FormMockItem
{
    use IdTrait;

    #[ORM\Column(type: Types::SMALLINT, options: ['default' => 0])]
    public int $position = 0;

    #[ORM\ManyToOne(targetEntity: FormMock::class, inversedBy: 'collectionItems')]
    #[ORM\JoinColumn(name: 'parent_id', referencedColumnName: 'id', onDelete: 'CASCADE')]
    public ?FormMock $collectionParent = null;

    #[ORM\ManyToOne(targetEntity: FormMock::class, inversedBy: 'collectionOrderableItems')]
    #[ORM\JoinColumn(name: 'parent_orderable_id', referencedColumnName: 'id', onDelete: 'CASCADE')]
    public ?FormMock $collectionOrderableParent = null;

    #[ORM\Column(type: Types::STRING)]
    public ?string $label = null;

    /**
     * @var \DateTime|null
     */
    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    public ?\DateTimeInterface $date = null;
}
