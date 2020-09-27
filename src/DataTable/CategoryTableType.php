<?php
/**
 * Created by PhpStorm.
 * User: acantepie
 * Date: 19/04/20
 * Time: 23:42
 */

namespace App\DataTable;

use App\Entity\NodeEntity;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Component\Toolbar\ToolbarBuilder;
use Umbrella\CoreBundle\Component\DataTable\DataTableBuilder;
use Umbrella\CoreBundle\Component\Column\Type\ActionColumnType;
use Umbrella\CoreBundle\Component\DataTable\Type\DataTableType;
use Umbrella\CoreBundle\Component\Column\Type\CheckBoxColumnType;
use Umbrella\CoreBundle\Component\Column\Type\PropertyColumnType;
use Umbrella\CoreBundle\Component\Toolbar\Action\AddButtonActionType;
use Umbrella\CoreBundle\Component\DataTable\RowAction\RowActionBuilder;

/**
 * Class CategoryTableType
 */
class CategoryTableType extends DataTableType
{
    /**
     * @inheritdoc
     */
    public function buildToolbar(ToolbarBuilder $builder, array $options = [])
    {
        $builder->addAction('add', AddButtonActionType::class, [
            'route' => 'app_admin_treetable_edit',
            'xhr' => true,
        ]);
    }

    /**
     * @inheritdoc
     */
    public function buildTable(DataTableBuilder $builder, array $options = [])
    {
        $builder->add('cb', CheckBoxColumnType::class);
        $builder->add('label', PropertyColumnType::class);
        $builder->add('type', PropertyColumnType::class, [
            'renderer' => function (NodeEntity $entity) {
                return sprintf('<span class="badge badge-primary">%s</span>', $entity->type);
            }
        ]);
        $builder->add('actions', ActionColumnType::class, [
            'action_builder' => function (RowActionBuilder $builder, NodeEntity $entity) {
                $builder->createAdd('app_admin_treetable_edit', ['parentId' => $entity->id]);
                $builder->createEdit('app_admin_treetable_edit', ['id' => $entity->id]);
                $builder->createDelete('app_admin_treetable_delete', ['id' => $entity->id]);
            }
        ]);
    }

    /**
     * @inheritdoc
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'tree' => true,
            'tree_column' => 1,
            'tree_state' => 'expanded',
            'data_class' => NodeEntity::class,
        ]);
    }
}
