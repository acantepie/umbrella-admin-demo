<?php

namespace App\DataTable\Column;

use App\Enum\MissionStatus;
use Umbrella\CoreBundle\DataTable\Column\PropertyColumnType;

class MissionStatusColumnType extends PropertyColumnType
{
    public function renderProperty($value, array $options): string
    {
        return $value ? MissionStatus::widget($value) : '';
    }

    public function isSafeHtml(): bool
    {
        return true;
    }
}
