<?php

namespace App\DataTable\Column;

use Umbrella\CoreBundle\DataTable\Column\PropertyColumnType;

class CostColumnType extends PropertyColumnType
{
    public function renderProperty($value, array $options): string
    {
        return null === $value ? '' : sprintf('<span class="badge bg-primary">%.2f m</span>', $value);
    }

    public function isSafeHtml(): bool
    {
        return true;
    }
}
