<?php

namespace App\Form\Base;

use App\Entity\SpaceMission;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Form\Choice2Type;

class MissionStatusChoiceType extends AbstractType
{
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'choices' => SpaceMission::MISSION_STATUSES,
            'choices_as_values' => true,
            'translation_domain' => false,
            'expose' => function ($choice) {
                return [
                    'color' => SpaceMission::STATUS_COLORS[$choice],
                ];
            },
            'template_html' => '<i class="mdi mdi-circle text-[[ color ]]"></i> [[ text ]]',
        ]);
    }

    public function getParent()
    {
        return Choice2Type::class;
    }
}
