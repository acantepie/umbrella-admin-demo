<?php

namespace App\DataTable;

use App\Entity\SpaceMission;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Component\DataTable\Action\ActionType;
use Umbrella\CoreBundle\Component\DataTable\Action\AddActionType;
use Umbrella\CoreBundle\Component\DataTable\Action\DropdownActionType;
use Umbrella\CoreBundle\Component\DataTable\Action\DropdownItemActionType;
use Umbrella\CoreBundle\Component\DataTable\Column\CheckBoxColumnType;
use Umbrella\CoreBundle\Component\DataTable\Column\LinkListColumnType;
use Umbrella\CoreBundle\Component\DataTable\DataTableBuilder;
use Umbrella\CoreBundle\Component\DataTable\ToolbarBuilder;
use Umbrella\CoreBundle\Component\UmbrellaLink\UmbrellaLinkList;

/**
 * Class SpaceMissionEditableTableType
 */
class SpaceMissionEditableTableType extends SpaceMissionTableType
{
    public function buildToolbar(ToolbarBuilder $builder, array $options)
    {
        parent::buildToolbar($builder, $options);

        $builder->addAction('add', AddActionType::class, [
            'route' => 'app_admin_datatableaction_edit',
            'xhr' => true
        ]);

        $builder->addAction('export', DropdownActionType::class, [
            'icon' => 'mdi mdi-file-download-outline'
        ]);

        $builder->addChildAction('export', 'export_filtered', DropdownItemActionType::class, [
            'route' => 'app_admin_datatableaction_dumpfiltered',
            'extra_data' => ActionType::DATA_DATATABLE_FILTER
        ]);

        $builder->addChildAction('export', 'export_selected', DropdownItemActionType::class, [
            'route' => 'app_admin_datatableaction_dumpselected',
            'extra_data' => ActionType::DATA_DATATABLE_SELECTION,
        ]);
    }

    public function buildTable(DataTableBuilder $builder, array $options)
    {
        $builder->add('select', CheckBoxColumnType::class);

        parent::buildTable($builder, $options);

        $builder->add('actions', LinkListColumnType::class, [
            'link_builder' => function (UmbrellaLinkList $linkList, SpaceMission $s) {
                $linkList->addXhrEdit('app_admin_datatableaction_edit', ['id' => $s->id]);
                $linkList->addXhrDelete('app_admin_datatableaction_delete', ['id' => $s->id]);
            },
        ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);
    }
}
