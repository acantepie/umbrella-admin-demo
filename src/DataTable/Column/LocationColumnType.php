<?php

namespace App\DataTable\Column;

use Umbrella\CoreBundle\Component\DataTable\Column\PropertyColumnType;

class LocationColumnType extends PropertyColumnType
{
    public function renderProperty($value, array $options): string
    {
        $v = explode(',', $value);
        return end($v);
    }
}
