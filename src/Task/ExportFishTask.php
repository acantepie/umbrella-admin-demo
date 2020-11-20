<?php

namespace App\Task;

use App\Entity\Fish;
use Doctrine\ORM\EntityManagerInterface;
use Umbrella\CoreBundle\Component\Schedule\Context\AbstractTaskContext;
use Umbrella\CoreBundle\Component\Schedule\Task\AbstractTask;
use Umbrella\CoreBundle\Entity\ArrayTaskContext;

/**
 * Class ExportFishTask
 */
class ExportFishTask extends AbstractTask
{
    const CSV_DELIMITER = ';';

    /**
     * @var EntityManagerInterface
     */
    private $em;

    /**
     * ExportFishTask constructor.
     *
     * @param EntityManagerInterface $em
     */
    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    /**
     * @var ArrayTaskContext
     */
    public function execute(AbstractTaskContext $context)
    {
        $fishes = $this->em->getRepository(Fish::class)->findAll();

        $resource = fopen('php://memory', 'r+');
        fputcsv($resource, ['id', 'name', 'description', 'edible'], self::CSV_DELIMITER);

        foreach ($fishes as $fish) {
            fputcsv($resource, [
                $fish->id,
                $fish->name,
                $fish->description,
                $fish->edible ? 0 : 1,
            ], self::CSV_DELIMITER);
        }
        rewind($resource);

        $context['output'] = stream_get_contents($resource);
        fclose($resource);

        $this->em->flush();
    }
}
