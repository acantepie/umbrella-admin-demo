<?php

namespace App\FileWriter;

use App\Entity\Fish;
use Doctrine\ORM\EntityManagerInterface;
use Umbrella\AdminBundle\Entity\UmbrellaFileWriterConfig;
use Umbrella\AdminBundle\FileWriter\Handler\AbstractFileWriterHandler;

/**
 * Class FwFishHandler
 */
class CsvFileWriterHandler extends AbstractFileWriterHandler
{
    /**
     * @var EntityManagerInterface
     */
    private $em;

    /**
     * CsvFileWriterHandler constructor.
     * @param EntityManagerInterface $em
     */
    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
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
     * @param  UmbrellaFileWriterConfig $config
     * @return Fish[]
     */
    private function getResults(UmbrellaFileWriterConfig  $config)
    {
        $qb = $this->em->createQueryBuilder();
        $qb->select('e');
        $qb->from(Fish::class, 'e');

        if (!empty($config->habitat)) {
            $qb->andWhere('e.habitats LIKE :habitat');
            $qb->setParameter('habitat', '%' . $config->habitat . '%');
        }

        return $qb->getQuery()->getResult();
    }
}
