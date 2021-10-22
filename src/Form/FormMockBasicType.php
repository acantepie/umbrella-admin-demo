<?php

namespace App\Form;

use App\Entity\FormMock;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ColorType;
use Symfony\Component\Form\Extension\Core\Type\RangeType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Count;
use Umbrella\CoreBundle\Form\CkeditorType;
use Umbrella\CoreBundle\Form\DatepickerType;
use Umbrella\CoreBundle\Form\UmbrellaCollectionType;

/**
 * Class FormBasicType
 */
class FormMockBasicType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $this->buildBase($builder, $options);
        $this->buildDate($builder, $options);
        $this->buildCollection($builder, $options);
        $this->buildCkeditor($builder, $options);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => FormMock::class
        ]);
    }

    private function buildBase(FormBuilderInterface $builder, array $options)
    {
        $builder->add('active', CheckboxType::class, [
            'required' => false,
            'help' => 'CustomCheckboxType (bootstrap type)',
        ]);
        $builder->add('amount', RangeType::class, [
            'help' => 'CustomRangeType (html5 type)',
        ]);
        $builder->add('color', ColorType::class, [
            'help' => 'ColorType (html5 type)',
        ]);
        $builder->add('text', TextareaType::class, [
            'help' => 'TextareaType',
            'required' => false,
            'attr' => [
                'rows' => 5,
            ],
        ]);

        $builder->add('url', TextType::class, [
            'input_prefix' => '<button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Scheme</button><div class="dropdown-menu">'
                . '<a class="dropdown-item" href="#">HTTP</a>'
                . '<a class="dropdown-item" href="#">HTTPS</a>'
                . '</div>',
            'input_suffix_text' => '.com',
            'help' => 'Input avec suffix & prefix (formExtension)',
            'required' => false,
        ]);
    }

    private function buildDate(FormBuilderInterface $builder, array $options)
    {
        $builder->add('date', DatepickerType::class, [
            'required' => false
        ]);

        $builder->add('dateTime', DatepickerType::class, [
            'required' => false,
            'enable_time' => true
        ]);
    }

    public function buildCollection(FormBuilderInterface $builder, array $options)
    {
        $builder->add('items', UmbrellaCollectionType::class, [
            'entry_type' => FormMockItemType::class,
            'sort_by' => 'order',
            'max_length' => 5,
            'constraints' => [
                new Count([
                    'min' => 1,
                    'max' => 5,
                ]),
            ],
        ]);
    }

    private function buildCkeditor(FormBuilderInterface $builder, array $options)
    {
        $builder->add('text1', CkeditorType::class, [
            'required' => false
        ]);
    }
}
