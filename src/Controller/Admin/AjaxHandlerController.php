<?php
/**
 * Created by PhpStorm.
 * User: acantepie
 * Date: 19/04/20
 * Time: 12:36
 */

namespace App\Controller\Admin;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * Class AjaxHandlerController
 *
 * @Route("/ajax-handler")
 */
class AjaxHandlerController extends BaseController
{
    /**
     * @Route("")
     */
    public function indexAction(Request $request)
    {
        return $this->render('ajax_handler/index.html.twig');
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
     * @Route("/sleep/{sleep}", requirements={"sleep" = "\d+"})
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


}