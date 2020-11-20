<?php

namespace App\Controller\Admin;

use App\Form\Schedule\NewFishType;
use App\Task\ExportFishTask;
use App\Task\NewFishTask;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Component\Schedule\ScheduleHelper;
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
    public function indexAction(ScheduleHelper $scheduleHelper, Request $request)
    {
        $newFishForm = $this->createForm(NewFishType::class);
        $newFishForm->handleRequest($request);

        if ($newFishForm->isSubmitted() && $newFishForm->isValid()) {
            $speciesId = intval($newFishForm->getData()['speciesId']);

            $id = $scheduleHelper
                ->schedule()
                ->setDescription('Ajouter une nouvelle espèce de poisson.')
                ->setTask(NewFishTask::class)
                ->setContext(['species_id' => $speciesId])
                ->register();

            return $this->redirectToRoute('app_admin_schedule_index', [
                'job_id' => $id,
            ]);
        }

        if ($request->query->get('export_fish')) {
            $id = $scheduleHelper
                ->schedule()
                ->setDescription('Exporter tous les poissons de la base')
                ->setTask(ExportFishTask::class)
                ->register();

            $scheduleHelper->run($id);
            $context = $scheduleHelper->getContext($id);

            $response = new Response($context['output']);

            $disposition = $response->headers->makeDisposition(
                ResponseHeaderBag::DISPOSITION_ATTACHMENT,
                'fishes.csv'
            );
            $response->headers->set('Content-Disposition', $disposition);

            return $response;
        }

        return $this->render('schedule/index.html.twig', [
            'new_fish_form' => $newFishForm->createView(),
        ]);
    }
}
