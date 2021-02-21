<?php

namespace App\Form\FormExample;

use App\Entity\FormExample\FileExample;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotNull;
use Umbrella\CoreBundle\Component\UmbrellaFile\Validator\Constraints\UmbrellaFileConstraint;
use Umbrella\CoreBundle\Form\UmbrellaFileType;

/**
 * Class BaseExampleType
 */
class FileExampleType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('file', UmbrellaFileType::class, [
            'required' => true,
            'allow_delete' => false,
            'constraints' => new NotNull()
        ]);

        $builder->add('pdf', UmbrellaFileType::class, [
            'required' => false,
            'label_browse' => '<i class="mdi mdi-folder"></i>',
            'constraints' => new UmbrellaFileConstraint([
                'mimeTypes' => 'application/pdf',
            ]),
            'help' => 'With mimeType constraint'
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => FileExample::class,
        ]);
    }
}
