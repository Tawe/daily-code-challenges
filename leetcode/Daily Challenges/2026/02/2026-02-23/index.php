<?php
class Solution {
    function hasAllCodes($s, $k) {
        $codes = array_fill(0, pow(2, $k), false);
        for ($i = 0; $i <= strlen($s) - $k; $i++) {
            $codes[bindec(substr($s, $i, $k))] = true;
        }
        return count(array_filter($codes)) === pow(2, $k);
    }
}

$solution = new Solution();
echo $solution->hasAllCodes("00110110", 2) . "\n";
echo $solution->hasAllCodes("0110", 1) . "\n";