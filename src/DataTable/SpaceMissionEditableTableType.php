<?php

namespace App\DataTable;

use App\Entity\SpaceMission;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Component\DataTable\Column\CheckBoxColumnType;
use Umbrella\CoreBundle\Component\DataTable\Column\WidgetColumnType;
use Umbrella\CoreBundle\Component\DataTable\DataTableBuilder;
use Umbrella\CoreBundle\Component\DataTable\ToolbarBuilder;
use Umbrella\CoreBundle\Component\Widget\Type\AddLinkType;
use Umbrella\CoreBundle\Component\Widget\Type\ButtonDropdownType;
use Umbrella\CoreBundle\Component\Widget\Type\LinkType;
use Umbrella\CoreBundle\Component\Widget\Type\RowDeleteLinkType;
use Umbrella\CoreBundle\Component\Widget\Type\RowEditLinkType;
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
                $builder->add('export_filtered', LinkType::class, [
                    'route' => 'app_admin_datatableaction_dumpfiltered',
                    'attr' => ['data-dt' => self::DT_FILTER]
                ]);
                $builder->add('export_selected', LinkType::class, [
                    'route' => 'app_admin_datatableaction_dumpselected',
                    'attr' => ['data-dt' => self::DT_SELECTION]
                ]);
            }
        ]);
    }

    public function buildTable(DataTableBuilder $builder, array $options)
    {
        $builder->add('select', CheckBoxColumnType::class);

        parent::buildTable($builder, $options);

        $builder->add('links', WidgetColumnType::class, [
            'build' => function (WidgetBuilder $builder, SpaceMission $s) {
                $builder->add('add', RowEditLinkType::class, [
                    'route' => 'app_admin_datatableaction_edit',
                    'route_params' => ['id' => $s->id]
                ]);

                $builder->add('delete', RowDeleteLinkType::class, [
                    'route' => 'app_admin_datatableaction_delete',
                    'route_params' => ['id' => $s->id]
                ]);
            }
        ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);
    }
}
