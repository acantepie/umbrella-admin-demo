<?php

namespace App\Controller\Admin;

use App\AppHelper;
use App\Entity\ManyFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\NotNull;
use Umbrella\CoreBundle\Component\UmbrellaFile\DownloadHandler;
use Umbrella\CoreBundle\Component\UmbrellaFile\Validator\Constraints\UmbrellaImageConstraint;
use Umbrella\CoreBundle\Controller\BaseController;
use Umbrella\CoreBundle\Entity\UmbrellaFile;
use Umbrella\CoreBundle\Form\UmbrellaFileType;

/**
 * Class FileController
 *
 * @Route("/file")
 */
class FileController extends BaseController
{
    /**
     * @Route("/")
     */
    public function indexAction(AppHelper $helper, Request $request)
    {
        $entity = $helper->loadOne(ManyFile::class);

        $wallpaperForm = $this->createFormBuilder($entity)
            ->add('wallpaperFile', UmbrellaFileType::class, [
                'mapping' => 'default.mapping',
                'label' => false,
                'required' => true,
                'constraints' => [new NotNull(), new UmbrellaImageConstraint()],
                'allow_delete' => false,
                'label_class' => 'd-none',
                'group_class' => 'col-sm-12'
            ])
            ->getForm()
            ->handleRequest($request);

        $billForm = $this->createFormBuilder($entity)
            ->add('billFile', UmbrellaFileType::class, [
                'mapping' => 'admin.mapping',
                'label' => false,
                'required' => true,
                'constraints' => [new NotNull()],
                'allow_delete' => false,
                'label_class' => 'd-none',
                'group_class' => 'col-sm-12'
            ])
            ->getForm()
            ->handleRequest($request);

        if ($wallpaperForm->isSubmitted() && $wallpaperForm->isValid()) {
            $this->em()->flush();

            return $this->redirectToRoute('app_admin_file_index');
        }

        if ($billForm->isSubmitted() && $billForm->isValid()) {
            $this->em()->flush();

            return $this->redirectToRoute('app_admin_file_index');
        }

        return $this->render('admin/file/index.html.twig', [
            'entity' => $entity,
            'wallpaper_form' => $wallpaperForm->createView(),
            'bill_form' => $billForm->createView()
        ]);
    }

    /**
     * @Route("/{storageName}")
     */
    public function downloadAction(DownloadHandler $handler, string $storageName)
    {
        $file = new UmbrellaFile();
        $file->storageName = $storageName;
        $file->name = $storageName;
        $file->storageMapping = 'admin.mapping'; // you must precise mapping here

        return $handler->downloadOrNotFound($file, true);
    }
}
