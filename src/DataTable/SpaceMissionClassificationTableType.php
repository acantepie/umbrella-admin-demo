<?php

namespace App\DataTable;

use App\Entity\SpaceMission;
use App\Entity\SpaceMissionClassification;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Component\DataTable\Column\PropertyColumnType;
use Umbrella\CoreBundle\Component\DataTable\Column\WidgetColumnType;
use Umbrella\CoreBundle\Component\DataTable\DataTableBuilder;
use Umbrella\CoreBundle\Component\DataTable\DataTableType;
use Umbrella\CoreBundle\Component\Widget\Type\RowMoveDownLinkType;
use Umbrella\CoreBundle\Component\Widget\Type\RowMoveUpLinkType;
use Umbrella\CoreBundle\Component\Widget\WidgetBuilder;

class SpaceMissionClassificationTableType extends DataTableType
{
    public function buildTable(DataTableBuilder $builder, array $options)
    {
        $builder->add('name', PropertyColumnType::class, [
            'renderer' => function (SpaceMissionClassification $c) {
                if (SpaceMissionClassification::STATUS === $c->type) {
                    return SpaceMission::getIconStatus($c->name);
                }

                return $c->name;
            },
            'is_safe_html' => true
        ]);

        $builder->add('links', WidgetColumnType::class, [
            'build' => function (WidgetBuilder $builder, SpaceMissionClassification $c) {
                if (!$c->_isFirstChild()) {
                    $builder->add('up', RowMoveUpLinkType::class, [
                        'route' => 'app_admin_datatableaction_move',
                        'route_params' => ['id' => $c->id, 'direction' => 'up'],
                    ]);
                }

                if (!$c->_isLastChild()) {
                    $builder->add('down', RowMoveDownLinkType::class, [
                        'route' => 'app_admin_datatableaction_move',
                        'route_params' => ['id' => $c->id, 'direction' => 'down'],
                    ]);
                }
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
