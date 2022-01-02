<?php

namespace App\Form;

use App\Form\Base\MissionStatusChoiceType;
use App\Form\Base\RocketStatusChoiceType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;

class SpaceMissionBulkType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('rocketStatus', RocketStatusChoiceType::class, [
            'required' => false
        ]);
        $builder->add('missionStatus', MissionStatusChoiceType::class, [
            'required' => false
        ]);
    }
}
