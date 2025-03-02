<?php

namespace App\DataTable\Column;

use App\Enum\RocketStatus;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\DataTable\Column\PropertyColumnType;

class RocketStatusColumnType extends PropertyColumnType
{
    public function renderProperty(mixed $value, array $options): string
    {
        return $value ? RocketStatus::widget($value) : '';
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
    }
}
