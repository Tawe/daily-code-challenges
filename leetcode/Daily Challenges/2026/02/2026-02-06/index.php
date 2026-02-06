<?php
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function minRemoval($nums, $k): int {
        $n = count($nums);
        if ($n <= 1) return 0;

        sort($nums);

        $best = 1;
        $r = 0;

        for ($l = 0; $l < $n; $l++) {
            if ($r < $l) $r = $l;

            while ($r + 1 < $n && $nums[$r + 1] <= $nums[$l] * $k) {
                $r++;
            }

            $best = max($best, $r - $l + 1); 
            

        return $n - $best;
    }
}


$solution = new Solution();
echo $solution->minRemoval(nums: [1, 2, 3, 4, 5], k: 2) . "\n";