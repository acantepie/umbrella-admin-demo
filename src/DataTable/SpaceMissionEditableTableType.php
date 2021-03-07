<?php

namespace App\DataTable;

use App\Entity\SpaceMission;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Component\DataTable\Column\CheckBoxColumnType;
use Umbrella\CoreBundle\Component\DataTable\Column\LinkListColumnType;
use Umbrella\CoreBundle\Component\DataTable\DataTableBuilder;
use Umbrella\CoreBundle\Component\DataTable\ToolbarBuilder;
use Umbrella\CoreBundle\Component\UmbrellaLink\UmbrellaLinkList;
use Umbrella\CoreBundle\Component\Widget\Type\AddLinkType;
use Umbrella\CoreBundle\Component\Widget\Type\ButtonDropdownType;
use Umbrella\CoreBundle\Component\Widget\Type\LinkType;
use Umbrella\CoreBundle\Component\Widget\WidgetBuilder;

/**
 * Class SpaceMissionEditableTableType
 */
class SpaceMissionEditableTableType extends SpaceMissionTableType
{
    public function buildToolbar(ToolbarBuilder $builder, array $options)
    {
        parent::buildToolbar($builder, $options);

        $builder->addWidget('add', AddLinkType::class, [
            'route' => 'app_admin_datatableaction_edit',
            'xhr' => true
        ]);

        $builder->addWidget('export', ButtonDropdownType::class, [
            'icon' => 'mdi mdi-file-download-outline',
            'build' => function (WidgetBuilder $builder) {
                $builder->add('export_filtered', LinkType::class);
                $builder->add('export_selected', LinkType::class);
            }
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
