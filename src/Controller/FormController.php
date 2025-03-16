<?php

namespace App\Controller;

use App\Entity\FormMock;
use App\Entity\SpaceMission;
use App\Form\FormAutocompleteType;
use App\Form\FormCommonType;
use App\Repository\SpaceMissionRepository;
use App\Service\AppHelper;
use App\Service\FileUploader;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Umbrella\AdminBundle\Lib\Controller\AdminController;

#[Route('/form')]
class FormController extends AdminController
{
    #[Route('/common')]
    public function common(AppHelper $helper, FileUploader $fileUploader, Request $request): Response
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

            $this->toastSuccess('Item updated');
            return $this->redirectToRoute('app_form_common');
        }

        return $this->render('form/common.html.twig', [
            'form' => $form->createView(),
            'entity' => $entity
        ]);
    }

    #[Route('/autocomplete')]
    public function autocomplete(AppHelper $helper, Request $request): Response
    {
        $entity = $helper->loadOne(FormMock::class);
        $form = $this->createForm(FormAutocompleteType::class, $entity);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->persistAndFlush($entity);

            $this->toastSuccess('Item updated');
            return $this->redirectToRoute('app_form_autocomplete');
        }

        return $this->render('form/autocomplete.html.twig', [
            'form' => $form->createView()
        ]);
    }

    #[Route('/load-mission')]
    public function loadMission(SpaceMissionRepository $repository, Request $request): Response
    {
        $query = $request->query->getString('query');
        $page = max(1, $request->query->getInt('page', 1));

        $missions = $repository->search($query, $page, FormAutocompleteType::MISSION_PAGE_LENGTH);

        $results = array_map(fn (SpaceMission $mission) => [
            'value' => $mission->id,
            'text' => $mission->detail,
            'description' => $mission->companyName,
        ], $missions);

        return new JsonResponse([
            'results' => $results,
            'next_url' => count($results) > 0
                ? $this->generateUrl('app_form_loadmission', ['page' => $page + 1, 'query' => $query])
                : null,
        ]);
    }
}
