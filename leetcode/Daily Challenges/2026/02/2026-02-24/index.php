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
     * @return Integer
     */
    function sumRootToLeaf($root) {
        $this->sum = 0 % 1000000007;
        $this->dfs($root, 0);
        return $this->sum % 1000000007;
    }

    function dfs($node, $path) {
        if ($node === null) return;
        $path = $path * 2 + $node->val;
        if ($node->left === null && $node->right === null) {
            $this->sum += $path % 1000000007;
        }
        $this->dfs($node->left, $path);
        $this->dfs($node->right, $path);
    }
}

$solution = new Solution();
echo $solution->sumRootToLeaf(root: [1,0,1,0,1,0,1]) . "\n";
echo $solution->sumRootToLeaf(root: [0]) . "\n";