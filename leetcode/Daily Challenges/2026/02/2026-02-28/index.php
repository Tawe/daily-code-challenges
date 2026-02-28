<?php
class Solution {
    function concatenatedBinary($n) {
        $mod = 1000000007;
        $result = 0;
        for ($i = 1; $i <= $n; $i++) {
            $bits = strlen(decbin($i));
            $result = (($result * ((1 << $bits) % $mod) % $mod) + $i) % $mod;
        }
        return $result;
    }
}

$solution = new Solution();
echo $solution->concatenatedBinary(1) . "\n";
echo $solution->concatenatedBinary(3) . "\n";
echo $solution->concatenatedBinary(12) . "\n";