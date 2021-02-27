<?php

namespace App\Form;

use App\Entity\Fish;
use App\Entity\FormFields;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ColorType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Count;
use Symfony\Component\Validator\Constraints\NotNull;
use Umbrella\CoreBundle\Component\UmbrellaFile\Validator\Constraints\UmbrellaFileConstraint;
use Umbrella\CoreBundle\Form\AsyncEntity2Type;
use Umbrella\CoreBundle\Form\Choice2Type;
use Umbrella\CoreBundle\Form\CkeditorType;
use Umbrella\CoreBundle\Form\CustomCheckboxType;
use Umbrella\CoreBundle\Form\CustomRangeType;
use Umbrella\CoreBundle\Form\DatepickerType;
use Umbrella\CoreBundle\Form\DateTimepickerType;
use Umbrella\CoreBundle\Form\Entity2Type;
use Umbrella\CoreBundle\Form\TagType;
use Umbrella\CoreBundle\Form\UmbrellaCollectionType;
use Umbrella\CoreBundle\Form\UmbrellaFileType;

/**
 * Class FormFieldsType
 */
class FormFieldsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $this->buildBase($builder, $options);
        $this->buildDate($builder, $options);
        $this->buildSelect($builder, $options);
        $this->buildFile($builder, $options);
        $this->buildCkeditor($builder, $options);
        $this->buildCollection($builder, $options);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => FormFields::class
        ]);
    }

    private function buildBase(FormBuilderInterface $builder, array $options)
    {
        $builder->add('active', CustomCheckboxType::class, [
            'required' => false,
            'help' => 'CustomCheckboxType (bootstrap type)',
        ]);
        $builder->add('amount', CustomRangeType::class, [
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

        $builder->add('dateTime', DateTimepickerType::class, [
            'required' => false
        ]);
    }

    private function buildSelect(FormBuilderInterface $builder, array $options)
    {
        $builder->add('fish', Choice2Type::class, [
            'choices' => [
                'Gardon',
                'Saumon',
                'Anguille',
                'Lamproie',
            ],
            'choices_as_values' => true,
            'choice_prefix' => null,
            'required' => false,
            'help' => 'Select2 - choices list',
            'placeholder' => 'Espece',
        ]);

        $builder->add('fishEntities', Entity2Type::class, [
            'class' => Fish::class,
            'template_html' => '<span>[[text]]</span><br><span class="text-muted">[[description]]</span>',
            'choice_prefix' => null,
            'multiple' => true,
            'required' => false,
            'help' => 'Select2 - entity list',
            'expose' => function ($choice) {
                return [
                    'description' => $choice->description,
                ];
            },
        ]);

        $builder->add('asyncFishEntities', AsyncEntity2Type::class, [
            'class' => Fish::class,
            'multiple' => true,
            'required' => false,
            'help' => 'Select2 - async loading',
            'route' => 'app_admin_form_fishapi',
            'template_html' => '<span>[[text]]</span><br><span class="text-muted">[[description]]</span>',
        ]);

        $builder->add('tags', TagType::class, [
            'required' => false
        ]);
    }

    public function buildFile(FormBuilderInterface $builder, array $options)
    {
        $builder->add('file', UmbrellaFileType::class, [
            'required' => true,
            'allow_delete' => false,
            'constraints' => new NotNull()
        ]);

        $builder->add('pdf', UmbrellaFileType::class, [
            'required' => false,
            'label_browse' => '<i class="mdi mdi-folder"></i>',
            'constraints' => new UmbrellaFileConstraint([
                'mimeTypes' => 'application/pdf',
            ])
        ]);
    }

    public function buildCkeditor(FormBuilderInterface $builder, array $options)
    {
        $builder->add('htmlText', CkeditorType::class, [
            'config_name' => 'full',
            'config' => [
                'uiColor' => '#EEF2F7',
            ]
        ]);
    }

    public function buildCollection(FormBuilderInterface $builder, array $options)
    {
        $builder->add('items', UmbrellaCollectionType::class, [
            'entry_type' => FormFieldsItemType::class,
            'sortable' => true,
            'max_length' => 5,
            'constraints' => [
                new Count([
                    'min' => 1,
                    'max' => 5,
                ]),
            ],
        ]);

        $builder->add('strings', UmbrellaCollectionType::class, [
            'entry_type' => TextType::class,
            'required' => false
        ]);
    }
}
