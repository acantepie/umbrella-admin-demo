<?php

namespace App\Form;

use App\Entity\FormMock;
use App\Entity\SpaceMission;
use App\Entity\SpaceMissionClassification;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Form\AutocompleteType;
use Umbrella\CoreBundle\Form\NestedTreeType;
use Umbrella\CoreBundle\Form\UmbrellaChoiceType;
use Umbrella\CoreBundle\Form\UmbrellaEntityType;
use Umbrella\CoreBundle\Form\UmbrellaTagType;

class FormSelectType extends AbstractType
{
    public const MISSION_PAGE_LENGTH = 30;

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $choices = [
            'Eel' => 'eel',
            'Salmon' => 'salmon',
            'Cat' => 'cat',
        ];

        $getSpecie = fn ($Mission) => match ($Mission) {
            'eel', 'salmon' => 'Fish',
            default => 'Other',
        };

        // --- select
        $builder->add('choiceMission', UmbrellaChoiceType::class, [
            'label' => 'Select',
            'choices' => $choices,
            'required' => false,
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

        $builder->add('choiceMissionClassificationEntity', NestedTreeType::class, [
            'label' => 'Select on nested tree doctrine entity',
            'class' => SpaceMissionClassification::class,
            'required' => false,
        ]);

        // --- select with async loading
        $builder->add('asyncChoiceMission', AutocompleteType::class, [
            'label' => 'Select',
            'route' => 'app_form_loadmission',
            'class' => SpaceMission::class,
            'required' => false,
        ]);

        $builder->add('asyncChoiceMissions', AutocompleteType::class, [
            'label' => 'Select multiple',
            'route' => 'app_form_loadmission',
            'multiple' => true,
            'class' => SpaceMission::class,
            'required' => false,
        ]);

        $builder->add('asyncChoiceMissionTemplated', AutocompleteType::class, [
            'label' => 'Select with html template',
            'route' => 'app_form_loadmission',
            'class' => SpaceMission::class,
            'required' => false,
            'template' => '<span>[[text]]</span><br><span class="text-muted">[[description]]</span>',
        ]);

//        $builder->add('asyncChoiceMissionPaginated', AutocompleteType::class, [
//            'label' => 'Select with pagination',
//            'route' => 'app_form_loadmission',
//            'page_length' => self::MISSION_PAGE_LENGTH,
//            'class' => SpaceMission::class,
//            'required' => false
//        ]);

        $builder->add('tags', UmbrellaTagType::class, [
            'required' => false
        ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefault('data_class', FormMock::class);
    }
}
