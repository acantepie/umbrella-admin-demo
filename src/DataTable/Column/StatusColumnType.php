<?php

namespace App\DataTable\Column;

use App\Entity\SpaceMission;
use Umbrella\CoreBundle\DataTable\Column\PropertyColumnType;

class StatusColumnType extends PropertyColumnType
{
    public function renderProperty($value, array $options): string
    {
        return SpaceMission::getIconStatus($value);
    }

    public function isSafeHtml(): bool
    {
        return true;
    }
}
