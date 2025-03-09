<?php

namespace App\DataTable\Column;

use Umbrella\AdminBundle\Lib\DataTable\Column\PropertyColumnType;

class LocationColumnType extends PropertyColumnType
{
    public function renderProperty(mixed $value, array $options): string
    {
        $v = explode(',', $value);
        return end($v);
    }
}
