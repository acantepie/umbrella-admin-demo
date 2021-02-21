<?php

namespace App\Form;

use App\Entity\FishCategory;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Form\NestedTreeParentType;

/**
 * Class FishCategoryType
 */
class FishCategoryType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('name', TextType::class);
        $builder->add('description', TextareaType::class, [
            'required' => false,
            'attr' => [
                'rows' => 8,
            ],
        ]);
        $builder->add('parent', NestedTreeParentType::class, [
            'class' => FishCategory::class,
            'current_node' => $builder->getData(),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => FishCategory::class,
        ]);
    }
}
