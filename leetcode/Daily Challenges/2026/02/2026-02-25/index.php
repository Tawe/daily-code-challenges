<?php
class Solution {
    public function sortByBits($arr) {
        usort($arr, function($a, $b) {
            $bitsA = $this->countBits($a);
            $bitsB = $this->countBits($b);

            if ($bitsA === $bitsB) {
                return $a <=> $b;
            }

            return $bitsA <=> $bitsB;
        });

        return $arr;
    }

    public function countBits($num) {
        return substr_count(decbin($num), '1');
    }
}

$solution = new Solution();
print_r($solution->sortByBits([0,1,2,3,4,5,6,7,8]));
print_r($solution->sortByBits([1024,512,256,128,64,32,16,8,4,2,1]));
