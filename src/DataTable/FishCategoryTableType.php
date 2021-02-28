<?php

namespace App\DataTable;

use App\Entity\FishCategory;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Component\DataTable\Action\AddActionType;
use Umbrella\CoreBundle\Component\DataTable\Column\LinkListColumnType;
use Umbrella\CoreBundle\Component\DataTable\Column\PropertyColumnType;
use Umbrella\CoreBundle\Component\DataTable\DataTableBuilder;
use Umbrella\CoreBundle\Component\DataTable\DataTableType;
use Umbrella\CoreBundle\Component\DataTable\ToolbarBuilder;
use Umbrella\CoreBundle\Component\UmbrellaLink\UmbrellaLinkList;

/**
 * Class FishCategoryTableType
 */
class FishCategoryTableType extends DataTableType
{
    /**
     * {@inheritdoc}
     */
    public function buildToolbar(ToolbarBuilder $builder, array $options = [])
    {
        $builder->addAction('add', AddActionType::class, [
            'route' => 'app_admin_datatable_categoryedit',
            'xhr' => true,
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function buildTable(DataTableBuilder $builder, array $options = [])
    {
        $builder->add('name', PropertyColumnType::class);
        $builder->add('description', PropertyColumnType::class);
        $builder->add('action', LinkListColumnType::class, [
            'link_builder' => function (UmbrellaLinkList $linkList, FishCategory $entity) {
                $linkList->addXhrEdit('app_admin_datatable_categoryedit', ['id' => $entity->id]);
                $linkList->addXhrDelete('app_admin_datatable_categorydelete', ['id' => $entity->id]);
            },
        ]);

        $builder->useNestedEntityAdapter(FishCategory::class);
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'tree' => true,
        ]);
    }
}
