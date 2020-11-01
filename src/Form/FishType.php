<?php

namespace App\Form;

use App\Entity\Fish;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ColorType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Form\CustomCheckboxType;

/**
 * Class FishType
 */
class FishType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('name', TextType::class);
        $builder->add('description', TextareaType::class, [
            'attr' => [
                'rows' => 8,
            ],
        ]);
        $builder->add('color', ColorType::class);
        $builder->add('edible', CustomCheckboxType::class, [
            'required' => false,
        ]);
        $builder->add('habitats', HabitatType::class);
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefault('data_class', Fish::class);
    }
}
