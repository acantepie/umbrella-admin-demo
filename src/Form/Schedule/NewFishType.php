<?php

namespace App\Form\Schedule;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\Positive;

/**
 * Class NewFishType
 */
class NewFishType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('speciesId', NumberType::class, [
            'constraints' => new Positive(),
            'attr' => [
                'placeholder' => 'ex : 9, 58334, 972'
            ]
        ]);
    }
}
