<?php
class Solution {
    function countPrimeSetBits($left, $right) {
        $count = 0;
        for ($i = $left; $i <= $right; $i++) {
            if ($this->isPrime(substr_count(decbin($i), '1'))) {
                $count++;
            }
        }
        return $count;
    }

    function isPrime($n) {
        if ($n <= 1) {
            return false;
        }
        for ($i = 2; $i * $i <= $n; $i++) {
            if ($n % $i === 0) {
                return false;
            }
        }
        return true;
    }
}

$solution = new Solution();
echo $solution->countPrimeSetBits(6, 10) . "\n";
echo $solution->countPrimeSetBits(10, 15) . "\n";