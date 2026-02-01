<?php

class Solution {

/**
 * @param int[]
 * @return int
 */
    public function minimumCost($nums): int {
       $cost = $nums[0];
        $rest = array_slice(array: $nums, offset: 1);
        sort(array: $rest);
        return $cost + $rest[0] + $rest[1];
    }
}

$solution = new Solution();
echo (string) $solution->minimumCost(nums: [1, 2, 3, 12]) . "\n";