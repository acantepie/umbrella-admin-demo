<?php

namespace App\Form;

use App\Entity\AdminNotification;
use App\Entity\AdminUser;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AdminNotificationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->add('title', TextType::class);
        $builder->add('text', TextareaType::class, [
            'required' => false
        ]);
        $builder->add('users', EntityType::class, [
            'required' => false,
            'class' => AdminUser::class,
            'multiple' => true,
            'label' => 'Recipients',
            'help' => 'Will be sent to all if no recipient specified.',
            'ub_autocomplete' => true
        ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => AdminNotification::class
        ]);
    }
}
