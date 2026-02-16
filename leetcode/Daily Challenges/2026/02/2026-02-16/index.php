<?php
class Solution {
    public function reverseBits($n) {
        $result = 0;
        for ($i = 0; $i < 32; $i++) {
            $result = ($result << 1) | ($n & 1);
            $n >>= 1;
        }
        return $result;
    }
}

$solution = new Solution();
echo $solution->reverseBits(43261596) . "\n";