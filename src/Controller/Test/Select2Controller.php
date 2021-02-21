<?php

namespace App\Controller\Test;

use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;
use Umbrella\CoreBundle\Form\Choice2Type;

/**
 * Class Select2Controller
 *
 * @Route("/select2")
 */
class Select2Controller extends BaseController
{
    const CASES = [
        ['required' => true],
        ['required' => true, 'placeholder' => ''],
        ['required' => true, 'placeholder' => '-- Choisissez un fruit --'],

        ['required' => false],
        ['required' => false, 'placeholder' => ''],
        ['required' => false, 'placeholder' => '-- Choisissez un fruit --'],

        ['required' => true, 'multiple' => true],
        ['required' => true, 'placeholder' => '', 'multiple' => true],
        ['required' => true, 'placeholder' => '-- Choisissez un fruit --', 'multiple' => true],

        ['required' => false, 'multiple' => true],
        ['required' => false, 'placeholder' => '', 'multiple' => true],
        ['required' => false, 'placeholder' => '-- Choisissez un fruit --', 'multiple' => true],
    ];

    /**
     * @Route("")
     */
    public function indexAction()
    {
        $fb = $this->createFormBuilder();

        foreach (self::CASES as $options) {
            $this->addSelect2($fb, $options);
        }

        return $this->render('test/select2/index.html.twig', [
            'form' => $fb->getForm()->createView()
        ]);
    }

    private function addSelect2(FormBuilderInterface $fb, array $options)
    {
        $defaultOptions['translation_domain'] = false;
        $defaultOptions['label'] = 'Fruits';
        $defaultOptions['choices'] = ['pomme', 'poire', 'kiwi', 'banane'];
        $defaultOptions['choices_as_values'] = true;
        $options = array_merge($defaultOptions, $options);

        $tags = [];
        $tags[] = isset($options['required']) && $options['required'] ? '[required] ' : '[not required] ';
        $tags[] = isset($options['multiple']) && $options['multiple'] ? '[multiple] ' : '[single] ';
        $tags[] = isset($options['placeholder']) && null !== $options['placeholder'] ? '[placeholder] ' : '[no placeholder]';
        $options['help'] = implode(' ', $tags);

        return $fb->add(md5(uniqid('', true)), Choice2Type::class, $options);
    }
}
