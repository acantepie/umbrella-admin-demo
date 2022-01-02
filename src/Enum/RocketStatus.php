<?php

namespace App\Enum;

class RocketStatus extends AbstractStatus
{
    public const ACTIVE = 'Active';
    public const RETIRED = 'Retired';

    final public static function all(): array
    {
        return [
            self::ACTIVE,
            self::RETIRED
        ];
    }

    final public static function color(string $status): string
    {
        return match ($status) {
            self::ACTIVE => 'primary',
            self::RETIRED => 'danger',
            default => 'secondary'
        };
    }
}
