<?php

namespace App\Enum;

abstract class AbstractStatus
{
    abstract public static function all(): array;

    abstract public static function color(string $status): string;

    public static function widget(string $status): string
    {
        return sprintf('<i class="mdi mdi-circle text-%s me-1"></i> %s', static::color($status), $status);
    }
}
