<?php

namespace App\DataTable;

use App\DataTable\Column\LocationColumnType;
use App\DataTable\Column\StatusColumnType;
use App\Entity\SpaceMission;
use App\Entity\SpaceMissionClassification;
use App\Form\Base\MissionStatusChoiceType;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Component\DataTable\Adapter\EntityAdapter;
use Umbrella\CoreBundle\Component\DataTable\Column\DateColumnType;
use Umbrella\CoreBundle\Component\DataTable\Column\DragHandlerColumnType;
use Umbrella\CoreBundle\Component\DataTable\Column\PropertyColumnType;
use Umbrella\CoreBundle\Component\DataTable\DataTableBuilder;
use Umbrella\CoreBundle\Component\DataTable\DataTableType;
use Umbrella\CoreBundle\Component\DataTable\ToolbarBuilder;
use Umbrella\CoreBundle\Form\DatepickerType;
use Umbrella\CoreBundle\Form\SearchType;

/**
 * Class SpaceMissionTableType
 */
class SpaceMissionTableType extends DataTableType
{
    /**
     * {@inheritdoc}
     */
    public function buildToolbar(ToolbarBuilder $builder, array $options)
    {
        $builder->addFilter('search', SearchType::class);
        $builder->addFilter('from', DatepickerType::class, [
            'input_prefix_text' => 'From'
        ]);
        $builder->addFilter('to', DatepickerType::class, [
            'input_prefix_text' => 'To'
        ]);

        $builder->addFilter('missionStatus', MissionStatusChoiceType::class, [
            'required' => false,
            'placeholder' => 'Mission status'
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function buildTable(DataTableBuilder $builder, array $options)
    {
        if ($options['row_reorder']) {
            $builder->add('sequence', DragHandlerColumnType::class, [
                'show_value' => true,
                'order' => 'ASC',
            ]);
            $builder->setRowReorderUrl('app_admin_datatableaction_rowreorder');
        }

        $builder->add('date', DateColumnType::class, [
            'order' => $options['row_reorder'] ? null : 'DESC',
            'format' => 'd M Y'
        ]);
        $builder->add('companyName', PropertyColumnType::class);

        $builder->add('location', LocationColumnType::class);

        $builder->add('detail', PropertyColumnType::class);

        $builder->add('cost', PropertyColumnType::class, [
            'is_safe_html' => true,
            'renderer' => function (SpaceMission $s) {
                return null === $s->cost ? '' : sprintf('<span class="badge badge-primary">%.2f m</span>', $s->cost);
            }
        ]);

        $builder->add('rocketStatus', StatusColumnType::class);

        $builder->add('missionStatus', StatusColumnType::class);

        $builder->useAdapter(EntityAdapter::class, [
            'class' => SpaceMission::class,
            'fetch_join_collection' => false,
            'query' => function (QueryBuilder $qb, array $formData) use ($options) {
                if (isset($formData['search'])) {
                    $qb->andWhere('LOWER(e.search) LIKE :search');
                    $qb->setParameter('search', '%' . strtolower($formData['search']) . '%');
                }

                if (isset($formData['missionStatus'])) {
                    $qb->andWhere('e.missionStatus = :missionStatus');
                    $qb->setParameter('missionStatus', $formData['missionStatus']);
                }

                if (isset($formData['from'])) {
                    $qb->andWhere('e.date >= :from');
                    $qb->setParameter('from', $formData['from']);
                }

                if (isset($formData['to'])) {
                    $qb->andWhere('e.date <= :to');
                    $qb->setParameter('to', $formData['to']);
                }

                if ($options['classification']) {
                    $qb->andWhere('e.classification = :classification');
                    $qb->setParameter('classification', $options['classification']);
                }
            }
        ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'row_reorder' => false,
        ]);

        $resolver
            ->define('classification')
            ->default(null)
            ->allowedTypes('null', SpaceMissionClassification::class);
    }
}
