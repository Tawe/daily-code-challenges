<?php
class Solution {
    /**
     * @param String $s
     * @return Integer
     */
    function minimumDeletions($s): int {
        $bCount = 0;
        $deletions = 0;

        for ($i = 0; $i < strlen($s); $i++) {
            if ($s[$i] === 'b') {
                $bCount++;
            } else {
                $deletions = min($deletions + 1, $bCount);
            }
        }

        return $deletions;
    }
}

$solution = new Solution();
echo $solution->minimumDeletions("aababbab") . "\n";
echo $solution->minimumDeletions("bbaaaaabb") . "\n";