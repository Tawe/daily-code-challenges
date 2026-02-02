<?php

class Solution {

    /**
     * @param int[]
     * @return int
     */
    public function minimumCost($nums): int {
        $first = $nums[0];

        $min1 = PHP_INT_MAX;
        $min2 = PHP_INT_MAX;

        for ($i = 1; $i < count(value: $nums); $i++) {
            $x = $nums[$i];
            if ($x < $min1) {
                $min2 = $min1;
                $min1 = $x;
            } else if ($x < $min2) {
                $min2 = $x;
            }
        }

        return $first + $min1 + $min2;
    }
}

$solution = new Solution();
echo (string) $solution->minimumCost(nums: [1, 3, 2, 6, 4, 2]) . "\n";