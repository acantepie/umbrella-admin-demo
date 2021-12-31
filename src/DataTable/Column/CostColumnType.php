<?php

namespace App\DataTable\Column;

use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\DataTable\Column\PropertyColumnType;

class CostColumnType extends PropertyColumnType
{
    public function renderProperty($value, array $options): string
    {
        return null === $value ? '' : sprintf('<span class="badge bg-primary">%.2f m</span>', $value);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
    }
}
