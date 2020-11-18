<?php

namespace App\DataTable;

use Symfony\Contracts\HttpClient\HttpClientInterface;
use Umbrella\CoreBundle\Component\DataTable\Model\DataTableResult;
use Umbrella\CoreBundle\Component\DataTable\Source\AbstractTableSource;

/**
 * Class ApiSource
 */
class ApiSource extends AbstractTableSource
{
    /**
     * @var HttpClientInterface
     */
    private $client;

    /**
     * ApiSource constructor.
     *
     * @param HttpClientInterface $client
     */
    public function __construct(HttpClientInterface $client)
    {
        $this->client = $client;
    }

    /**
     * @param $dataClass
     * @param array $columns
     * @param array $query
     *
     * @return DataTableResult
     *
     * Fishbase : https://fr.wikipedia.org/wiki/FishBase
     * Api doc : https://ropensci.github.io/fishbaseapidocs/
     */
    public function search($dataClass, array $columns, array $query): DataTableResult
    {
        $queryData = $query['query'];

        $options = [
            'query' => [
                'offset' => $queryData['start'],
                'limit' => $queryData['start'] + $queryData['length'],
            ],
        ];

        $response = $this->client->request('GET', 'https://fishbase.ropensci.org/species', $options);
        $data = json_decode($response->getContent(), true);

        $result = new DataTableResult();
        $result->draw = $queryData['draw'];
        $result->data = $data['data'];
        $result->count = $data['count'];

        return $result;
    }
}
