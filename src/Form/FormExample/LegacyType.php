<?php
/**
 * Created by PhpStorm.
 * User: acantepie
 * Date: 28/03/20
 * Time: 18:43
 */

namespace App\Form\FormExample;

use App\Entity\FormJoinEntity;
use Umbrella\CoreBundle\Form\OrderType;
use Umbrella\CoreBundle\Form\TitleType;
use Symfony\Component\Form\AbstractType;
use Umbrella\CoreBundle\Form\UmbrellaFileType;
use Symfony\Component\Form\FormBuilderInterface;
use Umbrella\CoreBundle\Form\UmbrellaCollectionType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;

/**
 * Class SampleType
 */
class LegacyType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $options = [
            'inherit_data' => true,
        ];

        $builder->add('_collection', CollectionBlockType::class, $options);
        $builder->add('_other', OtherBlockType::class, $options);
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => FormEntity::class
        ]);
    }
}

class CollectionBlockType extends AbstractType
{
    /**
     * @inheritdoc
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('collectionItems', UmbrellaCollectionType::class, [
            'entry_type' => ItemType::class,
            'sortable' => true,
            'max_length' => 5,
            'help' => 'Max length = 5'
        ]);

        $builder->add('collectionSimple', TitleType::class);

        $builder->add('collectionStrings', UmbrellaCollectionType::class, [
            'entry_type' => TextType::class,
            'help' => 'Collection with not compound entryType'
        ]);

        $builder->add('collectionFiles', UmbrellaCollectionType::class, [
            'entry_type' => UmbrellaFileType::class
        ]);
    }

    /**
     * @inheritdoc
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => FormEntity::class
        ]);
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
        $resolver->setDefaults([
            'data_class' => FormEntity::class
        ]);
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
        $resolver->setDefaults([
            'data_class' => FormJoinEntity::class
        ]);
    }
}
