<?php

namespace App\DataTable\Column;

use Umbrella\CoreBundle\Component\DataTable\Column\PropertyColumnType;

class LocationColumnType extends PropertyColumnType
{
    public function render($entity, array $options)
    {
        $value = $this->accessor->getValue($entity, $options['property_path']);

        $locationsParts = explode(',', $value);
        $id = sprintf('location-%d', $entity->id);

        return sprintf(
            '<a class="dropdown-toggle" data-toggle="collapse" href="#%s"><u>%s</u></a><div class="collapse" id="%s"><div class="card border-secondary border p-1 mb-0 my-1">%s</div></div>',
            $id, end($locationsParts), $id, $value
        );
    }
}
