<?php

namespace App\Form;

use App\Entity\FormMock;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Form\CkeditorType;

class FormMockCkeditorType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('text1', CkeditorType::class);
        $builder->add('text2', CkeditorType::class, [
            'config' => 'custom'
        ]);
        $builder->add('text3', CkeditorType::class, [
            'config' => [
                'toolbar' => [
                    ['name' => 'styles', 'items' => ['Format']],
                    ['name' => 'basicstyles', 'items' => ['Bold', 'Italic', 'Strike', '-', 'RemoveFormat']],
                    ['name' => 'paragraph', 'items' => ['NumberedList', 'BulletedList']],
                    ['name' => 'links', 'items' => ['Link', 'Unlink']],
                ],
                'uiColor' => '#727CF5',
            ]
        ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefault('data_class', FormMock::class);
    }
}
