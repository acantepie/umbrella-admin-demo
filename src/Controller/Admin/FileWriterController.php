<?php

namespace App\Controller\Admin;

use App\Form\HabitatType;
use App\DataTable\FishTableType;
use App\Entity\FileWriterConfig;
use App\FileWriter\FishFileWriterHandler;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Umbrella\CoreBundle\Controller\BaseController;
use Umbrella\AdminBundle\FileWriter\FileWriterManager;

/**
 * Class FileWriterController
 *
 * @Route("file-writer")
 */
class FileWriterController extends BaseController
{
    /**
     * @var FileWriterManager
     */
    private $manager;

    /**
     * FileWriterController constructor.
     * @param FileWriterManager $manager
     */
    public function __construct(FileWriterManager $manager)
    {
        $this->manager = $manager;
    }

    /**
     * @Route("/simple")
     */
    public function simpleAction(Request $request)
    {
        $form = $this->createFormBuilder()
            ->add('habitat', HabitatType::class, ['multiple' => false])
            ->getForm();

        return $this->render('filewriter/simple.html.twig', [
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/sync")
     */
    public function syncAction(Request $request)
    {
        $config = new FileWriterConfig(FishFileWriterHandler::class);
        $config->fwLabel = 'Exemple - mode synchrone';
        $config->fwOutputPrettyFilename = 'sync-exemple.csv';

        return $this->manager->syncDownloadResponse($config);
    }

    /**
     * @Route("/async")
     */
    public function asyncAction(Request $request)
    {
        $config = new FileWriterConfig(FishFileWriterHandler::class);
        $config->fwLabel = 'Exemple - mode asynchrone';
        $config->fwOutputPrettyFilename = 'async-exemple.csv';
        $config->fwDisplayAsNotification = true;

        return $this->manager->asyncJsResponse($config);
    }

    /**
     * @Route("/with-param")
     */
    public function withParamAction(Request $request)
    {
        $config = new FileWriterConfig(FishFileWriterHandler::class);
        $config->fwLabel = 'Exemple - mode paramétré';
        $config->fwOutputPrettyFilename = 'param-exemple.csv';
        $config->habitat = $request->query->get('form')['habitat'];
        return $this->manager->syncDownloadResponse($config);
    }

    /**
     * @Route("/datatable")
     */
    public function datatableAction(Request $request)
    {
        $table = $this->createTable(FishTableType::class, [
            'disabled' => true,
            'exportable' => true
        ]);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return new JsonResponse($table->getApiResults());
        }

        return $this->render('filewriter/datatable.html.twig', [
            'table' => $table
        ]);
    }

    /**
     * @Route("/datatable/searched")
     */
    public function datatableSearchedAction(Request $request)
    {
        $config = new FileWriterConfig(FishFileWriterHandler::class);
        $config->fwOutputPrettyFilename = 'datatable_recherche.csv';
        $config->fwDisplayAsNotification = true;
        $config->fwLabel = 'Export des poissons recherchés';
        $config->datatableQuery = $request->query->all();

        if ($request->isXmlHttpRequest()) {
            return $this->manager->asyncJsResponse($config);
        } else {
            return $this->manager->syncDownloadResponse($config);
        }
    }

    /**
     * @Route("/datatable/selected")
     */
    public function datatableSelectedAction(Request  $request)
    {
        $config = new FileWriterConfig(FishFileWriterHandler::class);
        $config->fwOutputPrettyFilename = 'datatable_selection.csv';
        $config->fwDisplayAsNotification = true;
        $config->fwLabel = 'Export des poissons sélectionnés';
        $config->fishIds = (array) $request->query->get('ids');

        if ($request->isXmlHttpRequest()) {
            return $this->manager->asyncJsResponse($config);
        } else {
            return $this->manager->syncDownloadResponse($config);
        }
    }
}
