<?php

namespace App\Controller\Admin;

use App\DataTable\ApiTableType;
use App\DataTable\DraggableFishTable;
use App\DataTable\FishCategoryTableType;
use App\DataTable\FishTableType;
use App\Entity\Fish;
use App\Entity\FishCategory;
use App\Form\FishCategoryType;
use App\Form\FishType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use function Symfony\Component\Translation\t;
use Umbrella\CoreBundle\Component\DataTable\Adapter\EntityAdapter;
use Umbrella\CoreBundle\Component\DataTable\DTO\ChangeSet;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * @Route("/datatable")
 */
class DatatableController extends BaseController
{
    /**
     * @Route("/table")
     */
    public function tableAction(Request $request)
    {
        $table = $this->createTable(FishTableType::class, [
            'exportable' => true
        ]);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('@UmbrellaAdmin/DataTable/index.html.twig', [
            'table' => $table,
        ]);
    }

    /**
     * @Route("/table-2")
     */
    public function table2Action(Request $request)
    {
        // If same action handle multiple instance on same TableType you must type different id for each of them

        $edibleTable = $this->createTable(FishTableType::class, ['id' => 'simple_table_1', 'edible' => true]);
        $edibleTable->handleRequest($request);

        $notEdibleTable = $this->createTable(FishTableType::class, ['id' => 'simple_table_2', 'edible' => false]);
        $notEdibleTable->handleRequest($request);

        if ($edibleTable->isCallback()) {
            return $edibleTable->getCallbackResponse();
        }

        if ($notEdibleTable->isCallback()) {
            return $notEdibleTable->getCallbackResponse();
        }

        return $this->render('admin/datatable/multiple.html.twig', [
            'edible_table' => $edibleTable,
            'notedible_table' => $notEdibleTable,
        ]);
    }

    /**
     * @Route("/table-3")
     */
    public function table3Action(Request $request)
    {
        $table = $this->createTable(DraggableFishTable::class);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('@UmbrellaAdmin/DataTable/index.html.twig', [
            'table' => $table,
        ]);
    }

    /**
     * @Route("/table-api")
     */
    public function tableApiAction(Request $request)
    {
        $table = $this->createTable(ApiTableType::class);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('@UmbrellaAdmin/DataTable/index.html.twig', [
            'table' => $table,
        ]);
    }

    /**
     * @Route("/table-tree")
     */
    public function tableTreeAction(Request $request)
    {
        $table = $this->createTable(FishCategoryTableType::class);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('@UmbrellaAdmin/DataTable/index.html.twig', [
            'table' => $table,
        ]);
    }

    // CRUD fish

    /**
     * @Route(path="/fish/{id}", requirements={"id": "\d+"})
     */
    public function fishEditAction(Request $request, $id = null)
    {
        if (null === $id) {
            $entity = new Fish();
        } else {
            $entity = $this->findOrNotFound(Fish::class, $id);
        }

        $form = $this->createForm(FishType::class, $entity);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->persistAndFlush($entity);

            return $this->jsResponseBuilder()
                ->closeModal()
                ->reloadTable()
                ->toastSuccess(t('message.entity_updated'));
        }

        return $this->jsResponseBuilder()
            ->openModalView('@UmbrellaAdmin/edit_modal.html.twig', [
                'form' => $form->createView(),
                'entity' => $entity,
            ]);
    }

    /**
     * @Route(path="/fish/del/{id}", requirements={"id": "\d+"})
     */
    public function fishDeleteAction($id)
    {
        $entity = $this->findOrNotFound(Fish::class, $id);
        $this->removeAndFlush($entity);

        return $this->jsResponseBuilder()
            ->reloadTable()
            ->toastSuccess(t('message.entity_deleted'));
    }

    /**
     * @Route(path="/fish/update-sequence")
     */
    public function updateSequenceAction(Request $request)
    {
        $changeSet = ChangeSet::createFromRequest($request);
        $changeSet->apply($this->em(), Fish::class, 'sequence');

        return $this
            ->jsResponseBuilder()
            ->reloadTable();
    }

    // CRUD category

    /**
     * @Route("/category/{id}", requirements={"id": "\d+"})
     */
    public function categoryEditAction(Request $request, $id = null)
    {
        if (null === $id) {
            $entity = new FishCategory();
            $entity->parent = $this->getRepository(FishCategory::class)->findRoot(true);
        } else {
            $entity = $this->findOrNotFound(FishCategory::class, $id);
        }

        $form = $this->createForm(FishCategoryType::class, $entity);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->persistAndFlush($entity);

            return $this->jsResponseBuilder()
                ->closeModal()
                ->toastSuccess(t('message.entity_updated'))
                ->reloadTable();
        }

        return $this->jsResponseBuilder()
            ->openModalView('@UmbrellaAdmin/edit_modal.html.twig', [
                'form' => $form->createView(),
                'entity' => $entity,
            ]);
    }

    /**
     * @Route("/category/del/{id}", requirements={"id": "\d+"})
     */
    public function categoryDeleteAction($id)
    {
        $entity = $this->findOrNotFound(FishCategory::class, $id);
        $this->removeAndFlush($entity);

        return $this->jsResponseBuilder()
            ->reloadTable()
            ->toastSuccess(t('message.entity_deleted'));
    }

    // Dump

    /**
     * @Route("/dump/selected")
     */
    public function dumpSelectedAction(Request $request)
    {
        $table = $this->createTable(FishTableType::class);

        /** @var EntityAdapter $adapter */
        $adapter = $table->getAdapter();
        $fishes = $adapter
            ->getQueryBuilder($table->createRequest(), $table->getAdapterOptions())
            ->andWhere('e.id IN (:ids)')
            ->setParameter('ids', $request->query->get('ids'))
            ->getQuery()
            ->getResult();

        return $this->csvResponse($fishes);
    }

    /**
     * @Route("/dump/filtered")
     */
    public function dumpFilteredAction(Request $request)
    {
        $table = $this->createTable(FishTableType::class, [
            'paging' => false
        ]);

        /** @var EntityAdapter $adapter */
        $adapter = $table->getAdapter();
        $fishes = $adapter
            ->getQueryBuilder($table->createRequest($request), $table->getAdapterOptions())
            ->getQuery()
            ->getResult();

        return $this->csvResponse($fishes);
    }

    /**
     * @param Fish[] $fishes
     */
    private function csvResponse(array $fishes): Response
    {
        $fp = fopen('php://temp', 'w');
        foreach ($fishes as $fish) {
            fputcsv($fp, [
                $fish->name,
                $fish->description,
                $fish->edible ? 'Oui' : 'Non',
            ], ';');
        }
        rewind($fp);

        $response = new Response(\stream_get_contents($fp));
        fclose($fp);

        $response->headers->set('Content-Type', 'text/csv');
        $response->headers->set('Content-Disposition', 'attachment; filename="export.csv"');

        return $response;
    }
}
