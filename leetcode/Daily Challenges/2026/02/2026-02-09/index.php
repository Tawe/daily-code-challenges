<?php
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     public $val = null;
 *     public $left = null;
 *     public $right = null;
 *     function __construct($val = 0, $left = null, $right = null) {
 *         $this->val = $val;
 *         $this->left = $left;
 *         $this->right = $right;
 *     }
 * }
 */
class Solution {

    /**
     * @param TreeNode $root
     * @return TreeNode
     */
    function balanceBST($root) {
        $values = [];
        $this->inorder($root, $values);
        return $this->buildBST($values, 0, count($values) - 1);
    }

    private function inorder($node, &$values) {
        if ($node === null) return;
        $this->inorder($node->left, $values);
        $values[] = $node->val;
        $this->inorder($node->right, $values);
    }

    private function buildBST(&$values, $left, $right) {
        if ($left > $right) return null;

        $mid = intdiv($left + $right, 2);
        $node = new TreeNode($values[$mid]);

        $node->left = $this->buildBST($values, $left, $mid - 1);
        $node->right = $this->buildBST($values, $mid + 1, $right);

        return $node;
    }
}

$solution = new Solution();
$solution->balanceBST(root: [1, null, 2, null, 3, null, 4, null, null]);