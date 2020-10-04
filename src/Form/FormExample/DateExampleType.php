<?php

namespace App\Form\FormExample;

use App\Entity\FormExample\DateExample;
use Symfony\Component\Form\AbstractType;
use Umbrella\CoreBundle\Form\DatepickerType;
use Symfony\Component\Form\FormBuilderInterface;
use Umbrella\CoreBundle\Form\DateTimepickerType;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class DateExampleType
 */
class DateExampleType extends AbstractType
{
    /**
     * @inheritDoc
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('date', DatepickerType::class, [
            'required' => false,
            'help' => 'DatePicker (bootstrap widget)'
        ]);

        $builder->add('past', DatepickerType::class, [
            'required' => false,
            'help' => 'DatePicker (bootstrap widget)',
            'start_date' => new \DateTime('today')
        ]);

        $builder->add('future', DatepickerType::class, [
            'required' => false,
            'help' => 'DatePicker (bootstrap widget)',
            'end_date' => new \DateTime('today')
        ]);

        $builder->add('dateTime', DateTimepickerType::class, [
            'required' => false,
            'help' => 'DateTimepickerType (bootstrap widget)'
        ]);
    }

    /**
     * @inheritDoc
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => DateExample::class
        ]);
    }
}
