<?php

namespace App\Controller\Admin;

use App\Entity\Fish;
use App\Entity\FormFields;
use App\Form\FormFieldsType;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use function Symfony\Component\Translation\t;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * Class FormController
 *
 * @Route("/form")
 */
class FormController extends BaseController
{
    /**
     * @Route("")
     */
    public function indexAction(Request $request)
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
     * @Route("/fish-api")
     */
    public function fishApiAction(Request $request)
    {
        $qb = $this->em()->createQueryBuilder();
        $qb->select('e');
        $qb->from(Fish::class, 'e');

        $q = trim($request->query->get('q'));
        if (!empty($q)) {
            $qb->andWhere('LOWER(e.search) LIKE :search');
            $qb->setParameter('search', '%' . strtolower($q) . '%');
        }

        $serialized = [];

        /** @var Fish $fish */
        foreach ($qb->getQuery()->getResult() as $fish) {
            $serialized[] = [
                'id' => $fish->id,
                'text' => $fish->name,
                'description' => $fish->description,
            ];
        }

        return new JsonResponse($serialized);
    }
}
