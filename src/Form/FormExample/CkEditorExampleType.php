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
        $builder->add('text1', CkeditorType::class, [
            'config_name' => 'full',
            'config' => [
                'uiColor' => '#EEF2F7'
            ],
            'help' => 'full config, override uiColor'
        ]);
        $builder->add('text2', CkeditorType::class, [
            'config_name' => 'custom',
            'help' => 'custom config (@see config/packages/umbrella.yaml)'
        ]);
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
