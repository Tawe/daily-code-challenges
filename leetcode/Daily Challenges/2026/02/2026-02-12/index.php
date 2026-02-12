<?php
class Solution {

    /**
    * @param String $s
    * @return Integer
    */
    function longestBalanced($s) {
        $n = strlen($s);
        $best = 1;

        for ($left = 0; $left < $n; $left++) {
            $freq = array_fill(0, 26, 0);
            $distinct = 0;
            $maxFreq = 0;

            for ($right = $left; $right < $n; $right++) {
                $idx = ord($s[$right]) - 97;
                if ($freq[$idx] === 0) {
                    $distinct++;
                }

                $freq[$idx]++;
                if ($freq[$idx] > $maxFreq) {
                    $maxFreq = $freq[$idx];
                }

                $len = $right - $left + 1;

                if ($distinct * $maxFreq === $len) {
                    $best = max($best, $len);
                }
            }
        }

        return $best;
    }
}

$solution = new Solution();
echo $solution->longestBalanced("abbac") . "\n";;