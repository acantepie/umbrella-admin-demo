<?php

namespace App\Form;

use App\Entity\FormFields;
use App\Entity\SpaceMission;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ColorType;
use Symfony\Component\Form\Extension\Core\Type\RangeType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Image;
use Umbrella\CoreBundle\Form\AutocompleteType;
use Umbrella\CoreBundle\Form\CkeditorType;
use Umbrella\CoreBundle\Form\DatepickerType;
use Umbrella\CoreBundle\Form\Entity2Type;
use Umbrella\CoreBundle\Form\UmbrellaCollectionType;
use Vich\UploaderBundle\Form\Type\VichFileType;

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
        $builder->add('active', CheckboxType::class, [
            'required' => false,
        ]);
        $builder->add('amount', RangeType::class, [
        ]);
        $builder->add('color', ColorType::class, [
        ]);
        $builder->add('text', TextareaType::class, [
            'required' => false,
            'attr' => [
                'rows' => 5,
            ],
        ]);

        $builder->add('url', TextType::class, [
            'input_prefix' => '<button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Scheme</button><div class="dropdown-menu">'
                . '<a class="dropdown-item" href="#">HTTP</a>'
                . '<a class="dropdown-item" href="#">HTTPS</a>'
                . '</div>',
            'input_suffix_text' => '.com',
            'help' => 'With suffix and prefix Umbrella FormExtension',
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

    private function buildSelect(FormBuilderInterface $builder, array $options)
    {
        $builder->add('missions', Entity2Type::class, [
            'class' => SpaceMission::class,
            'query_builder' => function (EntityRepository $er) {
                return $er
                    ->createQueryBuilder('e')
                    ->setMaxResults(100);
            },
            'template' => '<span>[[text]]</span><br><span class="text-muted">[[detail]]</span>',
            'multiple' => true,
            'required' => false,
            'help' => 'Entity2Type - select2.js',
            'choice_attr' => function ($choice) {
                return [
                    'data-detail' => $choice->detail,
                ];
            },
        ]);

        $builder->add('asyncMissions', AutocompleteType::class, [
            'label' => 'Missions',
            'class' => SpaceMission::class,
            'multiple' => true,
            'required' => false,
            'help' => 'AutocompleteType - select2.js - async loading',
            'route' => 'app_admin_form_api',
            'template' => '<span>[[text]]</span><br><span class="text-muted">[[detail]]</span>',
        ]);
    }

    public function buildFile(FormBuilderInterface $builder, array $options)
    {
        $builder->add('image', VichFileType::class, [
            'required' => false,
            'constraints' => new Image()
        ]);
    }

    public function buildCkeditor(FormBuilderInterface $builder, array $options)
    {
        $builder->add('htmlText', CkeditorType::class, [
            // 'config' => 'full' | 'minimal'
            'config' => [
                'uiColor' => '#EEF2F7',
            ],
        ]);
    }

    public function buildCollection(FormBuilderInterface $builder, array $options)
    {
        $builder->add('items', UmbrellaCollectionType::class, [
            'entry_type' => FormFieldsItemType::class,
            'sortable' => true,
            'help' => 'Sortable collection with compound FormType'
        ]);

        $builder->add('strings', UmbrellaCollectionType::class, [
            'entry_type' => TextType::class,
            'required' => false,
            'help' => 'Collection with simple FormType'
        ]);
    }
}
