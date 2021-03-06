<?php

namespace App\DataTable;

use App\Entity\SpaceMission;
use App\Entity\SpaceMissionClassification;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Routing\RouterInterface;
use Umbrella\CoreBundle\Component\DataTable\Column\PropertyColumnType;
use Umbrella\CoreBundle\Component\DataTable\DataTableBuilder;
use Umbrella\CoreBundle\Component\DataTable\DataTableType;

class SpaceMissionClassificationTableType extends DataTableType
{
    private EntityManagerInterface $em;
    private RouterInterface $router;

    /**
     * SpaceMissionClassificationTableType constructor.
     */
    public function __construct(EntityManagerInterface $em, RouterInterface $router)
    {
        $this->em = $em;
        $this->router = $router;
    }

    public function buildTable(DataTableBuilder $builder, array $options)
    {
        $builder->add('name', PropertyColumnType::class, [
            'renderer' => function (SpaceMissionClassification $c) {
                if (SpaceMissionClassification::STATUS === $c->type) {
                    return SpaceMission::getIconStatus($c->name);
                }

                return $c->name;
            }
        ]);

        $countQuery = $this->em->createQuery(sprintf('SELECT COUNT(m) FROM %s m WHERE m.classification = :c', SpaceMission::class));

        $builder->add('missions', PropertyColumnType::class, [
            'renderer' => function (SpaceMissionClassification $c) use ($countQuery) {
                if (SpaceMissionClassification::STATUS === $c->type) {
                    return sprintf(
                        '<a href data-xhr="%s" class="text-primary">%d missions</a>',
                        $this->router->generate('app_admin_datatableaction_missions', ['id' => $c->id]),
                        $countQuery->setParameter('c', $c)->getSingleScalarResult()
                    );
                }

                return '';
            }
        ]);

        $builder->useNestedEntityAdapter(SpaceMissionClassification::class);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'tree' => true,
            'tree_state' => 'collapsed'
        ]);
    }
}
