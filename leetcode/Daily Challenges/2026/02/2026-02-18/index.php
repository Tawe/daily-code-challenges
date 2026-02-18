<?php
class Solution {

    /**
     * @param Integer $n
     * @return Boolean
     */
    function hasAlternatingBits($n) {
        $binary = decbin($n);
        $len = strlen($binary);
        for ($i = 0; $i < $len - 1; $i++) {
            if ($binary[$i] === $binary[$i + 1]) {
                return false;
            }
        }
        return true;
    }
}

$solution = new Solution();
echo $solution->hasAlternatingBits(5) . "\n";
echo $solution->hasAlternatingBits(7) . "\n";
echo $solution->hasAlternatingBits(11) . "\n";