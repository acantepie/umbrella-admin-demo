<?php

namespace App\Controller;

use App\Entity\FormMock;
use App\Form\FormCommonType;
use App\Form\FormSelectType;
use App\Repository\SpaceMissionRepository;
use App\Service\AppHelper;
use App\Service\FileUploader;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use function Symfony\Component\Translation\t;
use Umbrella\CoreBundle\Controller\BaseController;

#[Route('/form')]
class FormController extends BaseController
{
    #[Route('/common')]
    public function common(AppHelper $helper, FileUploader $fileUploader, Request $request)
    {
        $entity = $helper->loadOne(FormMock::class);
        $form = $this->createForm(FormCommonType::class, $entity);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            /** @var ?UploadedFile $file */
            $file = $form->get('file')->getData();
            if ($file) {
                $entity->filename = $fileUploader->upload($file);
            }

            $this->persistAndFlush($entity);

            $this->toastSuccess(t('Item updated'));
            return $this->redirectToRoute('app_form_common');
        }

        return $this->render('form/common.html.twig', [
            'form' => $form->createView(),
            'entity' => $entity
        ]);
    }

    #[Route('/select')]
    public function select(AppHelper $helper, Request $request)
    {
        $entity = $helper->loadOne(FormMock::class);
        $form = $this->createForm(FormSelectType::class, $entity);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->persistAndFlush($entity);

            $this->toastSuccess(t('Item updated'));
            return $this->redirectToRoute('app_form_select');
        }

        return $this->render('form/select.html.twig', [
            'form' => $form->createView()
        ]);
    }

    #[Route('/load-mission')]
    public function loadMission(SpaceMissionRepository $repository, Request $request)
    {
        $q = $request->query->get('q');

        if ($request->query->has('p')) {
            $results = $repository->search($q, $request->query->getInt('p', 1), FormSelectType::MISSION_PAGE_LENGTH);
        } else {
            $results = $repository->search($q);
        }

        $serialized = [];

        foreach ($results as $mission) {
            $serialized[] = [
                'value' => $mission->id,
                'text' => $mission->detail,
                'description' => $mission->companyName,
            ];
        }

        return new JsonResponse($serialized);
    }
}
