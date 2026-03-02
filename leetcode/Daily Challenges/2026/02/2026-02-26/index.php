<?php
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function numSteps($s) {
        $n = strlen($s);
        $steps = 0;
        $carry = 0;

        for ($i = $n - 1; $i > 0; $i--) {
            $bit = ($s[$i] === '1') ? 1 : 0;
            $current = $bit + $carry;

            if ($current === 1) {
                $steps += 2;
                $carry = 1;
            } else {
                $steps += 1;
            }
        }

        return $steps + $carry;
    }
}

$solution = new Solution();
echo $solution->numSteps("1101") . "\n";    // 6
