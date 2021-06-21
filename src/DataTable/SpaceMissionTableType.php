<?php

namespace App\DataTable;

use App\DataTable\Column\LocationColumnType;
use App\DataTable\Column\StatusColumnType;
use App\Entity\SpaceMission;
use App\Form\Base\MissionStatusChoiceType;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\OptionsResolver\Options;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\DataTable\Adapter\EntityAdapter;
use Umbrella\CoreBundle\DataTable\Column\CheckBoxColumnType;
use Umbrella\CoreBundle\DataTable\Column\DateColumnType;
use Umbrella\CoreBundle\DataTable\Column\DragHandleColumnType;
use Umbrella\CoreBundle\DataTable\Column\PropertyColumnType;
use Umbrella\CoreBundle\DataTable\Column\WidgetColumnType;
use Umbrella\CoreBundle\DataTable\DataTableBuilder;
use Umbrella\CoreBundle\DataTable\DataTableType;
use Umbrella\CoreBundle\Form\DatepickerType;
use Umbrella\CoreBundle\Form\SearchType;
use Umbrella\CoreBundle\Widget\Type\AddLinkType;
use Umbrella\CoreBundle\Widget\Type\ButtonType;
use Umbrella\CoreBundle\Widget\Type\RowDeleteLinkType;
use Umbrella\CoreBundle\Widget\Type\RowEditLinkType;
use Umbrella\CoreBundle\Widget\WidgetBuilder;

/**
 * Class SpaceMissionTableType
 */
class SpaceMissionTableType extends DataTableType
{
    /**
     * {@inheritdoc}
     */
    public function buildTable(DataTableBuilder $builder, array $options)
    {
        $builder->addFilter('search', SearchType::class);
        $builder->addFilter('from', DatepickerType::class, [
            'input_prefix_text' => 'From'
        ]);
        $builder->addFilter('to', DatepickerType::class, [
            'input_prefix_text' => 'To'
        ]);

        if ($options['show_mission_status_filter']) {
            $builder->addFilter('missionStatus', MissionStatusChoiceType::class, [
                'required' => false,
                'placeholder' => 'Mission status'
            ]);
        }

        // Add button (use to add data)
        if ($options['editable']) {
            $builder->addWidget('add', AddLinkType::class, [
                'route' => 'app_admin_datatableaction_edit',
                'xhr' => true,
                'mode' => self::DEFAULT_MODE
            ]);
        }

        // Export button (use to export data)
        if ($options['exportable']) {
            $builder->addWidget('export', ButtonType::class, [
                'text' => false,
                'class' => 'btn-outline-primary',
                'icon' => 'mdi mdi-download',
                'route' => 'app_admin_datatableaction_export',
                'mode' => [self::DEFAULT_MODE, self::SELECTION_MODE],
                'tag' => self::TAG_SEND_DATA
            ]);
        }

        // Checkbox column (use to select data exported)
        if ($options['exportable']) {
            $builder->add('select', CheckBoxColumnType::class);
        }

        if ($options['row_reorder']) {
            $builder->add('drag', DragHandleColumnType::class);
        }

        $builder->add('date', DateColumnType::class, [
            'order' => 'DESC',
            'format' => 'd M Y'
        ]);
        $builder->add('companyName', PropertyColumnType::class);

        $builder->add('location', LocationColumnType::class);

        $builder->add('detail', PropertyColumnType::class);

        $builder->add('cost', PropertyColumnType::class, [
            'is_safe_html' => true,
            'renderer' => function (SpaceMission $s) {
                return null === $s->cost ? '' : sprintf('<span class="badge bg-primary">%.2f m</span>', $s->cost);
            }
        ]);

        $builder->add('rocketStatus', StatusColumnType::class);

        $builder->add('missionStatus', StatusColumnType::class);

        // Links / Actions column (use to edit data)
        if ($options['editable']) {
            $builder->add('links', WidgetColumnType::class, [
                'build' => function (WidgetBuilder $builder, SpaceMission $s) {
                    $builder->add('add', RowEditLinkType::class, [
                        'route' => 'app_admin_datatableaction_edit',
                        'route_params' => ['id' => $s->id],
                        'xhr' => true
                    ]);

                    $builder->add('delete', RowDeleteLinkType::class, [
                        'route' => 'app_admin_datatableaction_delete',
                        'route_params' => ['id' => $s->id]
                    ]);
                }
            ]);
        }

        $builder->useAdapter(EntityAdapter::class, [
            'class' => SpaceMission::class,
            'fetch_join_collection' => false,
            'query' => function (QueryBuilder $qb, array $formData) use ($options) {
                if ($options['row_reorder']) {
                    $qb->orderBy('e.sequence', 'ASC');
                }

                if (isset($formData['search'])) {
                    $qb->andWhere('LOWER(e.search) LIKE :search');
                    $qb->setParameter('search', '%' . $formData['search'] . '%');
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

                if ($options['mission_status']) {
                    $qb->andWhere('e.missionStatus = :_missionStatus');
                    $qb->setParameter('_missionStatus', $options['mission_status']);
                }
            }
        ]);

        // Drag Column (use with row reorder)
        if ($options['row_reorder']) {
            $builder->setRowReorderUrl('app_admin_datatableaction_rowreorder');
        }
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'row_reorder' => false,
            'orderable' => function (Options $options) {
                return !$options['row_reorder'];
            },
        ]);

        $resolver
            ->define('show_mission_status_filter')
            ->default(true)
            ->allowedTypes('bool');

        $resolver
            ->define('exportable')
            ->default(false)
            ->allowedTypes('bool');

        $resolver
            ->define('editable')
            ->default(false)
            ->allowedTypes('bool');

        // filter table depending of options
        $resolver
            ->define('mission_status')
            ->default(null)
            ->allowedValues(
                SpaceMission::MISSION_FAILURE,
                SpaceMission::MISSION_PARTIAL_FAILURE,
                SpaceMission::MISSION_PRELAUNCH_FAILURE,
                SpaceMission::MISSION_SUCCESS,
                null
            );
    }
}
