<?php
/**
 * Created by PhpStorm.
 * User: acantepie
 * Date: 17/04/20
 * Time: 00:46
 */

namespace App\Controller\Admin;

use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * Class IconController
 *
 * @Route("/icon")
 */
class IconController extends BaseController
{
    /**
     * @Route("/md")
     */
    public function mdAction()
    {
        return $this->render('icon/md.html.twig');
    }

    /**
     * @Route("/unicon")
     */
    public function uniconAction()
    {
        return $this->render('icon/unicon.html.twig');
    }
}
