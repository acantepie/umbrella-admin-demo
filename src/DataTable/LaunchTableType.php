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
use Umbrella\CoreBundle\DataTable\DTO\DataTable;
use Umbrella\CoreBundle\DataTable\DTO\DataTableResult;
use Umbrella\CoreBundle\DataTable\DTO\DataTableState;
use Umbrella\CoreBundle\DataTable\DTO\RowView;

/**
 * Class LaunchTableType
 */
class LaunchTableType extends DataTableType
{
    /**
     * ApiTableType constructor.
     */
    public function __construct(private readonly HttpClientInterface $client)
    {
    }

    public function buildRowView(RowView $view, DataTable $dataTable, array $options): void
    {
        $view->attr['class'] = $view->source->success ? '' : 'row-border-danger';
    }

    public function buildTable(DataTableBuilder $builder, array $options): void
    {
        $builder
            ->add('__more__', DetailsColumnType::class, [
                'render_details' => function ($o) {
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
            ])
            ->add('date_utc', PropertyColumnType::class, [
                'render' => fn ($o) => (new \DateTime($o->date_utc))->format('d M Y H:i')
            ])
            ->add('name', PropertyColumnType::class)
            ->add('success', BooleanColumnType::class)
            ->add('details', PropertyColumnType::class, [
                'render' => fn ($o) => u($o->details)->truncate(100, '...')
            ]);

        $builder->useAdapter(function (DataTableState $state) {
            // Retrieve result from SpaceX API
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
        });
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'orderable' => false // Disable ordering on table
        ]);
    }
}
