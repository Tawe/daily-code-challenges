<?php
class Solution {

/**
 * @param Integer[] $nums
 * @return Integer
 */
    function longestBalanced($nums) {
        $n = count($nums);
        $longest = 0;

        for ($i = 0; $i < $n; $i++) {
            $evenSeen = [];
            $oddSeen = [];
            $evenCount = 0;
            $oddCount = 0;

            for ($j = $i; $j < $n; $j++) {
                $val = $nums[$j];
                if ($val % 2 === 0) {
                    if (!isset($evenSeen[$val])) {
                        $evenSeen[$val] = true;
                        $evenCount++;
                    }
                } else {
                    if (!isset($oddSeen[$val])) {
                        $oddSeen[$val] = true;
                        $oddCount++;
                    }
                }

                if ($evenCount === $oddCount) {
                    $longest = max($longest, $j - $i + 1);
                }
            }
        }

        return $longest;
    }
}

$solution = new Solution();
echo $solution->longestBalanced([2, 5, 4, 3]) . "\n";
