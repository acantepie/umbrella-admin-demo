<?php

namespace App\Form;

use App\Entity\Notification;
use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Form\Entity2Type;

class NotificationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('icon', TextType::class, [
            'required' => false
        ]);
        $builder->add('title', TextType::class);
        $builder->add('text', TextareaType::class, [
            'required' => false
        ]);
        $builder->add('users', Entity2Type::class, [
            'required' => false,
            'class' => User::class,
            'multiple' => true,
            'label' => 'recipients',
            'help' => 'form.help.recipients'
        ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Notification::class
        ]);
    }
}
