<?php

namespace App\Message\Handler;

use App\Entity\Fish;
use App\Message\NewFishMessage;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;

/**
 * Class NewFishMessageHandler
 */
class NewFishMessageHandler implements MessageHandlerInterface
{
    private EntityManagerInterface $em;
    private HttpClientInterface $client;

    /**
     * NewFishMessageHandler constructor.
     */
    public function __construct(EntityManagerInterface $em, HttpClientInterface $client)
    {
        $this->em = $em;
        $this->client = $client;
    }

    public function __invoke(NewFishMessage $message)
    {
        $response = $this->client->request('GET', 'https://fishbase.ropensci.org/species/' . $message->speciesId);
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
