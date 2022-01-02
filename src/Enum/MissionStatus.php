<?php

namespace App\Enum;

class MissionStatus extends AbstractStatus
{
    public const FAILURE = 'Failure';
    public const PARTIAL_FAILURE = 'Partial Failure';
    public const PRELAUNCH_FAILURE = 'Prelaunch Failure';
    public const SUCCESS = 'Success';

    final public static function all(): array
    {
        return [
            self::FAILURE,
            self::PARTIAL_FAILURE,
            self::PRELAUNCH_FAILURE,
            self::SUCCESS
        ];
    }

    final public static function color(string $status): string
    {
        return match ($status) {
            self::FAILURE => 'danger',
            self::PARTIAL_FAILURE => 'warning',
            self::PRELAUNCH_FAILURE => 'warning',
            self::SUCCESS => 'success',
            default => 'secondary'
        };
    }
}
