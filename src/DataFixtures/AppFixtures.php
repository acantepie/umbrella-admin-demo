<?php

namespace App\DataFixtures;

use App\Entity\FormFields;
use App\Entity\FormFieldsItem;
use App\Entity\Notification;
use App\Entity\SpaceMission;
use App\Entity\SpaceMissionClassification;
use App\Entity\User;
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

    private function loadFormFields(ObjectManager $manager)
    {
        $e = new FormFields();

        // Date
        $e->date = new \DateTime();

        // Ckeditor
        $e->htmlText = '<p><strong>Hello world !</strong></p>';

        // Collection
        $i = new FormFieldsItem();
        $i->label = 'NASA';
        $i->description = 'National Aeronautics and Space Administration - independent agency of the U.S. federal government ';
        $e->addItem($i);

        $i = new FormFieldsItem();
        $i->label = 'ESA';
        $i->description = 'European Space Agency - intergovernmental organisation of 22 member states';
        $e->addItem($i);

        $e->strings = ['symfony', 'admin', 'umbrella'];

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
        $notification->url = $this->router->generate('app_admin_notification_index');

        $manager->persist($notification);
        $manager->flush();
    }
}
