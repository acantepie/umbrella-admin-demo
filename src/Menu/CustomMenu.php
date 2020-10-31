<?php


namespace App\Menu;

use Twig\Environment;
use Umbrella\CoreBundle\Component\Menu\MenuFactory;
use Umbrella\CoreBundle\Component\Menu\Model\Breadcrumb;
use Umbrella\CoreBundle\Component\Menu\Model\Menu;

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

        $nav = $menu->getRoot()->addChild('nav', [
            'label' => 'Navigation'
        ]);
        $nav->addChild('dashboard', [
            'label' => 'Dashboards',
            'icon' => 'uil-home-alt'
        ]);

        $app = $menu->getRoot()->addChild('apps', [
            'label' => 'Apps'
        ]);
        $multiLvl = $app->addChild('multi_level', [
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

    /**
     * @param Breadcrumb $breadcrumb
     * @return string
     */
    public function renderBreadcrumb(Breadcrumb $breadcrumb)
    {
        return $this->twig->render('menu/_custom_breadcrumb.html.twig', [
            'breadcrumb' => $breadcrumb,
        ]);
    }





}