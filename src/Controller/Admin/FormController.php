<?php

namespace App\Controller\Admin;

use App\AppHelper;
use App\Entity\FormMock;
use App\Entity\SpaceMission;
use App\Form\FormCommonType;
use App\Form\FormSelect2Type;
use App\Repository\SpaceMissionRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use function Symfony\Component\Translation\t;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * @Route("/form")
 */
class FormController extends BaseController
{
    /**
     * @Route("/theme")
     */
    public function theme()
    {
        return $this->render('admin/form/theme.html.twig');
    }

    /**
     * @Route("/common")
     */
    public function common(AppHelper $helper, Request $request)
    {
        $entity = $helper->loadOne(FormMock::class);
        $form = $this->createForm(FormCommonType::class, $entity);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->persistAndFlush($entity);

            $this->toastSuccess(t('Item updated'));
            return $this->redirectToRoute('app_admin_form_common');
        }

        return $this->render('admin/form/common.html.twig', [
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/select2")
     */
    public function select2(AppHelper $helper, Request $request)
    {
        $entity = $helper->loadOne(FormMock::class);
        $form = $this->createForm(FormSelect2Type::class, $entity);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->persistAndFlush($entity);

            $this->toastSuccess(t('Item updated'));
            return $this->redirectToRoute('app_admin_form_select2');
        }

        return $this->render('admin/form/select2.html.twig', [
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/load-mission")
     */
    public function loadMission(SpaceMissionRepository $repository, Request $request)
    {
        $results = $repository->search($request->query->get('q'));
        $serialized = [];

        foreach ($results as $mission) {
            $serialized[] = [
                'id' => $mission->id,
                'text' => $mission->detail,
                'description' => $mission->companyName,
            ];
        }

        return new JsonResponse($serialized);
    }

    /**
     * @Route("/load-mission/paginate")
     */
    public function loadMissionAndPaginate(SpaceMissionRepository $repository, Request $request)
    {
        $results = $repository->searchAndPaginate($request->query->get('q'), $request->query->getInt('page', 1));
        $serialized = [
            'results' => [],
            'more' => $results['more']
        ];

        /** @var SpaceMission $mission */
        foreach ($results['results'] as $mission) {
            $serialized['results'][] = [
                'id' => $mission->id,
                'text' => $mission->detail,
                'description' => $mission->companyName,
            ];
        }

        return new JsonResponse($serialized);
    }
}
