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
            ->icon('mdi mdi-lifebuoy')
            ->route('app_admin_default_about');

        $u->add('datatable')
            ->icon('uil-table')
            ->add('basic')
                ->route('app_admin_datatable_basic')
                ->end()
            ->add('custom_adapter')
                ->route('app_admin_datatable_customadapter')
                ->end()
            ->add('draggable')
                ->route('app_admin_datatable_draggable')
                ->end()
            ->add('editable')
                ->route('app_admin_datatable_editable')
                ->end()
            ->add('multiple')
                ->route('app_admin_datatable_multiple')
                ->end()
            ->add('modal')
                ->route('app_admin_datatable_modal')
                ->end()
            ->add('tree')
                ->route('app_admin_datatable_tree')
                ->end();

        $u->add('form')
            ->icon('uil-document-layout-center')
            ->route('app_admin_form_index');
        $u->add('js_response')
            ->icon('uil-exchange')
            ->route('app_admin_js_index');
        $u->add('menu')
            ->icon('uil-bars')
            ->route('app_admin_menu_index');
        $u->add('notification')
            ->icon('uil-bell')
            ->route('app_admin_notification_index');
        $u->add('tabs')
            ->icon('uil-layers-alt')
            ->route('app_admin_tabs_index');
        $u->add('config_reference')
            ->icon('mdi mdi-cogs')
            ->route('app_admin_umbrellaconfig_index');

        $r->add('admin')
            ->add('users')
                ->icon('uil-user')
                ->route('umbrella_admin_user_index');
    }
}
