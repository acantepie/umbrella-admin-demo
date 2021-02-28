<?php

namespace App\DataTable;

use App\Entity\Fish;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Component\DataTable\Adapter\EntityAdapter;
use Umbrella\CoreBundle\Component\DataTable\Column\RelocateColumnType;
use Umbrella\CoreBundle\Component\DataTable\DataTableBuilder;
use Umbrella\CoreBundle\Component\DataTable\DataTableType;
use Umbrella\CoreBundle\Component\DataTable\ToolbarBuilder;

class DraggableFishTable extends DataTableType
{
    public function buildToolbar(ToolbarBuilder $builder, array $options)
    {
    }

    public function buildTable(DataTableBuilder $builder, array $options)
    {
        $builder->add('sequence', RelocateColumnType::class);
        $builder->add('name');

        $builder->useAdapter(EntityAdapter::class, [
            'class' => Fish::class,
            'fetch_join_collection' => false,
            'query' => function (QueryBuilder $qb) {
                $qb->orderBy('e.sequence', 'ASC');
            }
        ]);

        $builder->setRelocateUrl('app_admin_datatable_updatesequence');
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'paging' => false,
            'orderable' => false
        ]);
    }
}
