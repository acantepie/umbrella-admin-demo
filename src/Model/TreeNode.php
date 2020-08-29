<?php
/**
 * Created by PhpStorm.
 * User: acantepie
 * Date: 28/03/20
 * Time: 20:47
 */

namespace App\Model;

/**
 * Class TreeNode
 */
class TreeNode
{
    /**
     * @var int
     */
    public $id;

    /**
     * @var string
     */
    public $label;

    /**
     * @var string
     */
    public $type;

    /**
     * @var TreeNode
     */
    public $parent;

    /**
     * @var TreeNode[]
     */
    public $children = array();

    /**
     * TreeNode constructor.
     * @param $id
     * @param $label
     * @param $type
     */
    public function __construct($id, $label, $type)
    {
        $this->id = $id;
        $this->label = $label;
        $this->type = $type;
    }

    /**
     * @return mixed
     */
    public function getLevel()
    {
        return $this->parent ? $this->parent->getLevel() + 1 : 0;
    }

    /**
     * @param TreeNode $node
     * @return $this
     */
    public function addChild(TreeNode $node)
    {
        $node->parent = $this;
        $this->children[] = $node;
        return $node;
    }

    /**
     * @return TreeNode
     */
    public function parent()
    {
        return $this->parent;
    }

    /**
     * @param bool $includeMyself
     * @return array
     */
    public function all($includeMyself = true)
    {
        $nodes = $includeMyself ? [$this] : [];
        foreach ($this->children as $child) {
            $nodes = array_merge($nodes, $child->all(true));
        }
        return $nodes;
    }

    /***
     * @return null
     */
    public function isRoot()
    {
        return $this->parent === null;
    }

}