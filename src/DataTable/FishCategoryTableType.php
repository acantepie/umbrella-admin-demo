<?php

namespace App\DataTable;

use App\Entity\FishCategory;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Component\Toolbar\ToolbarBuilder;
use Umbrella\CoreBundle\Component\Action\Type\AddActionType;
use Umbrella\CoreBundle\Component\DataTable\DataTableBuilder;
use Umbrella\CoreBundle\Component\Column\Type\ActionColumnType;
use Umbrella\CoreBundle\Component\DataTable\Type\DataTableType;
use Umbrella\CoreBundle\Component\Column\Type\PropertyColumnType;
use Umbrella\CoreBundle\Component\DataTable\RowAction\RowActionBuilder;

/**
 * Class FishCategoryTableType
 */
class FishCategoryTableType extends DataTableType
{
    /**
     * @inheritDoc
     */
    public function buildToolbar(ToolbarBuilder $builder, array $options = [])
    {
        $builder->addAction('add', AddActionType::class, [
            'route' => 'app_admin_fishcategorycrud_edit',
            'xhr' => true
        ]);
    }

    /**
     * @inheritDoc
     */
    public function buildTable(DataTableBuilder $builder, array $options = [])
    {
        $builder->add('name', PropertyColumnType::class);
        $builder->add('description', PropertyColumnType::class);
        $builder->add('action', ActionColumnType::class, [
            'action_builder' => function (RowActionBuilder $builder, FishCategory $entity) {
                $builder->createXhrEdit('app_admin_fishcategorycrud_edit', ['id' => $entity->id]);
                $builder->createXhrDelete('app_admin_fishcategorycrud_delete', ['id' => $entity->id]);
            }
        ]);
    }

    /**
     * @inheritDoc
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'tree' => true,
            'data_class' => FishCategory::class
        ]);
    }
}
