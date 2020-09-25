<?php

namespace App\DataTable;

use App\Entity\Kangaroo;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Component\Column\Type\ActionColumnType;
use Umbrella\CoreBundle\Component\Column\Type\PropertyColumnType;
use Umbrella\CoreBundle\Component\DataTable\RowAction\RowActionBuilder;
use Umbrella\CoreBundle\Component\DataTable\DataTableBuilder;
use Umbrella\CoreBundle\Component\DataTable\Source\Modifier\EntitySearchModifier;
use Umbrella\CoreBundle\Component\DataTable\Type\DataTableType;
use Umbrella\CoreBundle\Component\Toolbar\ToolbarBuilder;
use Umbrella\CoreBundle\Component\Toolbar\Action\AddButtonActionType;
use Umbrella\CoreBundle\Form\SearchType;

class KangarooTableType extends DataTableType
{

    /**
     * @inheritdoc
     */
    public function buildToolbar(ToolbarBuilder $builder, array $options = array())
    {
        $builder->addFilter('search', SearchType::class);
        $builder->addAction('add', AddButtonActionType::class, array(
            'route' => 'app_admin_kangaroo_edit',
            'xhr' => true
        ));
    }

    /**
     * @inheritdoc
     */
    public function buildTable(DataTableBuilder $builder, array $options = array())
    {
        $builder->add('id', PropertyColumnType::class);
        $builder->add('actions', ActionColumnType::class, array(
            'action_builder' => function (RowActionBuilder $builder, Kangaroo $entity) {
                $builder->createEdit('app_admin_kangaroo_edit', ['id' => $entity->id]);
            }
        ));

        $builder->addSourceModifier(new EntitySearchModifier());

    }

    /**
     * @inheritdoc
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => Kangaroo::class
        ));
    }

}