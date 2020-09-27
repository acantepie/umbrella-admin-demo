<?php
/**
 * Created by PhpStorm.
 * User: acantepie
 * Date: 22/03/20
 * Time: 20:28
 */

namespace App\DataTable;

use App\Entity\Fish;
use App\Form\HabitatType;
use Doctrine\ORM\QueryBuilder;
use Umbrella\CoreBundle\Form\SearchType;
use Umbrella\CoreBundle\Utils\StringUtils;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Contracts\Translation\TranslatorInterface;
use Umbrella\CoreBundle\Component\Toolbar\ToolbarBuilder;
use Umbrella\CoreBundle\Component\DataTable\DataTableBuilder;
use Umbrella\CoreBundle\Component\Column\Type\ActionColumnType;
use Umbrella\CoreBundle\Component\DataTable\Type\DataTableType;
use Umbrella\CoreBundle\Component\Column\Type\BooleanColumnType;
use Umbrella\CoreBundle\Component\Column\Type\PropertyColumnType;
use Umbrella\CoreBundle\Component\Toolbar\Action\AddButtonActionType;
use Umbrella\CoreBundle\Component\DataTable\RowAction\RowActionBuilder;
use Umbrella\CoreBundle\Component\DataTable\Source\Modifier\EntitySearchModifier;

/**
 * Class CatTableType
 */
class SimpleTableType extends DataTableType
{
    /**
     * @var TranslatorInterface
     */
    private $translator;

    /**
     * SimpleTableType constructor.
     * @param TranslatorInterface $translator
     */
    public function __construct(TranslatorInterface $translator)
    {
        $this->translator = $translator;
    }

    /**
     * @inheritdoc
     */
    public function buildToolbar(ToolbarBuilder $builder, array $options = [])
    {
        $builder->addFilter('search', SearchType::class);
        $builder->addFilter('habitat', HabitatType::class, [
            'label' => false,
            'placeholder' => 'form.placeholder.habitat',
            'multiple' => false
        ]);

        $builder->addAction('add', AddButtonActionType::class, [
            'route' => 'app_admin_fishcrud_edit',
            'xhr' => true
        ]);
    }

    /**
     * @inheritdoc
     */
    public function buildTable(DataTableBuilder $builder, array $options = [])
    {
        $builder->add('name', PropertyColumnType::class, [
            'renderer' => function (Fish $entity) {
                return sprintf(
                    '<div class="d-flex align-items-center">' .
                    '<i class="mdi mdi-square mdi-36px" style="color: %s"></i>' .
                    '<div>%s<br><span class="text-muted">%s</span></div>' .
                    '</div>',
                    $entity->color,
                    $entity->name,
                    StringUtils::truncate($entity->description, 150)
                );
            },
            'default_order' => 'ASC',
        ]);
        $builder->add('edible', BooleanColumnType::class);

        $builder->add('habitats', PropertyColumnType::class, [
            'orderable' => false,
            'renderer' => function (Fish $fish) {
                $html = '';
                foreach ($fish->habitats as $habitat) {
                    $html .= sprintf('<span class="badge badge-primary">%s</span>', $this->translator->trans('fish.habitat.' . $habitat));
                }
                return $html;
            }
        ]);

        $builder->add('actions', ActionColumnType::class, [
            'action_builder' => function (RowActionBuilder $builder, Fish $entity) {
                $builder->createEdit('app_admin_fishcrud_edit', ['id' => $entity->id]);
                $builder->createDelete('app_admin_fishcrud_delete', ['id' => $entity->id]);
            }
        ]);

        $builder->addSourceModifier(new EntitySearchModifier());

        $builder->addEntityCallbackSourceModifier(function (QueryBuilder $qb, array $formData) use ($options) {
            if (null !== $options['edible']) {
                $qb->andWhere('e.edible = :edible');
                $qb->setParameter('edible', $options['edible']);
            }

            if ($formData['habitat']) {
                $qb->andWhere('e.habitats LIKE :habitat');
                $qb->setParameter('habitat', '%' . $formData['habitat'] . '%');
            }
        });
    }

    /**
     * @inheritdoc
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Fish::class,
            'edible' => null // null : return all | true => return only edible fish | false => return only not edible fish
        ]);
    }
}
