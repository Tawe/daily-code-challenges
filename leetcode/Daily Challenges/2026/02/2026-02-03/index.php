<?php

class Solution {

    /**
     * @param int[]
     * @return bool
     */
    public function isTrionic($nums): bool {
        $n = count(value: $nums);
        if ($n < 3) {
            return false;
        }

        $prefixInc = array_fill(start_index: 0, count: $n, value: false);
        $prefixInc[0] = true;
        for ($i = 1; $i < $n; $i++) {
            $prefixInc[$i] = $prefixInc[$i - 1] && $nums[$i] > $nums[$i - 1];
        }

        $suffixInc = array_fill(start_index: 0, count: $n, value: false);
        $suffixInc[$n - 1] = true;
        for ($i = $n - 2; $i >= 0; $i--) {
            $suffixInc[$i] = $suffixInc[$i + 1] && $nums[$i] < $nums[$i + 1];
        }

        for ($p = 1; $p <= $n - 3; $p++) {
            if (!$prefixInc[$p]) {
                continue;
            }
            for ($q = $p + 1; $q <= $n - 2; $q++) {
                if (!$suffixInc[$q]) {
                    continue;
                }
                $dec = true;
                for ($i = $p; $i < $q; $i++) {
                    if ($nums[$i] <= $nums[$i + 1]) {
                        $dec = false;
                        break;
                    }
                }
                if ($dec) {
                    return true;
                }
            }
        }
        return false;
    }
}

$sol = new Solution();   
var_export(value: $sol->isTrionic(nums: [1, 3, 5, 4, 2, 6]));