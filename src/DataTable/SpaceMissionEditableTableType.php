<?php

namespace App\DataTable;

use App\DataTable\Column\CostColumnType;
use App\DataTable\Column\LocationColumnType;
use App\DataTable\Column\StatusColumnType;
use App\Entity\SpaceMission;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\DataTable\Adapter\EntityAdapter;
use Umbrella\CoreBundle\DataTable\Column\ActionColumnType;
use Umbrella\CoreBundle\DataTable\Column\DateColumnType;
use Umbrella\CoreBundle\DataTable\ColumnActionBuilder;
use Umbrella\CoreBundle\DataTable\DataTableBuilder;
use Umbrella\CoreBundle\DataTable\DataTableType;
use Umbrella\CoreBundle\Form\SearchType;
use Umbrella\CoreBundle\Widget\Type\AddLinkType;

class SpaceMissionEditableTableType extends DataTableType
{
    public function buildTable(DataTableBuilder $builder, array $options)
    {
        $builder->addFilter('search', SearchType::class);

        $builder->addWidget('add', AddLinkType::class, [
            'route' => 'app_admin_datatableaction_edit',
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
            ->add('rocketStatus', StatusColumnType::class)
            ->add('missionStatus', StatusColumnType::class)
            ->add('__action__', ActionColumnType::class, [
                'build' => function (ColumnActionBuilder $builder, SpaceMission $s) {
                    $builder->editLink([
                        'route' => 'app_admin_datatableaction_edit',
                        'route_params' => ['id' => $s->id],
                        'xhr' => true
                    ]);

                    $builder->deleteLink([
                        'route' => 'app_admin_datatableaction_delete',
                        'route_params' => ['id' => $s->id]
                    ]);
                }
            ]);

        $builder->useAdapter(EntityAdapter::class, [
            'class' => SpaceMission::class,
            'query' => function (QueryBuilder $qb, array $formData) use ($options) {
                if (isset($formData['search'])) {
                    $qb->andWhere('LOWER(e.search) LIKE :search');
                    $qb->setParameter('search', '%' . $formData['search'] . '%');
                }

                if ($options['mission_status']) {
                    $qb->andWhere('e.missionStatus = :missionStatus');
                    $qb->setParameter('missionStatus', $options['mission_status']);
                }
            }
        ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver
            ->setDefault('mission_status', null)
            ->setAllowedTypes('mission_status', ['null', 'string']);
    }
}
