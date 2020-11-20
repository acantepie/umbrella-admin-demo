<?php

namespace App\Task;

use App\Entity\Fish;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Umbrella\CoreBundle\Component\Schedule\Context\AbstractTaskContext;
use Umbrella\CoreBundle\Component\Schedule\Task\AbstractTask;
use Umbrella\CoreBundle\Entity\ArrayTaskContext;

/**
 * Class NewFishTask
 */
class NewFishTask extends AbstractTask
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
     * @var ArrayTaskContext
     */
    public function execute(AbstractTaskContext $context)
    {
        $response = $this->client->request('GET', 'https://fishbase.ropensci.org/species/' . $context['species_id']);
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
