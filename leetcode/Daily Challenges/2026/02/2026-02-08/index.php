<?php
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     public $val = 0;
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
     * @param TreeNode|null $root
     * @return Boolean
     */
    public function isBalanced($root): bool {
        return $this->heightOrFail($root) !== -1;
    }

    /**
     * Returns height if balanced, otherwise -1 as a fail signal.
     * @param TreeNode|null $node
     * @return int
     */
    private function heightOrFail($node): int {
        if ($node === null) return 0;

        $lh = $this->heightOrFail($node->left);
        if ($lh === -1) return -1;

        $rh = $this->heightOrFail($node->right);
        if ($rh === -1) return -1;

        if (abs($lh - $rh) > 1) return -1;

        return max($lh, $rh) + 1;
    }
}

$solution = new Solution();
var_export(value: $solution->isBalanced(root: [3, 9, 20, null, null, 15, 7]));