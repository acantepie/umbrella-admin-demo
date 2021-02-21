<?php

namespace App\Menu;

use Twig\Environment;
use Umbrella\CoreBundle\Component\Menu\MenuBuilder;
use Umbrella\CoreBundle\Component\Menu\Model\Breadcrumb;
use Umbrella\CoreBundle\Component\Menu\Model\Menu;
use Umbrella\CoreBundle\Utils\ArrayUtils;

/**
 * Class CustomMenu
 */
class CustomMenu
{
    protected Environment $twig;

    /**
     * CustomMenu constructor.
     */
    public function __construct(Environment $twig)
    {
        $this->twig = $twig;
    }

    public function createMenu(MenuBuilder $builder): Menu
    {
        $builder
            ->setMatchRule(':nested_3')
            ->root()
            ->add('menu')
                ->add('home')
                    ->setLabel('Home')
                    ->setIcon('uil-home')
                    ->end()
                ->add('nested')
                    ->setLabel('Nested')
                    ->setIcon('uil-folder-plus')
                    ->add('nested_2')
                        ->setLabel('[2]')
                        ->end()
                    ->add('nested_3')
                        ->setLabel('[3]')
                        ->add('nested_3_1')
                            ->setLabel('[3] > 1')
                            ->end()
                        ->add('nested_3_2')
                            ->setLabel('[3] > 2')
                            ->end();

        return $builder->getMenu();
    }

    public function renderMenu(Menu $menu, array $parameters = []): string
    {
        return $this->twig->render('admin/menu/_custom_menu.html.twig', [
           'menu' => $menu,
       ]);
    }

    public function renderBreadcrumb(Breadcrumb $breadcrumb, array $parameters = []): string
    {
        return $this->twig->render('admin/menu/_custom_breadcrumb.html.twig', [
            'breadcrumb' => $breadcrumb,
            'class' => ArrayUtils::get($parameters, 'class'),
        ]);
    }
}
