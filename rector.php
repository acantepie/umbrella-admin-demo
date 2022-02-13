<?php

declare(strict_types=1);

use Rector\Core\Configuration\Option;
use Rector\Php74\Rector\Property\TypedPropertyRector;
use Rector\Set\ValueObject\LevelSetList;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;

return static function (ContainerConfigurator $containerConfigurator): void {
    // get parameters
    $parameters = $containerConfigurator->parameters();
    $parameters->set(Option::PATHS, [
        __DIR__ . '/src'
    ]);

    $containerConfigurator->import(LevelSetList::UP_TO_PHP_80);
    $services = $containerConfigurator->services();

    // risky rule
    $services->remove(\Rector\Php80\Rector\FunctionLike\UnionTypesRector::class);

    // uncomprehensive spaceship operator
    $services->remove(\Rector\Php70\Rector\If_\IfToSpaceshipRector::class);

    // annoying rules
    $services->remove(\Rector\Php73\Rector\FuncCall\JsonThrowOnErrorRector::class);
};
