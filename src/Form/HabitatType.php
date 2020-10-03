<?php

namespace App\Form;

use App\Entity\Fish;
use Symfony\Component\Form\AbstractType;
use Umbrella\CoreBundle\Form\Choice2Type;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class HabitatType
 */
class HabitatType extends AbstractType
{
    /**
     * @inheritDoc
     */
    public function getParent()
    {
        return Choice2Type::class;
    }

    /**
     * @inheritDoc
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'required' => false,
            'multiple' => true,
            'choices' => [
                Fish::HABITAT_SEA,
                Fish::HABITAT_RIVER,
                Fish::HABITAT_LAKE
            ],
            'choice_label' => function ($c) {
                return $c;
            },
            'choice_prefix' => 'fish.habitat.'
        ]);
    }
}
