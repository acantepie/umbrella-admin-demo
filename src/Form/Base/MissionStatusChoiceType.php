<?php

namespace App\Form\Base;

use App\Enum\MissionStatus;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Form\UmbrellaChoiceType;

class MissionStatusChoiceType extends AbstractType
{
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'choices' => MissionStatus::all(),
            'translation_domain' => false,
            'expose' => fn ($choice) => [
                'color' => MissionStatus::color($choice)
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
