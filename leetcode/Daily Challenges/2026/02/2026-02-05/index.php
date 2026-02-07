<?php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    public function constructTransformedArray($nums): array {
        $n = count(value: $nums);
        $result = array_fill(start_index: 0, count: $n, value: 0);

        for ($i = 0; $i < $n; $i++) {
            $step = $nums[$i];

            if ($step === 0) {
                $result[$i] = 0;
                continue;
            }

            $j = (($i + $step) % $n + $n) % $n; 
            $result[$i] = $nums[$j];
        }

        return $result;
    }
}

$solution = new Solution();
var_export(value: $solution->constructTransformedArray(nums: [1, 2, 3, 4])); 