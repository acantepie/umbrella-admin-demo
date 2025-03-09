<?php

namespace App\DataTable\Column;

use App\Enum\MissionStatus;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\AdminBundle\Lib\DataTable\Column\PropertyColumnType;

class MissionStatusColumnType extends PropertyColumnType
{
    public function renderProperty(mixed $value, array $options): string
    {
        return $value ? MissionStatus::widget($value) : '';
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
    }
}
