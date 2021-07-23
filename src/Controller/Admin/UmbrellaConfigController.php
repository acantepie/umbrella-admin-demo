<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Console\Application;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Output\BufferedOutput;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * @Route("/umbrella-config")
 */
class UmbrellaConfigController extends BaseController
{
    /**
     * @Route("")
     */
    public function index(KernelInterface $kernel)
    {
        return $this->render('admin/umbrella-config/index.html.twig', [
            'umbrella_core_config' => $this->dumpConfig($kernel, 'UmbrellaCoreBundle'),
            'umbrella_admin_config' => $this->dumpConfig($kernel, 'UmbrellaAdminBundle')
        ]);
    }

    private function dumpConfig(KernelInterface $kernel, string $name)
    {
        $application = new Application($kernel);
        $application->setAutoExit(false);

        $input = new ArrayInput([
            'command' => 'config:dump-reference',
            'name' => $name,
        ]);

        $output = new BufferedOutput();
        $application->run($input, $output);

        return $output->fetch();
    }
}
