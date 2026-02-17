<?php
class Solution {
    public function readBinaryWatch($turnedOn) {
        $result = [];
        for ($h = 0; $h < 12; $h++) {
            for ($m = 0; $m < 60; $m++) {
                if (substr_count(decbin($h) . decbin($m), '1') === $turnedOn) {
                    $result[] = sprintf("%d:%02d", $h, $m);
                }
            }
        }
        return $result;
    }
}

$solution = new Solution();
print_r($solution->readBinaryWatch(1));(9));