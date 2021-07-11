<?php

namespace App\Menu;

use Umbrella\AdminBundle\Menu\BaseAdminMenu;
use Umbrella\CoreBundle\Menu\Builder\MenuBuilder;

class AdminMenu extends BaseAdminMenu
{
    public function buildMenu(MenuBuilder $builder)
    {
        $r = $builder->root();
        $u = $r->add('umbrella');

        $u->add('about')
            ->setIcon('mdi mdi-lifebuoy')
            ->setRoute('app_admin_default_about');

        $u->add('datatable')
            ->setIcon('uil-table')
            ->add('basic')
                ->setRoute('app_admin_datatable_basic')
                ->end()
            ->add('custom_adapter')
                ->setRoute('app_admin_datatable_customadapter')
                ->end()
            ->add('draggable')
                ->setRoute('app_admin_datatable_draggable')
                ->end()
            ->add('editable')
                ->setRoute('app_admin_datatable_editable')
                ->end()
            ->add('multiple')
                ->setRoute('app_admin_datatable_multiple')
                ->end()
            ->add('modal')
                ->setRoute('app_admin_datatable_modal')
                ->end()
            ->add('tree')
                ->setRoute('app_admin_datatable_tree')
                ->end();

        $u->add('form')
            ->setIcon('uil-document-layout-center')
            ->setRoute('app_admin_form_index');
        $u->add('js_response')
            ->setIcon('uil-exchange')
            ->setRoute('app_admin_js_index');
        $u->add('menu')
            ->setIcon('uil-bars')
            ->setRoute('app_admin_menu_index');
        $u->add('notification')
            ->setIcon('uil-bell')
            ->setRoute('app_admin_notification_index');
        $u->add('tabs')
            ->setIcon('uil-layers-alt')
            ->setRoute('app_admin_tabs_index');
        $u->add('config_reference')
            ->setIcon('mdi mdi-cogs')
            ->setRoute('app_admin_umbrellaconfig_index');

        $r->add('admin')
            ->add('users')
                ->setIcon('uil-user')
                ->setRoute('umbrella_admin_user_index');
    }
}
