<?php

namespace App\DataFixtures;

use App\Entity\Fish;
use App\Entity\Task;
use App\FileWriter\FwFishHandler;
use Doctrine\Persistence\ObjectManager;
use Umbrella\CoreBundle\Entity\BaseTask;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Umbrella\CoreBundle\Entity\UmbrellaFileWriterConfig;
use Umbrella\CoreBundle\Component\FileWriter\Handler\TaskFileWriterHandler;

class AppFixtures extends Fixture
{
    /**
     * @param ObjectManager $manager
     */
    public function load(ObjectManager $manager)
    {
        $this->loadFish($manager);
        $this->loadFileWriterTask($manager);
    }

    /**
     * @param ObjectManager $manager
     */
    private function loadFish(ObjectManager $manager)
    {
        $e = new Fish();
        $e->name = 'Saumon';
        $e->description = 'Poisson migrateur dont la chaire est appréciée';
        $e->edible = true;
        $e->color = '#f06292';
        $e->habitats = [Fish::HABITAT_LAKE, Fish::HABITAT_RIVER, Fish::HABITAT_SEA];
        $manager->persist($e);

        $e = new Fish();
        $e->name = 'Poisson rouge';
        $e->description = 'Poisson de compagnie';
        $e->edible = false;
        $e->habitats = [Fish::HABITAT_LAKE];
        $e->color = '#f44336';
        $manager->persist($e);

        $e = new Fish();
        $e->name = 'Anguille';
        $e->description = 'Poisson long et visqueux';
        $e->edible = true;
        $e->habitats = [Fish::HABITAT_LAKE, Fish::HABITAT_RIVER, Fish::HABITAT_SEA];
        $e->color = '#424242';
        $manager->persist($e);

        $e = new Fish();
        $e->name = 'Lamproie';
        $e->description = 'Poisson de vase, ayant une anatomie proche des poissons préhistoriques';
        $e->edible = true;
        $e->habitats = [Fish::HABITAT_LAKE, Fish::HABITAT_RIVER];
        $e->color = '#8d6e63';
        $manager->persist($e);

        $e = new Fish();
        $e->name = 'Gardon';
        $e->description = 'Poisson d\'eau douce trés commun';
        $e->edible = false;
        $e->habitats = [Fish::HABITAT_LAKE, Fish::HABITAT_RIVER];
        $e->color = '#b0bec5';
        $manager->persist($e);

        $manager->flush();
    }

    /**
     * @param ObjectManager $manager
     */
    private function loadFileWriterTask(ObjectManager $manager)
    {
        $fw = new UmbrellaFileWriterConfig(FwFishHandler::class);
        $fw->outputFilePath = 'foo/bar/test.txt';
        $fw->outputPrettyFilename = 'test.txt';
        $t = new Task(TaskFileWriterHandler::class);
        $t->type = BaseTask::TYPE_FILEWRITER;
        $t->fileWriterConfig = $fw;
        $t->state = BaseTask::STATE_PENDING;
        $t->displayAsNotification = true;
        $manager->persist($t);

        $fw = new UmbrellaFileWriterConfig(FwFishHandler::class);
        $fw->outputFilePath = 'foo/bar/test2.txt';
        $fw->outputPrettyFilename = 'test2.txt';
        $t = new Task(TaskFileWriterHandler::class);
        $t->type = BaseTask::TYPE_FILEWRITER;
        $t->fileWriterConfig = $fw;
        $t->state = BaseTask::STATE_RUNNING;
        $t->startedAt = new \DateTime('-1 minutes');
        $t->displayAsNotification = true;
        $manager->persist($t);

        $fw = new UmbrellaFileWriterConfig(FwFishHandler::class);
        $fw->outputFilePath = 'foo/bar/test3.txt';
        $fw->outputPrettyFilename = 'test3.txt';
        $t = new Task(TaskFileWriterHandler::class);
        $t->type = BaseTask::TYPE_FILEWRITER;
        $t->fileWriterConfig = $fw;
        $t->state = BaseTask::STATE_FINISHED;
        $t->startedAt = new \DateTime('-5 minutes');
        $t->endedAt = new \DateTime('-1 minutes');
        $t->displayAsNotification = true;
        $manager->persist($t);

        $fw = new UmbrellaFileWriterConfig(FwFishHandler::class);
        $fw->outputFilePath = 'foo/bar/test4.txt';
        $fw->outputPrettyFilename = 'test4.txt';
        $t = new Task(TaskFileWriterHandler::class);
        $t->type = BaseTask::TYPE_FILEWRITER;
        $t->fileWriterConfig = $fw;
        $t->state = BaseTask::STATE_FAILED;
        $t->errorOutput = 'Ooops, There is an error ...';
        $t->startedAt = new \DateTime('-5 minutes');
        $t->endedAt = new \DateTime('-1 minutes');
        $t->displayAsNotification = true;
        $manager->persist($t);

        $manager->flush();
    }
}
