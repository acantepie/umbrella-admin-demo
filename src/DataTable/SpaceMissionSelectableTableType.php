<?php

namespace App\DataTable;

use App\DataTable\Column\CostColumnType;
use App\DataTable\Column\LocationColumnType;
use App\DataTable\Column\MissionStatusColumnType;
use App\DataTable\Column\RocketStatusColumnType;
use App\Entity\SpaceMission;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\DataTable\Action\ButtonActionType;
use Umbrella\CoreBundle\DataTable\Column\DateColumnType;
use Umbrella\CoreBundle\DataTable\DataTableBuilder;
use Umbrella\CoreBundle\DataTable\DataTableType;
use Umbrella\CoreBundle\Form\SearchType;

class SpaceMissionSelectableTableType extends DataTableType
{
    public function buildTable(DataTableBuilder $builder, array $options)
    {
        $builder
            ->addFilter('search', SearchType::class);

        $builder
            ->addBulkAction('edit', ButtonActionType::class, [
                'class' => 'btn btn-outline-primary',
                'icon' => 'mdi mdi-pencil me-1',
                'route' => 'app_datatable_datatableselectable_edit'
            ])
            ->addBulkAction('delete', ButtonActionType::class, [
                'class' => 'btn btn-outline-primary',
                'icon' => 'mdi mdi-delete me-1',
                'confirm' => 'Delete selection ?',
                'route' => 'app_datatable_datatableselectable_delete'
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
                    $qb->andWhere('LOWER(e.search) LIKE :search');
                    $qb->setParameter('search', '%' . $formData['search'] . '%');
                }
            }
        ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            // Enable select plugin
            'select' => self::SELECT_MULTIPLE,
        ]);
    }
}
