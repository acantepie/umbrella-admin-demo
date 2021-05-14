<?php

namespace App\Controller\Admin;

use Symfony\Component\Routing\Annotation\Route;
use Umbrella\AdminBundle\Controller\AdminController;

/**
 * Class AjaxHandlerController
 *
 * @Route("/js")
 */
class JsController extends AdminController
{
    const ACTIONS = [
        'toast_success' => 'Success TOAST',
        'toast_error' => 'Error TOAST',
        'update_html' => 'Update DOM html',
        'open_modal' => 'Open a modal'
    ];

    /**
     * @Route("")
     */
    public function indexAction()
    {
        return $this->render('admin/js/index.html.twig', [
            'actions' => self::ACTIONS
        ]);
    }

    /**
     * @Route("/xhr/{action}")
     */
    public function xhrAction(string $action = 'toast_success')
    {
        $jsBuilder = $this->jsResponseBuilder();

        switch ($action) {
            case 'toast_success':
                return $jsBuilder->alertSuccess('Hi ^^', 'Server say');

            case 'toast_error':
                return $jsBuilder->alertError('Hi ^^', 'Server say');

            case 'update_html':
                return $jsBuilder->updateHtml('#update-me', '<p class="alert alert-info">Hi  ^^</p>');

            case 'open_modal':
                return $jsBuilder->modalHtml(
                    '<div class="modal js-umbrella-modal fade show" tabindex="-1" role="dialog">'
                    . '<div class="modal-dialog modal-lg">'
                    . '<div class="modal-content">'
                    . '<div class="modal-body">'
                    . '<p class="alert alert-info">Hi ^^</p>'
                    . '</div>'
                    . '<div class="modal-footer">'
                    . '<button type="button" class="btn btn-light" data-bs-dismiss="modal"><i class="mdi mdi-close me-1"></i> Fermer</button>'
                    . '</div>'
                    . '</div>'
                    . '</div>'
                    . '</div>'
                );

            default:
                return $jsBuilder->alertError('This action is not implemented yet');
        }
    }

    /**
     * @Route("/xhr-sleep/{sleep}")
     */
    public function sleepXhrAction(int $sleep = 1)
    {
        sleep($sleep);
        return $this->jsResponseBuilder()
            ->alertSuccess('Hi ^^', 'Server say');
    }
}
