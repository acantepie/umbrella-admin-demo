<?php

namespace App\Form;

use App\Entity\FormMock;
use App\Entity\SpaceMission;
use App\Entity\SpaceMissionClassification;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\AdminBundle\Lib\Form\AutoCompleteType;
use Umbrella\AdminBundle\Lib\Form\NestedEntityType;

class FormAutocompleteType extends AbstractType
{
    public const MISSION_PAGE_LENGTH = 30;

    public function buildForm(FormBuilderInterface $builder, array $options): void
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
        $builder->add('choiceMission', ChoiceType::class, [
            'label' => 'Select',
            'choices' => $choices,
            'required' => false,
            'ub_autocomplete' => true,
        ]);

        // --- select multiple
        $builder->add('choiceMissions', ChoiceType::class, [
            'label' => 'Select multiple',
            'choices' => $choices,
            'required' => false,
            'multiple' => true,
            'ub_autocomplete' => true,
        ]);

        // --- select with html template
        $builder->add('choiceMissionTemplated', ChoiceType::class, [
            'label' => 'Select with html template',
            'choices' => $choices,
            'choice_attr' => fn ($choice) => ['data-specie' => $getSpecie($choice)],
            'required' => false,
            'option_template' => '{{text}}<div class="text-muted">{{specie}}</div>',
            'ub_autocomplete' => true,
        ]);

        // --- select with grouped options
        $builder->add('choiceMissionGrouped', ChoiceType::class, [
            'label' => 'Select with grouped options',
            'choices' => $choices,
            'group_by' => $getSpecie,
            'required' => false,
            'ub_autocomplete' => true,
        ]);

        // --- select on doctrine entity
        $builder->add('choiceMissionEntity', EntityType::class, [
            'label' => 'Select on doctrine entity',
            'class' => SpaceMission::class,
            'required' => false,
            'ub_autocomplete' => true,
        ]);

        $builder->add('choiceMissionClassificationEntity', NestedEntityType::class, [
            'label' => 'Select on nested tree doctrine entity',
            'class' => SpaceMissionClassification::class,
            'required' => false,
        ]);

        // --- select with async loading
        $builder->add('asyncChoiceMission', AutoCompleteType::class, [
            'label' => 'Select',
            'route' => 'app_form_loadmission',
            'class' => SpaceMission::class,
            'required' => false,
        ]);

        $builder->add('asyncChoiceMissions', AutoCompleteType::class, [
            'label' => 'Select multiple',
            'route' => 'app_form_loadmission',
            'multiple' => true,
            'class' => SpaceMission::class,
            'required' => false,
        ]);

        $builder->add('asyncChoiceMissionTemplated', AutoCompleteType::class, [
            'label' => 'Select with html template',
            'route' => 'app_form_loadmission',
            'class' => SpaceMission::class,
            'required' => false,
            'option_template' => '<span>{{text}}</span><br><span class="text-muted">{{description}}</span>',
        ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefault('data_class', FormMock::class);
    }
}
