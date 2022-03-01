<?php

namespace App\Message;

use Symfony\Component\Validator\Constraints as Assert;

class CounterMessage
{
    #[Assert\GreaterThanOrEqual(10)]
    #[Assert\LessThanOrEqual(100)]
    public int $max;

    /**
     * CountMessage constructor.
     */
    public function __construct(int $max = 50)
    {
        $this->max = $max;
    }
}
