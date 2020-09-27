<?php
/**
 * Created by PhpStorm.
 * User: acantepie
 * Date: 28/03/20
 * Time: 18:45
 */

namespace App\Controller\Admin;

use App\Entity\FormEntity;
use App\Form\FormEntityType;
use App\Entity\FormJoinEntity;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
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
        $this->initData();

        /** @var FormEntity $entity */
        $entity = $this->loadEntity(FormEntity::class);
        $form = $this->createForm(FormEntityType::class, $entity);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->persistAndFlush($entity);

            $this->toastSuccess('message.entity_updated');
            return $this->redirectToRoute('app_admin_form_index');
        }

        return $this->render('form/index.html.twig', [
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/get")
     */
    public function getAction()
    {
        return new JsonResponse($this->em()->getRepository(FormJoinEntity::class)->findAll());
    }

    /**
     * @param $entityClass
     * @return object
     */
    private function loadEntity($entityClass)
    {
        $entity = $this->em()->createQuery(sprintf('SELECT e FROM %s e', $entityClass))->setMaxResults(1)->getOneOrNullResult();
        return $entity ? $entity : new $entityClass();
    }

    private function initData()
    {
        $repo = $this->em()->getRepository(FormJoinEntity::class);

        if (count($repo->findAll()) === 0) {
            $e = new FormJoinEntity();
            $e->label = 'Cheval';
            $e->description = 'Animal d\'elevage a 4 pattes';
            $this->em()->persist($e);

            $e = new FormJoinEntity();
            $e->label = 'Chat';
            $e->description = 'Animal de compagnie';
            $this->em()->persist($e);

            $e = new FormJoinEntity();
            $e->label = 'Poisson';
            $e->description = 'Animal vivan dans l\'eau';
            $this->em()->persist($e);

            $e = new FormJoinEntity();
            $e->label = 'Oiseau';
            $e->description = 'Animal a plume';
            $this->em()->persist($e);

            $this->em()->flush();
        }
    }
}
