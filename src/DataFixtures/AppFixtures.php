<?php

namespace App\DataFixtures;

use App\Entity\Fish;
use App\Entity\FormExample\CollectionExample;
use App\Entity\FormExample\CollectionItemExample;
use App\Entity\User;
use App\Entity\UserGroup;
use App\Entity\FishCategory;
use App\Entity\FormExample\BaseExample;
use App\Entity\FormExample\DateExample;
use Doctrine\Persistence\ObjectManager;
use App\Entity\FormExample\Select2Example;
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
        $this->loadFormExample($manager);
        $this->loadUser($manager);
        $this->loadFish($manager);
        $this->loadFishCategory($manager);
    }

    private function loadFormExample(ObjectManager $manager)
    {
        $e = new BaseExample();
        $manager->persist($e);

        $e = new DateExample();
        $manager->persist($e);

        $e = new Select2Example();
        $manager->persist($e);

        $e = new CollectionExample();
        $manager->persist($e);

        $i = new CollectionItemExample();
        $i->label = 'Gardon';
        $i->description = 'Poisson d\'eau douce trés commun';
        $i->parent = $e;
        $manager->persist($i);

        $i = new CollectionItemExample();
        $i->label = 'Anguille';
        $i->description = 'Poisson long et visqueux';
        $i->parent = $e;
        $manager->persist($i);

        $manager->flush();
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
    private function loadFishCategory(ObjectManager $manager)
    {
        $r = new FishCategory();
        $r->name = 'Root';
        $manager->persist($r);

        $c1 = new FishCategory();
        $c1->name = 'Petit';
        $c1->description = 'Taille < 30cm';
        $c1->parent = $r;
        $manager->persist($c1);

        $cc1 = new FishCategory();
        $cc1->name = 'Eau chaude';
        $cc1->description = 'Eau T° > 15°';
        $cc1->parent = $c1;
        $manager->persist($cc1);

        $cc2 = new FishCategory();
        $cc2->name = 'Eau froide';
        $cc2->description = 'Eau T° < 15°';
        $cc2->parent = $c1;
        $manager->persist($cc2);

        $ccc1 = new FishCategory();
        $ccc1->name = 'Lac de montagne';
        $ccc1->description = 'Lac d\'altitude';
        $ccc1->parent = $cc2;
        $manager->persist($ccc1);

        $ccc2 = new FishCategory();
        $ccc2->name = 'Océan Atlantique';
        $ccc2->description = '';
        $ccc2->parent = $cc2;
        $manager->persist($ccc2);

        $c2 = new FishCategory();
        $c2->name = 'Moyen';
        $c2->description = 'Taille comprise entre 30cm et 1m';
        $c2->parent = $r;
        $manager->persist($c2);

        $c3 = new FishCategory();
        $c3->name = 'Grand';
        $c3->description = 'Taille > 1m';
        $c3->parent = $r;
        $manager->persist($c3);

        $manager->flush();
    }
}
