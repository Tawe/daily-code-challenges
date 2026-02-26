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

        // Process from right to left, stopping before the most significant bit.
        for ($i = $n - 1; $i > 0; $i--) {
            $bit = ($s[$i] === '1') ? 1 : 0;
            $current = $bit + $carry;

            if ($current === 1) {
                // Odd: +1 then /2 => 2 steps, carry becomes 1.
                $steps += 2;
                $carry = 1;
            } else {
                // Even: /2 => 1 step.
                $steps += 1;
            }
        }

        // If carry remains at the front, one extra step is needed.
        return $steps + $carry;
    }
}

$solution = new Solution();
echo $solution->numSteps("1101") . "\n";    // 6
