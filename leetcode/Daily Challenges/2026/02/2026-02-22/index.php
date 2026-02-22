<?php
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function binaryGap($n) {
        $binary = decbin($n);
        $maxDistance = 0;
        $lastOneIndex = -1;

        for ($i = 0; $i < strlen($binary); $i++) {
            if ($binary[$i] === '1') {
                if ($lastOneIndex !== -1) {
                    $maxDistance = max($maxDistance, $i - $lastOneIndex);
                }
                $lastOneIndex = $i;
            } else {
                continue;
            }
        }

        return $maxDistance;
    }
}

$solution = new Solution();
echo $solution->binaryGap(22) . "\n";
echo $solution->binaryGap(8) . "\n";
echo $solution->binaryGap(5) . "\n";