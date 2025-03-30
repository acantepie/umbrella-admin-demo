<?php

namespace App\DataTable;

use App\DataTable\Column\CostColumnType;
use App\DataTable\Column\LocationColumnType;
use App\DataTable\Column\MissionStatusColumnType;
use App\DataTable\Column\RocketStatusColumnType;
use App\Entity\SpaceMission;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\AdminBundle\Lib\DataTable\Action\ButtonActionType;
use Umbrella\AdminBundle\Lib\DataTable\Column\DateColumnType;
use Umbrella\AdminBundle\Lib\DataTable\DataTableBuilder;
use Umbrella\AdminBundle\Lib\DataTable\DataTableType;
use Umbrella\AdminBundle\Lib\Form\SearchType;
use Umbrella\AdminBundle\Utils\DoctrineUtils;

class SpaceMissionSelectableTableType extends DataTableType
{
    public function buildTable(DataTableBuilder $builder, array $options): void
    {
        $builder
            ->addFilter('search', SearchType::class);

        $builder
            ->addAction('edit', ButtonActionType::class, [
                'class' => 'btn btn-outline-primary',
                'icon' => 'mdi mdi-pencil me-1',
                'route' => 'app_datatable_datatableselectable_edit',
                'send_state' => true,
                'display' => 'selection'
            ])
            ->addAction('delete', ButtonActionType::class, [
                'class' => 'btn btn-outline-primary',
                'icon' => 'mdi mdi-delete me-1',
                'confirm' => 'Delete selection ?',
                'route' => 'app_datatable_datatableselectable_delete',
                'send_state' => true,
                'display' => 'selection'
            ]);

        $builder
            ->add('date', DateColumnType::class, [
                'order' => 'DESC',
                'format' => 'd M Y'
            ])
            ->add('companyName')
            ->add('location', LocationColumnType::class)
            ->add('detail')
            ->add('cost', CostColumnType::class)
            ->add('rocketStatus', RocketStatusColumnType::class)
            ->add('missionStatus', MissionStatusColumnType::class);

        $builder->useEntityAdapter([
            'class' => SpaceMission::class,
            'query' => function (QueryBuilder $qb, array $formData) {
                if (isset($formData['search'])) {
                    DoctrineUtils::matchAll($qb, ['e.companyName', 'e.location', 'e.detail'], $formData['search']);
                }
            }
        ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'class' => 'table-striped',
            // Enable select plugin
            'selectable' => true,
        ]);
    }
}
