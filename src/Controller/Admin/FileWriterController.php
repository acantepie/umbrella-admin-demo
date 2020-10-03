<?php

namespace App\Controller\Admin;

use App\FileWriter\CsvFileWriterHandler;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;
use Umbrella\AdminBundle\Entity\FileWriterTaskConfig;
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
     * @Route("")
     */
    public function indexAction(Request $request)
    {
        return $this->render('file_writer/index.html.twig');
    }

    /**
     * @Route("/sync")
     */
    public function syncAction(Request $request)
    {
        $config = new FileWriterTaskConfig(CsvFileWriterHandler::class);
        $config->fwLabel = 'Exemple - mode synchrone';
        $config->fwOutputPrettyFilename = 'exemple1.csv';
        return $this->manager->syncDownloadResponse($config);
    }

    /**
     * @Route("/async")
     */
    public function asyncAction(Request $request)
    {
        $config = new FileWriterTaskConfig(CsvFileWriterHandler::class);
        $config->fwLabel = 'Exemple - mode asynchrone';
        $config->fwOutputPrettyFilename = 'exemple2.csv';
        $config->fwDisplayAsNotification = true;
        $task = $this->manager->schedule($config);

        return $this->jsResponseBuilder()
            ->toastSuccess(sprintf('La tache %d a été enregistré.', $task->id));
    }
}
