<?php

namespace App\Controller\Admin;

use App\Entity\FormFields;
use App\Entity\SpaceMission;
use App\Form\FormFieldsType;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use function Symfony\Component\Translation\t;
use Umbrella\AdminBundle\Controller\AdminController;

/**
 * Class FormController
 *
 * @Route("/form")
 */
class FormController extends AdminController
{
    /**
     * @Route("")
     */
    public function index(Request $request)
    {
        $entity = $this->em()->createQuery(sprintf('SELECT e FROM %s e', FormFields::class))->getOneOrNullResult();

        $form = $this->createForm(FormFieldsType::class, $entity);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->persistAndFlush($entity);

            $this->toastSuccess(t('message.entity_updated'));

            return $this->redirectToRoute('app_admin_form_index');
        }

        return $this->render('admin/form/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/api")
     */
    public function api(Request $request)
    {
        $qb = $this->em()->createQueryBuilder();
        $qb->select('e');
        $qb->from(SpaceMission::class, 'e');

        $q = trim($request->query->get('query'));

        if (!empty($q)) {
            $qb->andWhere('LOWER(e.search) LIKE :search');
            $qb->setParameter('search', '%' . strtolower($q) . '%');
        }

        $results = [];
        foreach ($qb->getQuery()->toIterable() as $mission) {
            $results[] = [
                'id' => $mission->id,
                'text' => (string) $mission,
                'detail' => $mission->detail,
            ];
        }

        return new JsonResponse(['results' => $results]);
    }
}
