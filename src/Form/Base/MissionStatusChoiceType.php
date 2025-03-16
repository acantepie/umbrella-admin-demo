<?php

namespace App\Form\Base;

use App\Enum\MissionStatus;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MissionStatusChoiceType extends AbstractType
{
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'choices' => MissionStatus::all(),
            'translation_domain' => false,
            'choice_attr' => fn ($choice) => [
                'data-color' => MissionStatus::color($choice)
            ],
            'choice_label' => fn ($c) => $c,
            'option_template' => '<i class="mdi mdi-circle text-{{ color }}"></i> {{ text }}',
            'ub_autocomplete' => true
        ]);
    }

    public function getParent(): string
    {
        return ChoiceType::class;
    }
}
