<?php

namespace App\Form\FormExample;

use App\Entity\FormExample\CollectionExample;
use App\Entity\FormExample\CollectionItemExample;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Count;
use Umbrella\CoreBundle\Form\OrderType;
use Umbrella\CoreBundle\Form\UmbrellaCollectionType;
use Umbrella\CoreBundle\Form\UmbrellaFileType;

/**
 * Class CollectionExampleType
 */
class CollectionExampleType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('items', UmbrellaCollectionType::class, [
            'entry_type' => ItemType::class,
            'sortable' => true,
            'max_length' => 5,
            'help' => 'Min length = 1, Max length = 5, orderable',
            'constraints' => [
                new Count([
                    'min' => 1,
                    'max' => 5,
                ]),
            ],
        ]);

        $builder->add('strings', UmbrellaCollectionType::class, [
            'entry_type' => TextType::class,
            'help' => 'Collection with not compound entryType',
        ]);

        $builder->add('files', UmbrellaCollectionType::class, [
            'entry_type' => UmbrellaFileType::class,
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => CollectionExample::class,
        ]);
    }
}

class ItemType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('order', OrderType::class);
        $builder->add('label', TextType::class);
        $builder->add('description', TextType::class);
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => CollectionItemExample::class,
        ]);
    }
}
