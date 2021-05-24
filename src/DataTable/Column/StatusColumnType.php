<?php

namespace App\DataTable\Column;

use App\Entity\SpaceMission;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\DataTable\Column\PropertyColumnType;

class StatusColumnType extends PropertyColumnType
{
    public function renderProperty($value, array $options): string
    {
        return SpaceMission::getIconStatus($value);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
    }
}
