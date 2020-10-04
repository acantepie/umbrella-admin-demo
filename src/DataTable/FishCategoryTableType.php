<?php

namespace App\DataTable;

use App\Entity\FishCategory;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Component\Toolbar\ToolbarBuilder;
use Umbrella\CoreBundle\Component\DataTable\DataTableBuilder;
use Umbrella\CoreBundle\Component\DataTable\Type\DataTableType;
use Umbrella\CoreBundle\Component\Column\Type\PropertyColumnType;

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
    }

    /**
     * @inheritDoc
     */
    public function buildTable(DataTableBuilder $builder, array $options = [])
    {
        $builder->add('name', PropertyColumnType::class);
        $builder->add('description', PropertyColumnType::class);
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
