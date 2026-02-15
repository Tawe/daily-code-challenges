<?php
class Solution {

    /**
     * @param String $a
     * @param String $b
     * @return String
     */
    function addBinary($a, $b) {
        $carry = 0;
        $result = "";
        $a = strrev($a);
        $b = strrev($b);
        $len = max(strlen($a), strlen($b));
        for ($i = 0; $i < $len; $i++) {
            $bitA = $i < strlen($a) ? $a[$i] : '0';
            $bitB = $i < strlen($b) ? $b[$i] : '0';
            $sum = $carry + $bitA + $bitB;
            $carry = $sum > 1 ? 1 : 0;
            $result .= $sum % 2;
        }
        return ($carry > 0 ? '1' : '') . strrev($result);
    }
}

$solution = new Solution();
echo $solution->addBinary("11", "1") . "\n";
echo $solution->addBinary("1010", "1011") . "\n";