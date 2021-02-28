<?php

namespace App\DataFixtures;

use App\Entity\Fish;
use App\Entity\FishCategory;
use App\Entity\FormFields;
use App\Entity\FormFieldsItem;
use App\Entity\Notification;
use App\Entity\User;
use App\Entity\UserGroup;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Umbrella\CoreBundle\Entity\UmbrellaFile;

class AppFixtures extends Fixture
{
    private UserPasswordEncoderInterface $userPasswordEncoder;
    private RouterInterface $router;

    /**
     * @var Fish[]
     */
    private $fishes = [];

    /**
     * AppFixtures constructor.
     */
    public function __construct(UserPasswordEncoderInterface $userPasswordEncoder, RouterInterface $router)
    {
        $this->userPasswordEncoder = $userPasswordEncoder;
        $this->router = $router;
    }

    public function load(ObjectManager $manager)
    {
        $this->loadUser($manager);
        $this->loadFish($manager);
        $this->loadFishCategory($manager);
        $this->loadFormFields($manager);
        $this->loadNotifications($manager);
    }

    private function loadUser(ObjectManager $manager)
    {
        $u = new User();
        $u->firstname = 'John';
        $u->lastname = 'Doe';
        $u->email = 'john.doe@mail.com';
        $u->plainPassword = $u->email;
        $u->password = $this->userPasswordEncoder->encodePassword($u, $u->plainPassword);

        $u->avatar = UmbrellaFile::createFromPath(__DIR__ . '/files/me.png');

        $g = new UserGroup();
        $g->title = 'Administrateur';
        $g->roles = ['ROLE_ADMIN'];
        $u->addGroup($g);

        $manager->persist($g);
        $manager->persist($u);
        $manager->flush();
    }

    private function loadFish(ObjectManager $manager)
    {
        $e = new Fish();
        $e->sequence = 1;
        $e->name = 'Saumon';
        $e->description = 'Poisson migrateur dont la chaire est appréciée';
        $e->edible = true;
        $e->color = '#f06292';
        $e->habitats = [Fish::HABITAT_LAKE, Fish::HABITAT_RIVER, Fish::HABITAT_SEA];
        $manager->persist($e);

        $this->fishes[] = $e;

        $e = new Fish();
        $e->sequence = 2;
        $e->name = 'Poisson rouge';
        $e->description = 'Poisson de compagnie';
        $e->edible = false;
        $e->habitats = [Fish::HABITAT_LAKE];
        $e->color = '#f44336';
        $manager->persist($e);

        $this->fishes[] = $e;

        $e = new Fish();
        $e->sequence = 3;
        $e->name = 'Anguille';
        $e->description = 'Poisson long et visqueux';
        $e->edible = true;
        $e->habitats = [Fish::HABITAT_LAKE, Fish::HABITAT_RIVER, Fish::HABITAT_SEA];
        $e->color = '#424242';

        $this->fishes[] = $e;
        $manager->persist($e);

        $e = new Fish();
        $e->sequence = 4;
        $e->name = 'Lamproie';
        $e->description = 'Poisson de vase, ayant une anatomie proche des poissons préhistoriques';
        $e->edible = true;
        $e->habitats = [Fish::HABITAT_LAKE, Fish::HABITAT_RIVER];
        $e->color = '#8d6e63';

        $this->fishes[] = $e;
        $manager->persist($e);

        $e = new Fish();
        $e->sequence = 5;
        $e->name = 'Gardon';
        $e->description = 'Poisson d\'eau douce trés commun';
        $e->edible = false;
        $e->habitats = [Fish::HABITAT_LAKE, Fish::HABITAT_RIVER];
        $e->color = '#b0bec5';

        $this->fishes[] = $e;
        $manager->persist($e);

        $manager->flush();
    }

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

    private function loadFormFields(ObjectManager $manager)
    {
        $e = new FormFields();

        $fishes = $this->fishes;
        shuffle($fishes);

        // Date
        $e->date = new \DateTime();

        // select 2
        $e->fishEntities->add($fishes[0]);
        $e->fishEntities->add($fishes[1]);
        $e->asyncFishEntities->add($fishes[2]);
        $e->tags = ['Umbrella', 'Admin'];

        // File
        $e->file = UmbrellaFile::createFromPath(__DIR__ . '/files/me.png');

        // Ckeditor
        $e->htmlText = '<p><strong>Hello world !</strong></p>';

        // Collection
        $i = new FormFieldsItem();
        $i->label = 'Gardon';
        $i->description = 'Poisson d\'eau douce trés commun';
        $e->addItem($i);

        $i = new FormFieldsItem();
        $i->label = 'Anguille';
        $i->description = 'Poisson long et visqueux';
        $e->addItem($i);

        $manager->persist($e);
        $manager->flush();
    }

    private function loadNotifications(ObjectManager $manager)
    {
        $notification = new Notification();
        $notification->bgIcon = 'bg-danger';
        $notification->icon = 'mdi mdi-umbrella';
        $notification->title = 'Notification are now available !';
        $notification->createdAt = new \DateTime('02/07/2021');
        $notification->sendToAll = true;
        $notification->url = $this->router->generate('app_admin_notification_howto');

        $manager->persist($notification);
        $manager->flush();
    }
}
