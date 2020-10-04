<?php

namespace App\Form\FormExample;

use App\Entity\Fish;
use Symfony\Component\Form\AbstractType;
use Umbrella\CoreBundle\Form\Choice2Type;
use Umbrella\CoreBundle\Form\Entity2Type;
use Umbrella\CoreBundle\Form\TagType;
use Umbrella\CoreBundle\Utils\ArrayUtils;
use App\Entity\FormExample\Select2Example;
use Umbrella\CoreBundle\Form\AsyncEntity2Type;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class Select2ExampleType
 */
class Select2ExampleType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('fishSpecies', Choice2Type::class, [
            'label' => 'species',
            'choices' => ArrayUtils::values_as_keys(Select2Example::SPECIES),
            'choice_prefix' => null,
            'required' => false,
            'help' => 'not required, single, placeholder',
            'placeholder' => 'Espece'
        ]);

        $builder->add('requiredFishSpecies', Choice2Type::class, [
            'label' => 'species',
            'choices' => ArrayUtils::values_as_keys(Select2Example::SPECIES),
            'choice_prefix' => null,
            'help' => 'required, single',
        ]);

        $builder->add('manyFishSpecies', Choice2Type::class, [
            'label' => 'manySpecies',
            'choices' => ArrayUtils::values_as_keys(Select2Example::SPECIES),
            'choice_prefix' => null,
            'multiple' => true,
            'required' => false,
            'help' => 'not required, multiple, placeholder',
            'placeholder' => 'Especes'
        ]);

        $builder->add('requiredManyFishSpecies', Choice2Type::class, [
            'label' => 'manySpecies',
            'choices' => ArrayUtils::values_as_keys(Select2Example::SPECIES),
            'choice_prefix' => null,
            'multiple' => true,
            'required' => true,
            'help' => 'required, multiple',
        ]);

        $builder->add('manyTplFishSpecies', Choice2Type::class, [
            'label' => 'manySpecies',
            'choices' => ArrayUtils::values_as_keys(Select2Example::SPECIES),
            'template_html' => '<span>[[text]]</span><br><span class="text-muted">[[data.description]]</span>',
            'choice_prefix' => null,
            'multiple' => true,
            'required' => false,
            'help' => 'templated choices',
            'choice_attr' => function ($choice) {
                return [
                    'data-description' => Select2Example::SPECIES_DESCRIPTION[$choice]
                ];
            }
        ]);

        $builder->add('fishes', Entity2Type::class, [
            'label' => 'manySpecies',
            'class' => Fish::class,
            'template_html' => '<span>[[text]]</span><br><span class="text-muted">[[data.description]]</span>',
            'choice_prefix' => null,
            'multiple' => true,
            'required' => false,
            'choice_attr' => function ($choice) {
                return [
                    'data-description' => $choice->description
                ];
            }
        ]);

        $builder->add('fishesAsync', AsyncEntity2Type::class, [
            'label' => 'manySpecies',
            'class' => Fish::class,
            'multiple' => true,
            'route' => 'app_admin_form_fishapi',
            'template_html' => '<span>[[text]]</span><br><span class="text-muted">[[description]]</span>',
        ]);

        $builder->add('tags', TagType::class, [
            'help' => 'type word then press enter'
        ]);
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Select2Example::class
        ]);
    }
}
