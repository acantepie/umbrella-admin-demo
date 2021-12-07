<?php

namespace App\Controller\Admin;

use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * @Route("/js")
 */
class JsController extends BaseController
{
    public const ACTIONS = [
        'toast_success' => 'Success TOAST',
        'toast_error' => 'Error TOAST',
        'update_html' => 'Update DOM html',
        'open_modal' => 'Open a modal'
    ];

    /**
     * @Route("")
     */
    public function index()
    {
        return $this->render('admin/js/index.html.twig', [
            'actions' => self::ACTIONS
        ]);
    }

    /**
     * @Route("/xhr/{action}")
     */
    public function xhr(string $action = 'toast_success')
    {
        $jsBuilder = $this->js();

        switch ($action) {
            case 'toast_success':
                return $jsBuilder->toastSuccess('Hi ^^', 'Server say');

            case 'toast_error':
                return $jsBuilder->toastError('Hi ^^', 'Server say');

            case 'update_html':
                return $jsBuilder->updateHtml('#update-me', '<p class="alert alert-info">Hi  ^^</p>');

            case 'open_modal':
                return $jsBuilder->modalHtml(
                    '<div class="modal fade show" tabindex="-1" role="dialog" id="umbrella-modal">'
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
                return $jsBuilder->toastError('This action is not implemented yet');
        }
    }

    /**
     * @Route("/xhr-sleep/{sleep}")
     */
    public function sleepXhr(int $sleep = 1)
    {
        sleep($sleep);
        return $this->js()
            ->toastSuccess('Hi ^^', 'Server say');
    }
}
