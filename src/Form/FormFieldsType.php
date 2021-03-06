<?php

namespace App\Form;

use App\Entity\FormFields;
use App\Entity\SpaceMission;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ColorType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotNull;
use Umbrella\CoreBundle\Component\UmbrellaFile\Validator\Constraints\UmbrellaFileConstraint;
use Umbrella\CoreBundle\Form\AsyncEntity2Type;
use Umbrella\CoreBundle\Form\CkeditorType;
use Umbrella\CoreBundle\Form\CustomCheckboxType;
use Umbrella\CoreBundle\Form\CustomRangeType;
use Umbrella\CoreBundle\Form\DatepickerType;
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
        ]);
        $builder->add('amount', CustomRangeType::class, [
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
            'input_prefix' => '<button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Scheme</button><div class="dropdown-menu">'
                . '<a class="dropdown-item" href="#">HTTP</a>'
                . '<a class="dropdown-item" href="#">HTTPS</a>'
                . '</div>',
            'input_suffix_text' => '.com',
            'help' => 'form.help.suffix_prefix_umbrella_extension',
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
            'template_html' => '<span>[[text]]</span><br><span class="text-muted">[[detail]]</span>',
            'choice_prefix' => null,
            'multiple' => true,
            'required' => false,
            'help' => 'form.help.entity_list',
            'expose' => function ($choice) {
                return [
                    'detail' => $choice->detail,
                ];
            },
        ]);

        $builder->add('asyncMissions', AsyncEntity2Type::class, [
            'label' => 'missions',
            'class' => SpaceMission::class,
            'multiple' => true,
            'required' => false,
            'help' => 'form.help.async_list',
            'route' => 'app_admin_form_api',
            'template_html' => '<span>[[text]]</span><br><span class="text-muted">[[detail]]</span>',
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
            'help' => 'form.help.sortable_compound_collection'
        ]);

        $builder->add('strings', UmbrellaCollectionType::class, [
            'entry_type' => TextType::class,
            'required' => false,
            'help' => 'form.help.simple_collection'
        ]);
    }
}
