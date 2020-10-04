<?php

namespace App\Form\FormExample;

use Symfony\Component\Form\AbstractType;
use Umbrella\CoreBundle\Form\CkeditorType;
use App\Entity\FormExample\CkeditorExample;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class CkEditorExampleType
 */
class CkEditorExampleType extends AbstractType
{
    /**
     * @inheritDoc
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('text1', CkeditorType::class);
        $builder->add('text2', CkeditorType::class);
    }

    /**
     * @inheritDoc
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => CkeditorExample::class
        ]);
    }
}
