<?php

namespace App\DataTable;

use App\DataTable\Column\RocketStatusColumnType;
use App\Entity\SpaceMission;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\DataTable\Column\ActionColumnType;
use Umbrella\CoreBundle\DataTable\Column\DateColumnType;
use Umbrella\CoreBundle\DataTable\ColumnActionBuilder;
use Umbrella\CoreBundle\DataTable\DataTableBuilder;
use Umbrella\CoreBundle\DataTable\DataTableType;
use Umbrella\CoreBundle\Form\SearchType;

class SpaceMissionMultipleTableType extends DataTableType
{
    public function buildTable(DataTableBuilder $builder, array $options)
    {
        $builder->addFilter('search', SearchType::class);

        $builder
            ->add('date', DateColumnType::class, [
                'order' => 'DESC',
                'format' => 'd M Y'
            ])
            ->add('companyName')
            ->add('detail')
            ->add('rocketStatus', RocketStatusColumnType::class)
            ->add('__action__', ActionColumnType::class, [
                'build' => function (ColumnActionBuilder $builder, SpaceMission $s) {
                    $builder->editLink([
                        'route' => 'app_datatable_datatableeditable_edit',
                        'route_params' => ['id' => $s->id],
                        'xhr' => true
                    ]);
                }
            ]);

        $builder->useEntityAdapter([
            'class' => SpaceMission::class,
            'query' => function (QueryBuilder $qb, array $formData) use ($options) {
                if (isset($formData['search'])) {
                    $qb->andWhere('LOWER(e.search) LIKE :search');
                    $qb->setParameter('search', '%' . $formData['search'] . '%');
                }

                if ($options['rocket_status']) {
                    $qb->andWhere('e.rocketStatus = :rocketStatus');
                    $qb->setParameter('rocketStatus', $options['rocket_status']);
                }
            }
        ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver
            ->setDefault('class', 'table-sm')
            ->setDefault('page_length', 10);

        $resolver
            ->setDefault('rocket_status', null)
            ->setAllowedTypes('rocket_status', ['null', 'string']);
    }
}
