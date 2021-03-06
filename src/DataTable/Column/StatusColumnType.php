<?php

namespace App\DataTable\Column;

use App\Entity\SpaceMission;
use Umbrella\CoreBundle\Component\DataTable\Column\PropertyColumnType;

class StatusColumnType extends PropertyColumnType
{
    public function render($entity, array $options)
    {
        $value = $this->accessor->getValue($entity, $options['property_path']);
        return sprintf('<i class="mdi mdi-circle text-%s"></i> %s', SpaceMission::STATUS_COLORS[$value], $value);
    }
}
