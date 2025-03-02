<?php

namespace App\DataTable;

use App\Entity\SpaceMissionClassification;
use App\Enum\MissionStatus;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\DataTable\Column\ActionColumnType;
use Umbrella\CoreBundle\DataTable\Column\PropertyColumnType;
use Umbrella\CoreBundle\DataTable\ColumnActionBuilder;
use Umbrella\CoreBundle\DataTable\DataTableBuilder;
use Umbrella\CoreBundle\DataTable\DataTableType;
use Umbrella\CoreBundle\DataTable\DTO\DataTable;
use Umbrella\CoreBundle\DataTable\DTO\RowView;

class SpaceMissionClassificationTableType extends DataTableType
{
    public function buildRowView(RowView $view, DataTable $dataTable, array $options): void
    {
        /** @var SpaceMissionClassification $c */
        $c = $view->source;

        // only collapse nest element
        $view->collapsed = $c->level > 1;
    }

    public function buildTable(DataTableBuilder $builder, array $options): void
    {
        $builder->add('name', PropertyColumnType::class, [
            'render_html' => function (SpaceMissionClassification $c) {
                if (SpaceMissionClassification::STATUS === $c->type) {
                    return MissionStatus::widget($c->name);
                }
                return $c->name;
            }
        ]);

        $builder->add('__action__', ActionColumnType::class, [
            'build' => function (ColumnActionBuilder $builder, SpaceMissionClassification $c) {
                $builder->moveLinks([
                    'route' => 'app_datatable_datatabletree_move',
                    'route_params' => ['id' => $c->id]
                ]);
            }
        ]);

        $builder->useNestedEntityAdapter(SpaceMissionClassification::class);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'tree' => true,
            'tree_state' => 'collapsed'
        ]);
    }
}
