<?php

namespace App\DataTable;

use Symfony\Component\HttpClient\Exception\TransportException;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Umbrella\CoreBundle\Component\Column\Type\ColumnType;
use Umbrella\CoreBundle\Component\Column\Type\PropertyColumnType;
use Umbrella\CoreBundle\Component\DataTable\Adapter\AdapterException;
use Umbrella\CoreBundle\Component\DataTable\DataTableBuilder;
use Umbrella\CoreBundle\Component\DataTable\Model\DataTableRequest;
use Umbrella\CoreBundle\Component\DataTable\Model\DataTableResult;
use Umbrella\CoreBundle\Component\DataTable\Type\DataTableType;

/**
 * Class ApiTableType
 */
class ApiTableType extends DataTableType
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
        $builder->add('speciesId', PropertyColumnType::class, [
            'property_path' => '[SpecCode]',
            'renderer' => function (array $arr) {
                return sprintf('#%d', $arr['SpecCode']);
            },
        ]);
        $builder->add('picture', ColumnType::class, [
            'is_safe_html' => true,
            'renderer' => function (array $species) {
                if (empty($species['PicPreferredName'])) {
                    return '';
                }

                $url = 'https://www.fishbase.se/images/species/' . $species['PicPreferredName'];

                return sprintf('<a href="%s" target="_blank"><img src="%s" class="img-thumbnail" width="200"></a>', $url, $url);
            },
        ]);
        $builder->add('species', PropertyColumnType::class, [
            'property_path' => '[Species]',
        ]);
        $builder->add('genus', PropertyColumnType::class, [
            'property_path' => '[Genus]',
        ]);
        $builder->add('subfamily', PropertyColumnType::class, [
            'property_path' => '[Subfamily]',
        ]);
        $builder->add('comments', PropertyColumnType::class, [
            'property_path' => '[Comments]',
        ]);

        $builder->useAdapter(function (DataTableRequest $request) {
            $requestData = $request->getData();

            try {
                $response = $this->client->request('GET', 'https://fishbase.ropensci.org/species', [
                    'timeout' => 2,
                    'query' => [
                        'offset' => $requestData['start'],
                        'limit' => $requestData['start'] + $requestData['length'],
                    ],
                ]);
                $data = json_decode($response->getContent(), true);
            } catch (TransportException $e) {
                throw new AdapterException($e->getMessage());
            }

            return new DataTableResult($data['data'], $data['count']);
        });
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefault('id_path', '[SpecCode]');
        $resolver->setDefault('orderable', false);
    }
}
