<?php

namespace App\Message;

/**
 * Class NewFishMessage
 */
class NewFishMessage
{
    /**
     * @var int
     */
    public $speciesId;

    /**
     * NewFishMessage constructor.
     */
    public function __construct(int $speciesId)
    {
        $this->speciesId = $speciesId;
    }
}
