<?php

namespace App\FileWriter;

use App\Entity\Fish;
use Doctrine\ORM\QueryBuilder;
use App\DataTable\FishTableType;
use App\Entity\FileWriterConfig;
use Doctrine\ORM\EntityManagerInterface;
use Umbrella\AdminBundle\Entity\UmbrellaFileWriterConfig;
use Umbrella\CoreBundle\Component\DataTable\DataTableFactory;
use Umbrella\AdminBundle\FileWriter\Handler\AbstractFileWriterHandler;
use Umbrella\CoreBundle\Component\DataTable\Source\Modifier\EntityCallbackSourceModifier;

/**
 * Class FwFishHandler
 */
class FishFileWriterHandler extends AbstractFileWriterHandler
{
    /**
     * @var EntityManagerInterface
     */
    private $em;

    /**
     * @var DataTableFactory
     */
    private $datatableFactory;

    /**
     * FishFileWriterHandler constructor.
     * @param EntityManagerInterface $em
     * @param DataTableFactory       $datatableFactory
     */
    public function __construct(EntityManagerInterface $em, DataTableFactory $datatableFactory)
    {
        $this->em = $em;
        $this->datatableFactory = $datatableFactory;
    }

    /**
     * @inheritDoc
     */
    public function execute(UmbrellaFileWriterConfig $config)
    {
        $resource = fopen($this->getOuputFilePath($config), 'w');
        $fishes = $this->getResults($config);

        fputcsv($resource, ['id', 'name', 'description', 'edible']);

        foreach ($fishes as $fish) {
            fputcsv($resource, [
                $fish->id,
                $fish->name,
                $fish->description,
                $fish->edible ? 0 : 1,
            ]);
        }

        fclose($resource);
    }

    /**
     * @param  FileWriterConfig $config
     * @return Fish[]
     */
    private function getResults(UmbrellaFileWriterConfig  $config)
    {
        if ($config->datatableQuery) {
            $table = $this->datatableFactory->create(FishTableType::class, [
                'disabled' => true,
                'exportable' => true
            ]);

            // if you want modify query (do this before handleRequest of course)
            $table->getSource()->addModifier(new EntityCallbackSourceModifier(function (QueryBuilder  $qb, $data) {
                //$qb->andWhere('e.edible = TRUE');
            }));

            $table->handleRequestData($config->datatableQuery);
            return $table->getResults()->data;
        } else {
            $qb = $this->em->createQueryBuilder();
            $qb->select('e');
            $qb->from(Fish::class, 'e');

            if (!empty($config->habitat)) {
                $qb->andWhere('e.habitats LIKE :habitat');
                $qb->setParameter('habitat', '%' . $config->habitat . '%');
            }

            if (count($config->fishIds) > 0) {
                $qb->andWhere('e.id IN (:ids)');
                $qb->setParameter('ids', $config->fishIds);
            }

            return $qb->getQuery()->getResult();
        }
    }
}
