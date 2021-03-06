<?php

namespace App\DataTable;

use App\Entity\SpaceMission;
use App\Entity\SpaceMissionClassification;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\DataTable\Column\PropertyColumnType;
use Umbrella\CoreBundle\DataTable\Column\WidgetColumnType;
use Umbrella\CoreBundle\DataTable\DataTableBuilder;
use Umbrella\CoreBundle\DataTable\DataTableType;
use Umbrella\CoreBundle\Widget\Type\RowMoveLinkType;
use Umbrella\CoreBundle\Widget\WidgetBuilder;

class SpaceMissionClassificationTableType extends DataTableType
{
    public function buildTable(DataTableBuilder $builder, array $options)
    {
        $builder->add('name', PropertyColumnType::class, [
            'render' => function (SpaceMissionClassification $c) {
                if (SpaceMissionClassification::STATUS === $c->type) {
                    return SpaceMission::getIconStatus($c->name);
                }

                return $c->name;
            },
            'is_safe_html' => true
        ]);

        $builder->add('links', WidgetColumnType::class, [
            'build' => function (WidgetBuilder $builder, SpaceMissionClassification $c) {
                $builder->add('move', RowMoveLinkType::class, [
                    'route' => 'app_admin_datatableaction_move',
                    'route_params' => ['id' => $c->id],
                    'disable_moveup' => $c->isFirstChild(),
                    'disable_movedown' => $c->isLastChild()
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
