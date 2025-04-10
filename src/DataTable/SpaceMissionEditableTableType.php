<?php

namespace App\DataTable;

use App\DataTable\Column\CostColumnType;
use App\DataTable\Column\LocationColumnType;
use App\DataTable\Column\MissionStatusColumnType;
use App\DataTable\Column\RocketStatusColumnType;
use App\Entity\SpaceMission;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\AdminBundle\Lib\DataTable\Action\ButtonAddActionType;
use Umbrella\AdminBundle\Lib\DataTable\Column\ActionColumnType;
use Umbrella\AdminBundle\Lib\DataTable\Column\DateColumnType;
use Umbrella\AdminBundle\Lib\DataTable\ColumnActionBuilder;
use Umbrella\AdminBundle\Lib\DataTable\DataTableBuilder;
use Umbrella\AdminBundle\Lib\DataTable\DataTableType;
use Umbrella\AdminBundle\Lib\Form\SearchType;
use Umbrella\AdminBundle\Utils\DoctrineUtils;

class SpaceMissionEditableTableType extends DataTableType
{
    public function buildTable(DataTableBuilder $builder, array $options): void
    {
        $builder->addFilter('search', SearchType::class);

        $builder->addAction('add', ButtonAddActionType::class, [
            'route' => 'app_datatable_datatableeditable_edit',
            'xhr' => true
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
            ->add('missionStatus', MissionStatusColumnType::class)
            ->add('__action__', ActionColumnType::class, [
                'build' => function (ColumnActionBuilder $builder, SpaceMission $s) {
                    $builder->editLink([
                        'route' => 'app_datatable_datatableeditable_edit',
                        'route_params' => ['id' => $s->id],
                        'xhr' => true
                    ]);

                    $builder->deleteLink([
                        'route' => 'app_datatable_datatableeditable_delete',
                        'route_params' => ['id' => $s->id]
                    ]);
                }
            ]);

        $builder->useEntityAdapter([
            'class' => SpaceMission::class,
            'query' => function (QueryBuilder $qb, array $formData) use ($options) {
                if (isset($formData['search'])) {
                    DoctrineUtils::matchAll($qb, ['e.companyName', 'e.location', 'e.detail'], $formData['search']);
                }

                if ($options['mission_status']) {
                    $qb->andWhere('e.missionStatus = :missionStatus');
                    $qb->setParameter('missionStatus', $options['mission_status']);
                }
            }
        ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver
            ->setDefault('class', 'table-striped')
            ->setDefault('mission_status', null)
            ->setAllowedTypes('mission_status', ['null', 'string']);
    }
}
