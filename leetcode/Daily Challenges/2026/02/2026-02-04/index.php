<?php

class Solution {

    /**
     * @param int[]
     * @return int
     */
    public function maxSumTrionic($nums): int {
        $n = count(value: $nums);
        $NEG = -PHP_INT_MAX;
        $inc2 = array_fill(start_index: 0, count: $n, value: $NEG);
        $dec  = array_fill(start_index: 0, count: $n, value: $NEG);
        $tri  = array_fill(start_index: 0, count: $n, value: $NEG);

        $best = $NEG;

        for ($i = 1; $i < $n; $i++) {
            if ($nums[$i - 1] < $nums[$i]) {
                $inc2[$i] = max(value: $nums[$i - 1] + $nums[$i], values: $inc2[$i - 1] + $nums[$i]);
            }
            if ($nums[$i - 1] > $nums[$i]) {
                $cand = $NEG;
                if ($inc2[$i - 1] !== $NEG) {
                    $cand = max(value: $cand, values: $inc2[$i - 1] + $nums[$i]);
                }
                if ($dec[$i - 1] !== $NEG) {
                    $cand = max(value: $cand, values: $dec[$i - 1] + $nums[$i]);
                }

                $dec[$i] = $cand;
            }
            if ($nums[$i - 1] < $nums[$i]) {
                $cand = $NEG;
                if ($dec[$i - 1] !== $NEG) {
                    $cand = max(value: $cand, values: $dec[$i - 1] + $nums[$i]);
                }
                if ($tri[$i - 1] !== $NEG) {
                    $cand = max(value: $cand, values: $tri[$i - 1] + $nums[$i]);
                }
                $tri[$i] = $cand;
                $best = max(value: $best, values: $tri[$i]);
            }
        }

        return $best;
    }
}

$sol = new Solution();
echo $sol->maxSumTrionic(nums: [0, -2, -1, -3, 0, 2, -1]) . "\n";