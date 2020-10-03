<?php

namespace App\FileWriter;

use App\Entity\Fish;
use Doctrine\ORM\EntityManagerInterface;
use Umbrella\AdminBundle\Entity\FileWriterTaskConfig;
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
    public function execute(FileWriterTaskConfig $config)
    {
        $resource = fopen($this->getOuputFilePath($config), 'w');

        $fishes = $this->em->getRepository(Fish::class)->findAll();

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
}
