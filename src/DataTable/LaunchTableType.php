<?php

namespace App\DataTable;

use Symfony\Component\OptionsResolver\OptionsResolver;
use function Symfony\Component\String\u;
use Symfony\Contracts\HttpClient\Exception\ExceptionInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Umbrella\CoreBundle\DataTable\AdapterException;
use Umbrella\CoreBundle\DataTable\Column\BooleanColumnType;
use Umbrella\CoreBundle\DataTable\Column\DetailsColumnType;
use Umbrella\CoreBundle\DataTable\Column\PropertyColumnType;
use Umbrella\CoreBundle\DataTable\DataTableBuilder;
use Umbrella\CoreBundle\DataTable\DataTableType;
use Umbrella\CoreBundle\DataTable\DTO\DataTableResult;
use Umbrella\CoreBundle\DataTable\DTO\DataTableState;

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

    public function buildTable(DataTableBuilder $builder, array $options = [])
    {
        $builder->setRowClass(function ($o) {
            return $o->success ? '' : 'row-border-danger';
        });

        $builder->add('__more__', DetailsColumnType::class, [
            'render_details' => [$this, 'renderDetails']
        ]);

        $builder->add('date_utc', PropertyColumnType::class, [
            'render' => function ($o) {
                return (new \DateTime($o->date_utc))->format('d M Y H:i');
            }
        ]);
        $builder->add('name', PropertyColumnType::class);
        $builder->add('success', BooleanColumnType::class);
        $builder->add('details', PropertyColumnType::class, [
            'render' => function ($o) {
                return u($o->details)->truncate(100, '...');
            }
        ]);

        $builder->useAdapter([$this, 'getResult']);
    }

    /**
     * @throws AdapterException
     */
    public function getResult(DataTableState $state): DataTableResult
    {
        try {
            $response = $this->client->request('POST', 'https://api.spacexdata.com/v4/launches/query', [
                'timeout' => 3,
                'json' => [
                    'options' => [
                        'offset' => $state->getStart(),
                        'limit' => $state->getLength(),
                    ]
                ]
            ]);

            $json = json_decode($response->getContent());

            return new DataTableResult($json->docs, $json->totalDocs);
        } catch (ExceptionInterface $e) {
            throw new AdapterException($e->getMessage());
        }
    }

    public function renderDetails($o): string
    {
        if (!$o->details && !$o->failures) {
            return '';
        }

        $h = '<dl class="row mb-0">';

        $h .= '<dt class="col-2">Details</dt>';
        $h .= sprintf('<dd class="col-10">%s</dd>', $o->details);

        if ($o->failures) {
            $h .= '<dt class="col-2">Failure</dt>';
            $h .= sprintf('<dd class="col-10">%s</dd>', $o->failures[0]->reason);
        }

        $h .= '</dl>';
        return $h;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'orderable' => false,
            'table-class' => 'table-centered'
        ]);
    }
}
