<?php

namespace App\Form\Base;

use App\Entity\SpaceMission;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Form\UmbrellaChoiceType;

class MissionStatusChoiceType extends AbstractType
{
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'label' => 'Mission status',
            'choices' => SpaceMission::MISSION_STATUSES,
            'choices_as_values' => true,
            'translation_domain' => false,
            'expose' => function ($choice) {
                return [
                    'color' => SpaceMission::STATUS_COLORS[$choice]
                ];
            },
            'template' => '<i class="mdi mdi-circle text-[[ color ]]"></i> [[ text ]]',
        ]);
    }

    public function getParent(): ?string
    {
        return UmbrellaChoiceType::class;
    }
}
