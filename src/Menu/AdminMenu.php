<?php

namespace App\Menu;

use Symfony\Component\Security\Core\Security;
use Twig\Environment;
use Umbrella\AdminBundle\Menu\BaseAdminMenu;
use Umbrella\AdminBundle\UmbrellaAdminConfiguration;
use Umbrella\CoreBundle\Menu\Builder\MenuBuilder;

class AdminMenu extends BaseAdminMenu
{
    /**
     * AdminMenu constructor.
     */
    public function __construct(private Security $security, Environment $twig, UmbrellaAdminConfiguration $configuration)
    {
        parent::__construct($twig, $configuration);
    }

    public function buildMenu(MenuBuilder $builder, array $options)
    {
        $r = $builder->root();

        $r->add('documentation')
            ->icon('uil-book-reader')
            ->url('https://acantepie.github.io/umbrella')
            ->target('_blank');

        $r->add('components');

        $r->add('datatable')
            ->icon('uil-th')
            ->add('basic')
                ->route('app_datatable_datatablebasic_index')
                ->end()
            ->add('custom_adapter')
                ->route('app_datatable_datatablecustomadapter_index')
                ->end()
            ->add('editable')
                ->route('app_datatable_datatableeditable_index')
                ->end()
            ->add('selectable')
                ->label('Selectable / Bulk edition')
                ->route('app_datatable_datatableselectable_index')
                ->end()
            ->add('exportable')
                ->route('app_datatable_datatableexportable_index')
                ->end()
            ->add('multiple')
                ->route('app_datatable_datatablemultiple_index')
                ->end()
            ->add('modal')
                ->route('app_datatable_datatablemodal_index')
                ->end()
            ->add('tree')
                ->route('app_datatable_datatabletree_index')
                ->end();

        $r->add('form')
            ->icon('uil-check-square')
            ->add('common')
                ->route('app_form_common')
                ->end()
            ->add('advanced_select')
                ->route('app_form_select');

        $r->add('js_response')
            ->icon('uil-exchange')
            ->route('app_js_index');
        $r->add('notification')
            ->icon('mdi mdi-bell-outline')
            ->route('app_notification_index');

        $r->add('pages');

        $r->add('login')
            ->route('umbrella_admin_login')
            ->icon('uil-layers');
        $r->add('reset password')
            ->route('umbrella_admin_security_passwordrequest')
            ->icon('uil-layers');

        if ($this->security->getUser()) {
            $r->add('my account')
                ->route('umbrella_admin_profile_index')
                ->icon('uil-layers');
        }

        $r->add('crud');

        $r->add('users')
            ->icon('uil uil-user')
            ->route('umbrella_admin_user_index');
    }
}
