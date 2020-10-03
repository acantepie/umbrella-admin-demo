<?php

namespace App\DataFixtures;

use App\Entity\Fish;
use App\Entity\User;
use App\Entity\UserGroup;
use Umbrella\CoreBundle\Entity\Task;
use Doctrine\Persistence\ObjectManager;
use App\FileWriter\CsvFileWriterHandler;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Umbrella\AdminBundle\Entity\FileWriterTaskConfig;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{
    /**
     * @var UserPasswordEncoderInterface
     */
    private $userPasswordEncoder;

    /**
     * AppFixtures constructor.
     * @param UserPasswordEncoderInterface $userPasswordEncoder
     */
    public function __construct(UserPasswordEncoderInterface $userPasswordEncoder)
    {
        $this->userPasswordEncoder = $userPasswordEncoder;
    }

    /**
     * @param ObjectManager $manager
     */
    public function load(ObjectManager $manager)
    {
        $this->loadUser($manager);
        $this->loadFish($manager);
        //$this->loadFileWriterTask($manager);
    }

    private function loadUser(ObjectManager $manager)
    {
        $u = new User();
        $u->firstname = 'Adrien';
        $u->lastname = 'Cantepie';
        $u->email = 'adrien.cantepie@gmail.com';
        $u->plainPassword = $u->email;
        $u->password = $this->userPasswordEncoder->encodePassword($u, $u->plainPassword);

        $g = new UserGroup();
        $g->title = 'Administrateur';
        $g->roles = ['ROLE_ADMIN'];
        $u->addGroup($g);

        $manager->persist($g);
        $manager->persist($u);
        $manager->flush();
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
        $fw = new FileWriterTaskConfig(CsvFileWriterHandler::class);
        $fw->fwLabel = 'Test 1';
        $fw->fwOutputFilename = 'test.txt';
        $t = new Task();
        $t->config = $fw;
        $t->state = Task::STATE_PENDING;
        $manager->persist($t);

        $fw = new FileWriterTaskConfig(CsvFileWriterHandler::class);
        $fw->fwLabel = 'Test 2';
        $fw->fwOutputFilename = 'test.txt';
        $t = new Task();
        $t->config = $fw;
        $t->state = Task::STATE_RUNNING;
        $t->startedAt = new \DateTime('-1 minutes');
        $manager->persist($t);

        $fw = new FileWriterTaskConfig(CsvFileWriterHandler::class);
        $fw->fwLabel = 'Test 3';
        $fw->fwOutputFilename = 'test.txt';
        $t = new Task();
        $t->config = $fw;
        $t->state = Task::STATE_FINISHED;
        $t->startedAt = new \DateTime('-5 minutes');
        $t->endedAt = new \DateTime('-1 minutes');
        $manager->persist($t);

        $fw = new FileWriterTaskConfig(CsvFileWriterHandler::class);
        $fw->fwLabel = 'Test 4';
        $fw->fwOutputFilename = 'test.txt';
        $t = new Task();
        $t->config = $fw;
        $t->state = Task::STATE_FAILED;
        $t->errorOutput = 'Ooops, There is an error ...';
        $t->startedAt = new \DateTime('-5 minutes');
        $t->endedAt = new \DateTime('-1 minutes');
        $manager->persist($t);

        $manager->flush();
    }
}
