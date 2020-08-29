<?php
/**
 * Created by PhpStorm.
 * User: acantepie
 * Date: 22/03/20
 * Time: 20:28
 */

namespace App\DataTable;

use App\Entity\Cat;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Component\Column\Type\ActionColumnType;
use Umbrella\CoreBundle\Component\Column\Type\BadgeColumnType;
use Umbrella\CoreBundle\Component\Column\Type\CheckBoxColumnType;
use Umbrella\CoreBundle\Component\Column\Type\PropertyColumnType;
use Umbrella\CoreBundle\Component\DataTable\RowAction\RowActionBuilder;
use Umbrella\CoreBundle\Component\DataTable\DataTableBuilder;
use Umbrella\CoreBundle\Component\DataTable\Source\Modifier\EntitySearchModifier;
use Umbrella\CoreBundle\Component\DataTable\Type\DataTableType;
use Umbrella\CoreBundle\Component\Toolbar\ToolbarBuilder;
use Umbrella\CoreBundle\Component\Toolbar\Action\AddButtonActionType;
use Umbrella\CoreBundle\Form\SearchType;

/**
 * Class CatTableType
 */
class SimpleTableType extends DataTableType
{

    /**
     * @inheritdoc
     */
    public function buildToolbar(ToolbarBuilder $builder, array $options = array())
    {
        $builder->addFilter('search', SearchType::class);
        $builder->addAction('add', AddButtonActionType::class, array(
            'route' => 'app_admin_datatable_simpleedit',
            'xhr' => true
        ));
    }

    /**
     * @inheritdoc
     */
    public function buildTable(DataTableBuilder $builder, array $options = array())
    {
        $builder->add('cb', CheckBoxColumnType::class);
        $builder->add('name', PropertyColumnType::class);
        $builder->add('nbPattes', BadgeColumnType::class);
        $builder->add('actions', ActionColumnType::class, array(
            'action_builder' => function (RowActionBuilder $builder, Cat $entity) {
                $builder->createEdit('app_admin_datatable_simpleedit', ['id' => $entity->id]);
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
            'data_class' => Cat::class,
            'my_param' => 18
        ));
    }

}