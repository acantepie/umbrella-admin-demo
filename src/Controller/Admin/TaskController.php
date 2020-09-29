<?php

namespace App\Controller\Admin;

use App\Entity\Task;
use App\Task\NewFishTaskHandler;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;
use Umbrella\CoreBundle\Component\Task\TaskManager;
use Symfony\Component\Validator\Constraints\Positive;
use Symfony\Component\Form\Extension\Core\Type\NumberType;

/**
 * Class FileWriterController
 *
 * @Route("app-task")
 */
class TaskController extends BaseController
{
    /**
     * @Route("")
     */
    public function indexAction(TaskManager $taskManager, Request $request)
    {
        $form = $this->createFormBuilder()
            ->add('speciesId', NumberType::class, ['constraints' => new Positive()])
            ->getForm();
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $task = new Task(NewFishTaskHandler::class);
            $task->speciesId = intval($form->getData()['speciesId']);
            $taskManager->register($task);

            return $this->redirectToRoute('app_admin_task_success', ['id' => $task->id]);
        }

        return $this->render('task/index.html.twig', [
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("success/{id}", requirements={"id"="\d+"})
     * @param mixed $id
     */
    public function successAction(Request $request, $id)
    {
        $this->getMenu('admin_sidebar')
            ->findByPath('tasks')
            ->setCurrent(true);

        $task = $this->findOrNotFound(Task::class, $id);

        return $this->render('task/success.html.twig', [
            'task' => $task
        ]);
    }
}
