<?php
/**
 * Created by PhpStorm.
 * User: acantepie
 * Date: 22/03/20
 * Time: 20:28
 */

namespace App\DataTable;

use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Component\Column\Type\BadgeColumnType;
use Umbrella\CoreBundle\Component\Column\Type\PropertyColumnType;
use Umbrella\CoreBundle\Component\DataTable\DataTableBuilder;
use Umbrella\CoreBundle\Component\DataTable\Type\DataTableType;

/**
 * Class CatTableType
 */
class ArrayTableType extends DataTableType
{
    /**
     * @inheritdoc
     */
    public function buildTable(DataTableBuilder $builder, array $options = array())
    {
        $builder->add('name', PropertyColumnType::class, array(
            'property_path' => '[name]'
        ));
        $builder->add('nbPattes', BadgeColumnType::class, array(
            'property_path' => '[nbPattes]'
        ));

        $builder->setSource(new ArraySource());
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefault('id_path', '[id]');
    }
}