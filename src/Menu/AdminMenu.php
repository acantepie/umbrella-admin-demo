<?php

namespace App\Menu;

use Symfony\Component\Security\Core\Security;
use Twig\Environment;
use Umbrella\AdminBundle\Menu\BaseAdminMenu;
use Umbrella\AdminBundle\UmbrellaAdminConfiguration;
use Umbrella\CoreBundle\Menu\Builder\MenuBuilder;

class AdminMenu extends BaseAdminMenu
{
    private Security $security;

    /**
     * AdminMenu constructor.
     */
    public function __construct(Security $security, Environment $twig, UmbrellaAdminConfiguration $configuration)
    {
        $this->security = $security;
        parent::__construct($twig, $configuration);
    }

    public function buildMenu(MenuBuilder $builder)
    {
        $r = $builder->root();

        $r->add('about')
            ->icon('uil-home')
            ->route('app_admin_default_about');

        $r->add('datatable')
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

        $r->add('form')
            ->icon('uil-document-layout-center')
            ->add('basic')
                ->route('app_admin_form_basic')
                ->end()
            ->add('select2')
                ->route('app_admin_form_select2');

        $r->add('js_response')
            ->icon('uil-exchange')
            ->route('app_admin_js_index');
        $r->add('menu')
            ->icon('uil-bars')
            ->route('app_admin_menu_index');
        $r->add('notification')
            ->icon('uil-bell')
            ->route('app_admin_notification_index');
        $r->add('tabs')
            ->icon('uil-layers-alt')
            ->route('app_admin_tabs_index');
        $r->add('config_reference')
            ->icon('uil-cog')
            ->route('app_admin_umbrellaconfig_index');

        $r->add('pages')
            ->icon('uil-layers')
            ->add('login')
                ->route('umbrella_admin_login')
                ->end()
            ->add('reset password')
                ->route('umbrella_admin_security_passwordrequest')
                ->end();

        if ($this->security->getUser()) {
            $r->get('pages')
                ->add('my profile')
                    ->route('umbrella_admin_profile_index');
        }

        $r->add('admin')
            ->icon('uil-shield-plus')
            ->add('users')
                ->badge('crud')
                ->route('umbrella_admin_user_index');
    }
}
