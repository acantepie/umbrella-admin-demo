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

class SpaceMissionClassificationTableType extends DataTableType
{
    public function buildTable(DataTableBuilder $builder, array $options)
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

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'tree' => true,
            'tree_state' => 'collapsed'
        ]);
    }
}
