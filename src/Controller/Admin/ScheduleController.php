<?php

namespace App\Controller\Admin;

use App\Entity\DummyRuntimeEnv;
use App\Form\Schedule\NewFishType;
use App\Task\DummyTask;
use App\Task\NewFishTask;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Component\Schedule\Scheduler;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * Class ScheduleController
 *
 * @Route("schedule")
 */
class ScheduleController extends BaseController
{
    /**
     * @Route("")
     */
    public function indexAction(Scheduler $scheduler, Request $request)
    {
        $newFishForm = $this->createForm(NewFishType::class);
        $newFishForm->handleRequest($request);

        if ($newFishForm->isSubmitted() && $newFishForm->isValid()) {
            $speciesId = intval($newFishForm->getData()['speciesId']);

            $id = $scheduler
                ->create()
                ->setDescription('Ajouter une nouvelle espèce de poisson.')
                ->setTask(NewFishTask::class, ['species_id' => $speciesId])
                ->register();

            return $this->redirectToRoute('app_admin_schedule_index', [
                'job_id' => $id
            ]);
        }

        if ($request->query->get('job_ls')) {
            $id = $scheduler
                ->create()
                ->setDescription('Lister les fichiers du projet')
                ->setShellCommand(['ls', '-l'])
                ->register();

            return $this->redirectToRoute('app_admin_schedule_index', [
                'job_id' => $id
            ]);
        }

        return $this->render('schedule/index.html.twig', [
            'new_fish_form' => $newFishForm->createView()
        ]);
    }

}
