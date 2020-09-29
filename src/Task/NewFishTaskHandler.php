<?php

namespace App\Task;

use App\Entity\Fish;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Umbrella\CoreBundle\Component\Task\Handler\AbstractTaskHandler;

/**
 * Class NewFishTaskHandler
 */
class NewFishTaskHandler extends AbstractTaskHandler
{
    /**
     * @var EntityManagerInterface
     */
    private $em;

    /**
     * @var HttpClientInterface
     */
    private $client;

    /**
     * NewFishTaskHandler constructor.
     *
     * @param EntityManagerInterface $em
     * @param HttpClientInterface    $client
     */
    public function __construct(EntityManagerInterface $em, HttpClientInterface $client)
    {
        $this->em = $em;
        $this->client = $client;
    }

    /**
     * @inheritDoc
     */
    public function execute()
    {
        $speciesId = $this->taskHelper->getTask()->speciesId;

        $response = $this->client->request('GET', 'https://fishbase.ropensci.org/species/' . $speciesId);
        $data = json_decode($response->getContent(), true);
        $fishData = $data['data'][0];

        $fish = new Fish();
        $fish->name = $fishData['Species'];
        $fish->description = $fishData['Comments'];
        $fish->color = '#2196f3';

        $this->em->persist($fish);
        $this->em->flush();
    }
}
