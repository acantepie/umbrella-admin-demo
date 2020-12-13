<?php

namespace App\Form\FormExample;

use App\Entity\FormExample\BaseExample;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ColorType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Form\CustomCheckboxType;
use Umbrella\CoreBundle\Form\CustomRangeType;

/**
 * Class BaseExampleType
 */
class BaseExampleType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('active', CustomCheckboxType::class, [
            'required' => false,
            'help' => 'CustomCheckboxType (bootstrap type)',
        ]);
        $builder->add('amount', CustomRangeType::class, [
            'help' => 'CustomRangeType (html5 type)',
        ]);
        $builder->add('color', ColorType::class, [
            'help' => 'ColorType (html5 type)',
        ]);
        $builder->add('text', TextareaType::class, [
            'help' => 'TextareaType',
            'required' => false,
            'attr' => [
                'rows' => 5,
            ],
        ]);

        $builder->add('url', TextType::class, [
            'input_prefix' => '<button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Scheme</button><div class="dropdown-menu">'
                . '<a class="dropdown-item" href="#">HTTP</a>'
                . '<a class="dropdown-item" href="#">HTTPS</a>'
                . '</div>',
            'input_suffix_text' => '.com',
            'help' => 'Input avec suffix & prefix (formExtension)',
            'required' => false,
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => BaseExample::class,
        ]);
    }
}
