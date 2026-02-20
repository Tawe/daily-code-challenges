<?php

class Solution {
    function makeLargestSpecial($s) {
        $balance = 0;
        $start = 0;
        $parts = [];
        $n = strlen($s);

        for ($i = 0; $i < $n; $i++) {
            $balance += ($s[$i] === '1') ? 1 : -1;

            if ($balance === 0) {
                $middle = substr($s, $start + 1, $i - $start - 1);
                $parts[] = '1' . $this->makeLargestSpecial($middle) . '0';
                $start = $i + 1;
            }
        }

        rsort($parts, SORT_STRING);
        return implode('', $parts);
    }              
}

$solution = new Solution();
echo $solution->makeLargestSpecial("11011000") . "\n"; // 11100100
echo $solution->makeLargestSpecial("10") . "\n";    // 10
