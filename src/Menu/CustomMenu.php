<?php


namespace App\Menu;

use Symfony\Component\Yaml\Yaml;
use Twig\Environment;
use Umbrella\CoreBundle\Component\Menu\MenuFactory;
use Umbrella\CoreBundle\Component\Menu\Model\Menu;
use Umbrella\CoreBundle\Component\Menu\Model\MenuItem;

/**
 * Class CustomMenu
 */
class CustomMenu
{
    /**
     * @var Environment
     */
    protected $twig;

    /**
     * CustomMenu constructor.
     * @param Environment $twig
     */
    public function __construct(Environment $twig)
    {
        $this->twig = $twig;
    }

    /**
     * @param MenuFactory $factory
     * @return Menu
     */
    public function createMenu(MenuFactory $factory)
    {
        $menu = $factory->createMenu();

        $menu->getRoot()->addChild('nav', [
            'label' => 'Navigation',
            'type' => MenuItem::TYPE_TITLE
        ]);
        $menu->getRoot()->addChild('dashboard', [
            'label' => 'Dashboards',
            'icon' => 'uil-home-alt'
        ]);
        $menu->getRoot()->addChild('apps', [
            'label' => 'Apps',
            'type' => MenuItem::TYPE_TITLE
        ]);

        $multiLvl = $menu->getRoot()->addChild('multi_level', [
            'label' => 'Multi Level',
            'icon' => 'uil-folder-plus'
        ]);
        $secondLvl = $multiLvl->addChild('second_level', [
            'label' => 'Second Level'
        ]);
        $secondLvl->addChild('item1', [
            'label' => 'Item 1'
        ]);
        $secondLvl->addChild('item2', [
            'label' => 'Item 2'
        ]);

        $thirdLvl = $multiLvl->addChild('third_level', [
            'label' => 'Third Level'
        ]);
        $thirdLvl->addChild('item1', [
            'label' => 'Item 1'
        ]);
        $thirdLvl->addChild('item2', [
            'label' => 'Item 2'
        ]);

        return $menu;
    }

    /**
     * @param Menu $menu
     * @return string
     */
    public function renderMenu(Menu $menu)
    {
       return $this->twig->render('menu/_custom_menu.html.twig', [
           'menu' => $menu,
       ]);
    }





}