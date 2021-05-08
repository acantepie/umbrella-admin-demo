<?php

namespace App\DataTable;

use Symfony\Component\HttpClient\Exception\TransportException;
use Symfony\Component\OptionsResolver\OptionsResolver;
use function Symfony\Component\String\u;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Umbrella\CoreBundle\Component\DataTable\Adapter\AdapterException;
use Umbrella\CoreBundle\Component\DataTable\Column\BooleanColumnType;
use Umbrella\CoreBundle\Component\DataTable\Column\PropertyColumnType;
use Umbrella\CoreBundle\Component\DataTable\DataTableBuilder;
use Umbrella\CoreBundle\Component\DataTable\DataTableType;
use Umbrella\CoreBundle\Component\DataTable\DTO\DataTableRequest;
use Umbrella\CoreBundle\Component\DataTable\DTO\DataTableResult;

/**
 * Class LaunchTableType
 */
class LaunchTableType extends DataTableType
{
    private HttpClientInterface $client;

    /**
     * ApiTableType constructor.
     */
    public function __construct(HttpClientInterface $client)
    {
        $this->client = $client;
    }

    /**
     * {@inheritdoc}
     */
    public function buildTable(DataTableBuilder $builder, array $options = [])
    {
        $builder->setRowClass(function ($o) {
            return $o->success ? '' : 'table-danger';
        });

        $builder->add('date_utc', PropertyColumnType::class, [
            'renderer' => function ($o) {
                return (new \DateTime($o->date_utc))->format('d M Y H:i');
            }
        ]);
        $builder->add('name', PropertyColumnType::class);
        $builder->add('success', BooleanColumnType::class);
        $builder->add('details', PropertyColumnType::class, [
            'renderer' => function ($o) {
                return u($o->details)->truncate(100, '...');
            }
        ]);

        $builder->useAdapter(function (DataTableRequest $request) {
            $requestData = $request->getData();

            try {
                $response = $this->client->request('POST', 'https://api.spacexdata.com/v4/launches/query', [
                    'timeout' => 3,
                    'json' => [
                        'options' => [
                            'offset' => $requestData['start'],
                            'limit' => $requestData['length'],
                        ]
                    ]
                ]);

                $json = json_decode($response->getContent());

                return new DataTableResult($json->docs, $json->totalDocs);
            } catch (TransportException $e) {
                throw new AdapterException($e->getMessage());
            }
        });
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'orderable' => false,
            'class' => 'table'
        ]);
    }
}
