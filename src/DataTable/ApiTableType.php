<?php

namespace App\DataTable;

use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Component\Column\Type\ColumnType;
use Umbrella\CoreBundle\Component\DataTable\DataTableBuilder;
use Umbrella\CoreBundle\Component\DataTable\Type\DataTableType;
use Umbrella\CoreBundle\Component\Column\Type\PropertyColumnType;

/**
 * Class ApiTableType
 */
class ApiTableType extends DataTableType
{
    /**
     * @var HttpClientInterface
     */
    private $client;

    /**
     * ApiTableType constructor.
     * @param HttpClientInterface $client
     */
    public function __construct(HttpClientInterface $client)
    {
        $this->client = $client;
    }

    /**
     * @inheritDoc
     */
    public function buildTable(DataTableBuilder $builder, array $options = [])
    {
        $builder->add('speciesId', PropertyColumnType::class, [
            'property_path' => '[SpecCode]',
            'renderer' => function (array $arr) {
                return sprintf('#%d', $arr['SpecCode']);
            }
        ]);
        $builder->add('picture', ColumnType::class, [
            'renderer' => function (array $species) {
                if (empty($species['PicPreferredName'])) {
                    return '';
                }

                $url = 'https://www.fishbase.se/images/species/' . $species['PicPreferredName'];
                return sprintf('<a href="%s" target="_blank"><img src="%s" class="img-thumbnail" width="200"></a>', $url, $url);
            }
        ]);
        $builder->add('species', PropertyColumnType::class, [
            'property_path' => '[Species]'
        ]);
        $builder->add('genus', PropertyColumnType::class, [
            'property_path' => '[Genus]'
        ]);
        $builder->add('subfamily', PropertyColumnType::class, [
            'property_path' => '[Subfamily]'
        ]);
        $builder->add('comments', PropertyColumnType::class, [
            'property_path' => '[Comments]',
        ]);

        $builder->setSource(new ApiSource($this->client));
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefault('id_path', '[SpecCode]');
        $resolver->setDefault('orderable', false);
    }
}
