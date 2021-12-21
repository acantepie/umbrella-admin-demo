<?php

namespace App\Form;

use App\Entity\FormMock;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\ColorType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\RangeType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Image;
use Umbrella\CoreBundle\Form\CkeditorType;
use Umbrella\CoreBundle\Form\DatepickerType;
use Umbrella\CoreBundle\Form\UmbrellaCollectionType;
use Vich\UploaderBundle\Form\Type\VichFileType;

class FormCommonType extends AbstractType
{
    public const CHOICES = [
        'Option one',
        'Option two',
        'Option three'
    ];

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        // Simple form elements
        $builder->add('text', TextType::class, [
            'required' => false,
        ]);
        $builder->add('textarea', TextareaType::class, [
            'required' => false,
        ]);
        $builder->add('checkMe', CheckboxType::class, [
            'required' => false,
        ]);
        $builder->add('checkMe', CheckboxType::class, [
            'required' => false,
        ]);
        $builder->add('color', ColorType::class, [
            'required' => false,
        ]);
        $builder->add('amount', RangeType::class, [
            'required' => false,
        ]);

        $builder->add('select', ChoiceType::class, [
            'choices' => array_combine(self::CHOICES, self::CHOICES),
            'required' => false,
        ]);
        $builder->add('selectExpanded', ChoiceType::class, [
            'choices' => array_combine(self::CHOICES, self::CHOICES),
            'expanded' => true,
            'required' => false,
        ]);
        $builder->add('selectMultiple', ChoiceType::class, [
            'choices' => array_combine(self::CHOICES, self::CHOICES),
            'multiple' => true,
            'required' => false,
        ]);
        $builder->add('selectMultipleExpanded', ChoiceType::class, [
            'choices' => array_combine(self::CHOICES, self::CHOICES),
            'multiple' => true,
            'expanded' => true,
            'required' => false
        ]);

        // Addon form extensions
        $builder->add('inputGroupText', TextType::class, [
            'input_prefix_text' => '@',
            'required' => false
        ]);
        $builder->add('inputGroupButton', TextType::class, [
            'input_suffix' => '<button class="btn btn-secondary" type="button">Click</button>',
            'required' => false
        ]);

        $builder->add('inputIcon', TextType::class, [
            'input_addon_container_class' => 'input-icon',
            'input_prefix' => '<span class="input-icon-addon"><i class="mdi mdi-magnify"></i></span>',
            'required' => false
        ]);

        // Advanced form elements
        $builder->add('date', DatepickerType::class, [
            'required' => false
        ]);
        $builder->add('dateTime', DatepickerType::class, [
            'required' => false,
            'enable_time' => true
        ]);
        $builder->add('richText', CkeditorType::class, [
            'required' => false
        ]);

        // Collection
        $builder->add('collectionItems', UmbrellaCollectionType::class, [
            'entry_type' => FormItemType::class,
        ]);

        $builder->add('collectionOrderableItems', UmbrellaCollectionType::class, [
            'entry_type' => FormItemType::class,
            'sort_by' => 'position',
        ]);

        // File
        $builder->add('file', FileType::class, [
            'label' => 'FileType',
            'mapped' => false,
            'required' => false,
            'constraints' => new Image(['maxSize' => '1024k'])
        ]);

        $builder->add('vichFile', VichFileType::class, [
            'label' => 'VichFileType',
            'allow_delete' => true,
            'required' => false,
            'constraints' => new Image(['maxSize' => '1024k'])
        ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => FormMock::class
        ]);
    }
}
