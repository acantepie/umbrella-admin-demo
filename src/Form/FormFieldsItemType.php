<?php

namespace App\Form;

use App\Entity\FormFieldsItem;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Form\DatepickerType;

class FormFieldsItemType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('label', TextType::class);
        $builder->add('description', TextType::class, [
            'required' => true
        ]);
        $builder->add('date', DatepickerType::class, [
            'required' => false
        ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => FormFieldsItem::class,
        ]);
    }
}
