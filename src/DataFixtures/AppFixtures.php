<?php

namespace App\DataFixtures;

use App\Entity\Fish;
use App\Entity\FishCategory;
use App\Entity\FormExample\BaseExample;
use App\Entity\FormExample\CkeditorExample;
use App\Entity\FormExample\CollectionExample;
use App\Entity\FormExample\CollectionItemExample;
use App\Entity\FormExample\DateExample;
use App\Entity\FormExample\FileExample;
use App\Entity\FormExample\Select2Example;
use App\Entity\ManyFile;
use App\Entity\Notification;
use App\Entity\User;
use App\Entity\UserGroup;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Umbrella\AdminBundle\Notification\NotificationManager;
use Umbrella\CoreBundle\Entity\UmbrellaFile;

class AppFixtures extends Fixture
{
    private UserPasswordEncoderInterface $userPasswordEncoder;
    private NotificationManager $notificationManager;
    private RouterInterface $router;

    /**
     * @var Fish[]
     */
    private $fishes = [];

    /**
     * AppFixtures constructor.
     */
    public function __construct(UserPasswordEncoderInterface $userPasswordEncoder, NotificationManager $notificationManager, RouterInterface $router)
    {
        $this->userPasswordEncoder = $userPasswordEncoder;
        $this->notificationManager = $notificationManager;
        $this->router = $router;
    }

    public function load(ObjectManager $manager)
    {
        $this->loadUser($manager);
        $this->loadFish($manager);
        $this->loadFishCategory($manager);
        $this->loadFormExample($manager);
        $this->loadNotifications($manager);
        $this->loadManyFile($manager);
    }

    private function loadUser(ObjectManager $manager)
    {
        $u = new User();
        $u->firstname = 'Adrien';
        $u->lastname = 'Cantepie';
        $u->email = 'adrien.cantepie@gmail.com';
        $u->plainPassword = $u->email;
        $u->password = $this->userPasswordEncoder->encodePassword($u, $u->plainPassword);

        $u->avatar = UmbrellaFile::createFromPath(__DIR__ . '/files/avatar.png');

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
        $e->name = 'Saumon';
        $e->description = 'Poisson migrateur dont la chaire est appréciée';
        $e->edible = true;
        $e->color = '#f06292';
        $e->habitats = [Fish::HABITAT_LAKE, Fish::HABITAT_RIVER, Fish::HABITAT_SEA];
        $manager->persist($e);

        $this->fishes[] = $e;

        $e = new Fish();
        $e->name = 'Poisson rouge';
        $e->description = 'Poisson de compagnie';
        $e->edible = false;
        $e->habitats = [Fish::HABITAT_LAKE];
        $e->color = '#f44336';
        $manager->persist($e);

        $this->fishes[] = $e;

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

    private function loadFormExample(ObjectManager $manager)
    {
        $e = new BaseExample();
        $manager->persist($e);

        $e = new FileExample();
        $manager->persist($e);

        $e = new DateExample();
        $manager->persist($e);

        $e = new CkeditorExample();
        $manager->persist($e);

        $e = new Select2Example();
        $e->requiredManyFishSpecies = ['Saumon', 'Lamproie'];
        foreach ($this->fishes as $fish) {
            $e->fishes->add($fish);
        }
        $e->tags = [Fish::HABITAT_LAKE, Fish::HABITAT_RIVER];
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

    private function loadNotifications(ObjectManager $manager)
    {
        $notification = new Notification();
        $notification->bgIcon = 'bg-danger';
        $notification->icon = 'mdi mdi-umbrella';
        $notification->title = 'Notification are now available !';
        $notification->createdAt = new \DateTime('02/07/2021');
        $notification->sendToAll = true;
        $notification->url = $this->router->generate('app_admin_notification_howto');
        $this->notificationManager->send($notification);
    }

    private function loadManyFile(ObjectManager $manager)
    {
        $e = new ManyFile();
        $e->wallpaperFile = UmbrellaFile::createFromPath(__DIR__ . '/files/wallpaper.jpg');
        $e->billFile = UmbrellaFile::createFromPath(__DIR__ . '/files/bill.png', 'admin.mapping');

        $manager->persist($e);
        $manager->flush();
    }
}
