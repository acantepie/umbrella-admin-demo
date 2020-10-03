<?php

namespace App\Controller\Admin;

use App\Form\HabitatType;
use App\Entity\FileWriterConfig;
use App\FileWriter\CsvFileWriterHandler;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
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

        return $this->render('file_writer/index.html.twig', [
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/sync")
     */
    public function syncAction(Request $request)
    {
        $config = new FileWriterConfig(CsvFileWriterHandler::class);
        $config->fwLabel = 'Exemple - mode synchrone';
        $config->fwOutputPrettyFilename = 'sync-exemple.csv';

        return $this->manager->syncDownloadResponse($config);
    }

    /**
     * @Route("/async")
     */
    public function asyncAction(Request $request)
    {
        $config = new FileWriterConfig(CsvFileWriterHandler::class);
        $config->fwLabel = 'Exemple - mode asynchrone';
        $config->fwOutputPrettyFilename = 'async-exemple.csv';
        $config->fwDisplayAsNotification = true;

        return $this->manager->asyncJsResponse($config);
    }

    /**
     * @Route("/with-param")
     */
    public function withParamAction(Request  $request)
    {
        $config = new FileWriterConfig(CsvFileWriterHandler::class);
        $config->fwLabel = 'Exemple - mode paramétré';
        $config->fwOutputPrettyFilename = 'param-exemple.csv';
        $config->habitat = $request->query->get('form')['habitat'];
        return $this->manager->syncDownloadResponse($config);
    }

    /**
     * @Route("/datatable")
     */
    public function datatableAction(Request  $request)
    {
    }
}
