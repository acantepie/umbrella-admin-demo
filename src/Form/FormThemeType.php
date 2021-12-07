<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FormType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Umbrella\CoreBundle\Form\DatepickerType;

class FormThemeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $d = $builder->create('default', FormType::class)
            ->add('text', TextType::class)
            ->add('date', DatepickerType::class);
        $builder->add($d);

        $h = $builder->create('horizontal', FormType::class)
            ->add('text', TextType::class)
            ->add('date', DatepickerType::class);
        $builder->add($h);
    }
}
