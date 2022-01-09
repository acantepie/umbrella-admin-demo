<?php

namespace App\DataTable;

use App\DataTable\Column\CostColumnType;
use App\DataTable\Column\LocationColumnType;
use App\DataTable\Column\MissionStatusColumnType;
use App\DataTable\Column\RocketStatusColumnType;
use App\Entity\SpaceMission;
use App\Form\Base\MissionStatusChoiceType;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\DataTable\Action\ButtonActionType;
use Umbrella\CoreBundle\DataTable\Column\DateColumnType;
use Umbrella\CoreBundle\DataTable\DataTableBuilder;
use Umbrella\CoreBundle\DataTable\DataTableType;
use Umbrella\CoreBundle\Form\SearchType;

class SpaceMissionExportableTableType extends DataTableType
{
    public function buildTable(DataTableBuilder $builder, array $options)
    {
        $builder
            ->addFilter('search', SearchType::class)
            ->addFilter('missionStatus', MissionStatusChoiceType::class, [
                'required' => false,
                'placeholder' => 'Mission status'
            ]);

        $builder
            ->addAction('export', ButtonActionType::class, [
                'send_state' => true,
                'icon' => 'mdi mdi-export me-1',
                'route' => 'app_datatable_datatableexportable_exportconfirm'
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

                if (isset($formData['missionStatus'])) {
                    $qb->andWhere('e.missionStatus = :missionStatus');
                    $qb->setParameter('missionStatus', $formData['missionStatus']);
                }
            }
        ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver
            ->setDefault('select', self::SELECT_MULTIPLE);
    }
}
