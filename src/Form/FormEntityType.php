<?php
/**
 * Created by PhpStorm.
 * User: acantepie
 * Date: 28/03/20
 * Time: 18:43
 */

namespace App\Form;


use App\Entity\FormEntity;
use App\Entity\FormJoinEntity;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ColorType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Form\AsyncEntity2Type;
use Umbrella\CoreBundle\Form\Choice2Type;
use Umbrella\CoreBundle\Form\CustomCheckboxType;
use Umbrella\CoreBundle\Form\CustomRangeType;
use Umbrella\CoreBundle\Form\DatepickerType;
use Umbrella\CoreBundle\Form\DateTimepickerType;
use Umbrella\CoreBundle\Form\OrderType;
use Umbrella\CoreBundle\Form\TagType;
use Umbrella\CoreBundle\Form\TitleType;
use Umbrella\CoreBundle\Form\UmbrellaCollectionType;
use Umbrella\CoreBundle\Form\UmbrellaFileType;
use Umbrella\CoreBundle\Utils\ArrayUtils;

/**
 * Class SampleType
 */
class FormEntityType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $options = array(
            'inherit_data' => true,
        );

        $builder->add('_basic', BasicBlockType::class, $options);
        $builder->add('_date', DateBlockType::class, $options);
        $builder->add('_select2', Select2BlockType::class, $options);
        $builder->add('_collection', CollectionBlockType::class, $options);
        $builder->add('_other', OtherBlockType::class, $options);
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => FormEntity::class
        ));
    }

}

class BasicBlockType extends AbstractType
{

    /**
     * @inheritdoc
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('active', CustomCheckboxType::class, array(
            'required' => false
        ));
        $builder->add('amount', CustomRangeType::class);
        $builder->add('color', ColorType::class);
        $builder->add('text', TextareaType::class);

        $builder->add('inputGroup', TextType::class, array(
            'input_prefix' => '<button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button><div class="dropdown-menu" style="">'
                . '<a class="dropdown-item" href="#">Action</a>'
                . '<a class="dropdown-item" href="#">Another action</a>'
                . '<a class="dropdown-item" href="#">Something else here</a>'
                . '</div>',
            'input_suffix_text' => '@'
        ));
    }

    /**
     * @inheritdoc
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => FormEntity::class
        ));
    }
}

class DateBlockType extends AbstractType
{

    /**
     * @inheritdoc
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('date', DatepickerType::class, array(
            'input_prefix_text' => 'Date',
            'start_date' => new \DateTime('NOW')
        ));

        $builder->add('dateTime', DateTimepickerType::class, array(
            'input_prefix_text' => 'DateTime',
            'start_date' => new \DateTime('NOW'),
        ));
    }

    /**
     * @inheritdoc
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => FormEntity::class
        ));
    }
}

class Select2BlockType extends AbstractType
{

    /**
     * @inheritdoc
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('country', Choice2Type::class, array(
            'choices' => ArrayUtils::values_as_keys(array(
                'France',
                'Espagne',
                'Angletaire',
                'Allemagne'
            )),
            'template_html' => '<b>[[text]]</b>',
            'choice_prefix' => null,
            'required' => false,
            'help' => 'single select2'

        ));
        $builder->add('regions', Choice2Type::class, array(
            'multiple' => true,
            'choices' => ArrayUtils::values_as_keys(array(
                'Normandie',
                'Bretagne',
                'Region parisienne',
            )),
            'choice_prefix' => null,
            'help' => 'multiple select2'
        ));
        $builder->add('entity', AsyncEntity2Type::class, array(
            'class' => FormJoinEntity::class,
            'route' => 'app_admin_form_get',
            'template_html' => '<span>[[text]]</span><br><span class="text-muted">[[description]]</span>',
            'help' => 'Async single select2'
        ));

        $builder->add('entities', AsyncEntity2Type::class, array(
            'multiple' => true,
            'class' => FormJoinEntity::class,
            'route' => 'app_admin_form_get',
            'template_html' => '<span>[[text]]</span><br><span class="text-muted">[[description]]</span>',
            'help' => 'Async multiple select2'
        ));

        $builder->add('tags', TagType::class, array(
            'help' => 'Tag type'
        ));
    }

    /**
     * @inheritdoc
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => FormEntity::class
        ));
    }
}

class CollectionBlockType extends AbstractType
{
    /**
     * @inheritdoc
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('collectionItems', UmbrellaCollectionType::class, array(
            'entry_type' => ItemType::class,
            'sortable' => true,
            'max_length' => 5,
            'help' => 'Max length = 5'
        ));

        $builder->add('collectionSimple', TitleType::class);

        $builder->add('collectionStrings', UmbrellaCollectionType::class, array(
            'entry_type' => TextType::class,
            'help' => 'Collection with not compound entryType'
        ));

        $builder->add('collectionFiles', UmbrellaCollectionType::class, array(
            'entry_type' => UmbrellaFileType::class
        ));
    }

    /**
     * @inheritdoc
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => FormEntity::class
        ));
    }
}

class OtherBlockType extends AbstractType
{
    /**
     * @inheritdoc
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('file', UmbrellaFileType::class);
    }

    /**
     * @inheritdoc
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => FormEntity::class
        ));
    }
}


class ItemType extends AbstractType
{

    /**
     * @inheritdoc
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('order', OrderType::class);
        $builder->add('label', TextType::class);
        $builder->add('description', TextType::class);
    }

    /**
     * @inheritdoc
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => FormJoinEntity::class
        ));
    }
}