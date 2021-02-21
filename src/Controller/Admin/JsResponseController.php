<?php

namespace App\Controller\Admin;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * Class AjaxHandlerController
 *
 * @Route("/js-response")
 */
class JsResponseController extends BaseController
{
    /**
     * @Route("")
     */
    public function indexAction(Request $request)
    {
        return $this->render('admin/jsresponse/index.html.twig');
    }

    /**
     * @Route("/toast")
     */
    public function toastAction(Request $request)
    {
        return $this->jsResponseBuilder()
            ->toastSuccess('Toast from jsResponse !');
    }

    /**
     * @Route("/sleep/{sleep}", requirements={"sleep": "\d+"})
     */
    public function sleepAction(Request $request, $sleep = 5)
    {
        sleep($sleep);

        return $this->jsResponseBuilder()
            ->toastSuccess('Toast displayed after ' . $sleep . 's !');
    }

    /**
     * @Route("/error")
     */
    public function errorAction(Request $request)
    {
        throw new \Exception();
    }

    /**
     * @Route("/unauthorized")
     */
    public function unauthorizedAction(Request $request)
    {
        throw new HttpException(401);
    }

    /**
     * @Route("/custom")
     */
    public function customAction(Request $request)
    {
        return $this->jsResponseBuilder()
            ->add('alert', ['msg' => 'Hello world !!!!'])
            ->add('alert', ['msg' => 'Bye bye']);
    }
}