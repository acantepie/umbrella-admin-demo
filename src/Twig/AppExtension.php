<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class AppExtension extends AbstractExtension
{
    public function getFunctions(): array
    {
        return [
            new TwigFunction('git_url', [$this, 'gitUrl'])
        ];
    }

    public function gitUrl(string $file, string $branch = 'master'): string
    {
        return sprintf('https://github.com/acantepie/umbrella-admin-demo/blob/%s/%s', $branch, ltrim($file));
    }
}
