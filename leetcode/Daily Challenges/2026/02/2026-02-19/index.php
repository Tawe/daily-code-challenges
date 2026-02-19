<?php
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function countBinarySubstrings($s) {
        $prevRun = 0;
        $currRun = 1;
        $count = 0;
        $n = strlen($s);

        for ($i = 1; $i < $n; $i++) {
            if ($s[$i] === $s[$i - 1]) {
                $currRun++;
            } else {
                $count += min($prevRun, $currRun);
                $prevRun = $currRun;
                $currRun = 1;
            }
        }

        $count += min($prevRun, $currRun);
        return $count;
    }
}

$solution = new Solution();
echo $solution->countBinarySubstrings("00110011") . "\n"; // 6
echo $solution->countBinarySubstrings("10101") . "\n";    // 4
