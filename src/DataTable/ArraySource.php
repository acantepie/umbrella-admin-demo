<?php
/**
 * Created by PhpStorm.
 * User: acantepie
 * Date: 27/03/20
 * Time: 23:58
 */

namespace App\DataTable;

use Umbrella\CoreBundle\Component\DataTable\Model\DataTableResult;
use Umbrella\CoreBundle\Component\DataTable\Source\AbstractTableSource;


/**
 * Class ArraySource
 */
class ArraySource extends AbstractTableSource
{

    private static $data = array(
        array('id' => 1, 'name' => 'Milou', 'nbPattes' => 4),
        array('id' => 2, 'name' => 'Rex', 'nbPattes' => 4),
        array('id' => 3, 'name' => 'Medor', 'nbPattes' => 3),
        array('id' => 4 ,'name' => 'Poisson rouge', 'nbPattes' => 0),
        array('id' => 5 ,'name' => 'Duck', 'nbPattes' => 2),
    );

    /**
     * @inheritdoc
     */
    public function search($dataClass, array $columns, array $query) : DataTableResult
    {
        $result = new DataTableResult();

        $result->draw = $query['draw'];
        $result->data = self::$data;
        $result->count =  count($result->data);

        return $result;
    }
}