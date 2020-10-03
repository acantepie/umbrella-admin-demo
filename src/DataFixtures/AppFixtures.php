<?php

namespace App\DataFixtures;

use App\Entity\Fish;
use App\Entity\User;
use App\Entity\UserGroup;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
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
}
