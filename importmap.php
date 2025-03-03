<?php

/**
 * Returns the importmap for this application.
 *
 * - "path" is a path inside the asset mapper system. Use the
 *     "debug:asset-map" command to see the full list of paths.
 *
 * - "entrypoint" (JavaScript only) set to true for any module that will
 *     be used as an "entrypoint" (and passed to the importmap() Twig function).
 *
 * The "importmap:require" command can be used to add new entries to this file.
 */
return [
    'app' => [
        'path' => './assets/app.js',
        'entrypoint' => true,
    ],
    'highlight.js/lib/core' => [
        'version' => '11.11.1',
    ],
    'highlight.js/lib/languages/javascript' => [
        'version' => '11.11.1',
    ],
    'highlight.js/lib/languages/yaml' => [
        'version' => '11.11.1',
    ],
    'highlight.js/lib/languages/json' => [
        'version' => '11.11.1',
    ],
    'highlight.js/lib/languages/xml' => [
        'version' => '11.11.1',
    ],
    'highlight.js/lib/languages/php' => [
        'version' => '11.11.1',
    ],
    'highlight.js/lib/languages/twig' => [
        'version' => '11.11.1',
    ],
    'highlight.js/lib/languages/bash' => [
        'version' => '11.11.1',
    ],
    'highlight.js/styles/atom-one-dark-reasonable.css' => [
        'version' => '11.11.1',
        'type' => 'css',
    ],
];
