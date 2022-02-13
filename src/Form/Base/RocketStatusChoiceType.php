<?php

namespace App\Form\Base;

use App\Enum\RocketStatus;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Form\UmbrellaChoiceType;

class RocketStatusChoiceType extends AbstractType
{
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'choices' => RocketStatus::all(),
            'translation_domain' => false,
            'expose' => fn ($choice) => [
                'color' => RocketStatus::color($choice)
            ],
            'choice_label' => fn ($c) => $c,
            'template' => '<i class="mdi mdi-circle text-[[ color ]]"></i> [[ text ]]',
        ]);
    }

    public function getParent(): ?string
    {
        return UmbrellaChoiceType::class;
    }
}
