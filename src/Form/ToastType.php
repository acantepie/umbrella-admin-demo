<?php
/**
 * Created by PhpStorm.
 * User: acantepie
 * Date: 19/04/20
 * Time: 12:42
 */

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Component\Toast\Toast;
use Umbrella\CoreBundle\Form\CustomCheckboxType;

/**
 * Class ToastType
 */
class ToastType extends AbstractType
{
    /**
     * @inheritdoc
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('loader', CustomCheckboxType::class, array(
            'required' => false
        ));
        $builder->add('allowToastClose', CustomCheckboxType::class, array(
            'required' => false
        ));
        $builder->add('hideAfter', NumberType::class);
        $builder->add('title', TextType::class, array(
            'required' => false
        ));
        $builder->add('text', TextType::class);
        $builder->add('type', ChoiceType::class, array(
            'choices' => array(
                Toast::INFO,
                Toast::SUCCESS,
                Toast::WARNING,
                Toast::ERROR
            ),
            'choice_prefix' => null,
            'choice_label' => function ($choice) {
                return $choice;
            }
        ));
        $builder->add('position', ChoiceType::class, array(
            'choices' => array(
                Toast::BOTTOM_LEFT,
                Toast::BOTTOM_RIGHT,
                Toast::BOTTOM_CENTER,
                Toast::TOP_RIGHT,
                Toast::TOP_LEFT,
                Toast::TOP_CENTER,
                Toast::MID_CENTER
            ),
            'choice_prefix' => null,
            'choice_label' => function ($choice) {
                return $choice;
            }
        ));
    }

    /**
     * @inheritdoc
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => Toast::class
        ));
    }

}