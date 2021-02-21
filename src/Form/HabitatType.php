<?php

namespace App\Form;

use App\Entity\Fish;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Form\Choice2Type;

/**
 * Class HabitatType
 */
class HabitatType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function getParent()
    {
        return Choice2Type::class;
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'required' => false,
            'multiple' => true,
            'choices' => [
                Fish::HABITAT_SEA,
                Fish::HABITAT_RIVER,
                Fish::HABITAT_LAKE,
            ],
            'choices_as_values' => true,
            'choice_prefix' => 'fish.habitat.',
        ]);
    }
}
