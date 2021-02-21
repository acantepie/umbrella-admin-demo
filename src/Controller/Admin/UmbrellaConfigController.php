<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Console\Application;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Output\BufferedOutput;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Routing\Annotation\Route;
use Umbrella\CoreBundle\Controller\BaseController;

/**
 * Class UmbrellaConfigController
 *
 * @Route("/umbrella-config")
 */
class UmbrellaConfigController extends BaseController
{
    /**
     * @Route("")
     */
    public function indexAction(KernelInterface $kernel)
    {
        $configsName = ['UmbrellaAdminBundle', 'UmbrellaCoreBundle'];

        $configs = [];
        foreach ($configsName as $configName) {
            $configs[] = [
                'name' => $configName,
                'dump' => $this->dumpConfig($kernel, $configName)
            ];
        }

        return $this->render('admin/umbrella-config/index.html.twig', [
            'configs' => $configs
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
