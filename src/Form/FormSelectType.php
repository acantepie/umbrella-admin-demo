<?php

namespace App\Form;

use App\Entity\FormMock;
use App\Entity\SpaceMission;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Form\AutocompleteType;
use Umbrella\CoreBundle\Form\UmbrellaChoiceType;
use Umbrella\CoreBundle\Form\UmbrellaEntityType;

class FormSelectType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $choices = [
            'Eel' => 'eel',
            'Salmon' => 'salmon',
            'Cat' => 'cat',
        ];

        $getSpecie = function ($Mission) {
            switch ($Mission) {
                case 'eel':
                case 'salmon':
                    return 'Fish';
                default:
                    return 'Other';
            }
        };

        // --- select
        $builder->add('choiceMission', UmbrellaChoiceType::class, [
            'label' => 'Select',
            'choices' => $choices,
            'multiple' => false,
            'required' => true,
        ]);

        // --- select multiple
        $builder->add('choiceMissions', UmbrellaChoiceType::class, [
            'label' => 'Select multiple',
            'choices' => $choices,
            'required' => false,
            'multiple' => true
        ]);

        // --- select with html template
        $builder->add('choiceMissionTemplated', UmbrellaChoiceType::class, [
            'label' => 'Select with html template',
            'choices' => $choices,
            'expose' => fn ($choice) => ['specie' => $getSpecie($choice)],
            'required' => false,
            'template' => '[[text]]<div class="text-muted">[[specie]]</div>',
        ]);

        // --- select with grouped options
        $builder->add('choiceMissionGrouped', UmbrellaChoiceType::class, [
            'label' => 'Select with grouped options',
            'choices' => $choices,
            'group_by' => $getSpecie,
            'required' => false,
        ]);

        // --- select on doctrine entity
        $builder->add('choiceMissionEntity', UmbrellaEntityType::class, [
            'label' => 'Select on doctrine entity',
            'class' => SpaceMission::class,
            'required' => false,
        ]);

        // --- select with async loading
        $builder->add('asyncChoiceMission', AutocompleteType::class, [
            'label' => 'Select',
            'route' => 'app_admin_form_loadmission',
            'class' => SpaceMission::class,
            'required' => false,
        ]);

        $builder->add('asyncChoiceMissions', AutocompleteType::class, [
            'label' => 'Select multiple',
            'route' => 'app_admin_form_loadmission',
            'multiple' => true,
            'class' => SpaceMission::class,
            'required' => false,
        ]);

        $builder->add('asyncChoiceMissionTemplated', AutocompleteType::class, [
            'label' => 'Select with html template',
            'route' => 'app_admin_form_loadmission',
            'class' => SpaceMission::class,
            'required' => false,
            'template' => '<span>[[text]]</span><br><span class="text-muted">[[description]]</span>',
        ]);

//        $builder->add('asyncChoiceMissionPaginated', AutocompleteType::class, [
//            'label' => 'Select with pagination',
//            'route' => 'app_admin_form_loadmissionandpaginate',
//            'class' => SpaceMission::class,
//            'required' => false
//        ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefault('data_class', FormMock::class);
    }
}
