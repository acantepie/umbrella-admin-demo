<?php

namespace App\DataTable\Column;

use App\Enum\RocketStatus;
use Umbrella\CoreBundle\DataTable\Column\PropertyColumnType;

class RocketStatusColumnType extends PropertyColumnType
{
    public function renderProperty($value, array $options): string
    {
        return $value ? RocketStatus::widget($value) : '';
    }

    public function isSafeHtml(): bool
    {
        return true;
    }
}
