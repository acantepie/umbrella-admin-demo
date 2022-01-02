<?php

namespace App\Form;

use App\Entity\SpaceMission;
use App\Form\Base\MissionStatusChoiceType;
use App\Form\Base\RocketStatusChoiceType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Form\DatepickerType;

class SpaceMissionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('date', DatepickerType::class);
        $builder->add('companyName', TextType::class);
        $builder->add('location', TextareaType::class);
        $builder->add('rocketStatus', RocketStatusChoiceType::class);
        $builder->add('missionStatus', MissionStatusChoiceType::class);
        $builder->add('detail', TextType::class);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => SpaceMission::class
        ]);
    }
}
