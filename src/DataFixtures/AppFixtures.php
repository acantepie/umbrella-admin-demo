<?php

namespace App\DataFixtures;

use App\Entity\AdminNotification;
use App\Entity\AdminUser;
use App\Entity\FormMock;
use App\Entity\FormMockItem;
use App\Entity\SpaceMission;
use App\Entity\SpaceMissionClassification;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\RouterInterface;

class AppFixtures extends Fixture
{
    private UserPasswordHasherInterface $userPasswordHasher;
    private RouterInterface $router;

    /**
     * @var SpaceMission[]
     */
    private array $missions = [];

    /**
     * AppFixtures constructor.
     */
    public function __construct(UserPasswordHasherInterface $userPasswordHasher, RouterInterface $router)
    {
        $this->userPasswordHasher = $userPasswordHasher;
        $this->router = $router;
    }

    public function load(ObjectManager $manager)
    {
        $this->loadUser($manager);
        $this->loadSpaceMission($manager);
        $this->loadSpaceMissionClassification($manager);
        $this->loadFormMock($manager);
        $this->loadNotifications($manager);
    }

    private function loadUser(ObjectManager $manager)
    {
        $u = new AdminUser();
        $u->firstname = 'John';
        $u->lastname = 'Doe';
        $u->email = 'john.doe@mail.com';
        $u->plainPassword = $u->email;
        $u->password = $this->userPasswordHasher->hashPassword($u, $u->plainPassword);

        $manager->persist($u);
        $manager->flush();
    }

    private function loadSpaceMission(ObjectManager $manager)
    {
        $handle = fopen(__DIR__ . '/data/space_mission.csv', 'r');

        $c = 0;
        while (false !== ($row = fgetcsv($handle))) {
            ++$c;
            if (1 === $c) {
                continue;
            }

            $spaceMission = new SpaceMission();
            $spaceMission->sequence = $c - 1;
            $spaceMission->companyName = $row[2];
            $spaceMission->location = $row[3];
            $spaceMission->date = new \DateTime($row[4]);
            $spaceMission->detail = $row[5];
            $spaceMission->rocketStatus = str_replace('Status', '', $row[6]);

            $price = (int) $row[7];
            $spaceMission->cost = $price > 0 ? $price : null;
            $spaceMission->missionStatus = str_replace(' ', ' ', $row[8]);

            $manager->persist($spaceMission);

            if (count($this->missions) < 50) {
                $this->missions[] = $spaceMission;
            }
        }

        $manager->flush();
    }

    /**
     * @param EntityManagerInterface $manager
     */
    private function loadSpaceMissionClassification(ObjectManager $manager)
    {
        $root = new SpaceMissionClassification();

        $result = $manager->createQuery(sprintf('SELECT DISTINCT e.companyName FROM %s e', SpaceMission::class))->getArrayResult();
        foreach ($result as $row) {
            $cCompany = new SpaceMissionClassification($row['companyName'], SpaceMissionClassification::COMPANY);
            $root->addChild($cCompany);

            foreach (SpaceMission::MISSION_STATUSES as $status) {
                $missions = $manager->getRepository(SpaceMission::class)->findBy(
                    ['companyName' => $cCompany->name, 'missionStatus' => $status], null, 3
                );

                if (count($missions) > 0) {
                    $cStatus = new SpaceMissionClassification($status, SpaceMissionClassification::STATUS);
                    $cCompany->addChild($cStatus);

                    foreach ($missions as $mission) {
                        $cMission = new SpaceMissionClassification($mission->detail, SpaceMissionClassification::MISSION);
                        $cStatus->addChild($cMission);
                    }
                }
            }
        }

        $manager->persist($root);
        $manager->flush();
    }

    private function loadFormMock(ObjectManager $manager)
    {
        $e = new FormMock();
        $e->date = new \DateTime();
        $e->richText = 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.';

        $i = new FormMockItem();
        $i->label = 'NASA';
        $i->date = new \DateTime('NOW');
        $e->addCollectionItem($i);
        $i = new FormMockItem();
        $i->label = 'ESA';
        $e->addCollectionItem($i);

        $i = new FormMockItem();
        $i->label = 'NASA';
        $i->order = 0;
        $i->date = new \DateTime('NOW');
        $e->addCollectionOrderableItem($i);
        $i = new FormMockItem();
        $i->label = 'ESA';
        $i->order = 1;
        $e->addCollectionOrderableItem($i);

        $manager->persist($e);
        $manager->flush();
    }

    private function loadNotifications(ObjectManager $manager)
    {
        $notification = new AdminNotification();
        $notification->iconColor = 'danger';
        $notification->icon = 'mdi mdi-umbrella';
        $notification->title = 'Notification are now available !';
        $notification->createdAt = new \DateTime('02/07/2021');
        $notification->url = $this->router->generate('app_admin_notification_index');

        $manager->persist($notification);
        $manager->flush();
    }
}
