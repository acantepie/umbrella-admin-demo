<?php


namespace App\Menu;

use App\Entity\CustomMenuConfig;
use App\Repository\CustomMenuConfigRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Yaml\Yaml;
use Twig\Environment;
use Umbrella\CoreBundle\Component\Menu\MenuFactory;
use Umbrella\CoreBundle\Component\Menu\Model\Menu;

/**
 * Class CustomMenu
 */
class CustomMenu
{
    /**
     * @var Environment
     */
    protected $twig;

    /**
     * @var EntityManagerInterface
     */
    private $em;

    /**
     * @var CustomMenuConfigRepository
     */
    private $configRepo;

    /**
     * @var string
     */
    private $ymlPath;

    /**
     * CustomMenu constructor.
     * @param Environment $twig
     * @param EntityManagerInterface $em
     * @param string $ymlPath
     */
    public function __construct(Environment $twig, EntityManagerInterface $em, string $ymlPath)
    {
        $this->twig = $twig;
        $this->em = $em;
        $this->configRepo = $em->getRepository(CustomMenuConfig::class);
        $this->ymlPath = $ymlPath;
    }

    /**
     * @param MenuFactory $factory
     * @return Menu
     */
    public function createMenu(MenuFactory $factory)
    {
        $config = $this->configRepo->getConfig();

        $data = (array) Yaml::parse(file_get_contents($this->ymlPath));

        $keys = array_keys($data);

        // shuffle menu if config want it :)
        if ($config->shuffle) {
            shuffle($keys);
        }

        $menu = $factory->createMenu();

        foreach ($keys as $key) {
            $menu->getRoot()->addChild($key, $data[$key]);
        }

        return $menu;
    }

    /**
     * @param Menu $menu
     * @return string
     */
    public function renderMenu(Menu $menu)
    {
       return $this->twig->render('custommenu/menu.html.twig', [
           'menu' => $menu,
           'config' => $this->configRepo->getConfig()
       ]);
    }

}