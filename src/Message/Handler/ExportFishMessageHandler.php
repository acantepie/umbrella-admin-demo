<?php

namespace App\Message\Handler;

use App\Entity\Fish;
use App\Message\ExportFishMessage;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;

/**
 * Class ExportFishMessageHandler
 */
class ExportFishMessageHandler implements MessageHandlerInterface
{
    const CSV_DELIMITER = ';';

    private EntityManagerInterface $em;

    /**
     * ExportFishMessageHandler constructor.
     */
    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    public function __invoke(ExportFishMessage $message)
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

        $message->output = stream_get_contents($resource);
        fclose($resource);
    }
}
