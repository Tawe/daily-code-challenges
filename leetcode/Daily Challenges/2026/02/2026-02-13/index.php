<?php
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function longestBalanced($s) {
        $n = strlen($s);
        if ($n === 0) {
            return 0;
        }

        $best = 1;

        // Case 1: substring contains only one distinct character.
        $run = 1;
        for ($i = 1; $i < $n; $i++) {
            if ($s[$i] === $s[$i - 1]) {
                $run++;
            } else {
                $run = 1;
            }
            if ($run > $best) {
                $best = $run;
            }
        }

        // Case 2: all three characters appear equally often.
        $countA = 0;
        $countB = 0;
        $countC = 0;
        $firstSeen = ["0#0" => -1];

        for ($i = 0; $i < $n; $i++) {
            $ch = $s[$i];
            if ($ch === 'a') {
                $countA++;
            } elseif ($ch === 'b') {
                $countB++;
            } else {
                $countC++;
            }

            $key = ($countA - $countB) . "#" . ($countA - $countC);
            if (array_key_exists($key, $firstSeen)) {
                $len = $i - $firstSeen[$key];
                if ($len > $best) {
                    $best = $len;
                }
            } else {
                $firstSeen[$key] = $i;
            }
        }

        // Case 3: exactly two characters appear, with equal counts.
        $best = max($best, $this->longestTwoCharBalanced($s, 'a', 'b', 'c'));
        $best = max($best, $this->longestTwoCharBalanced($s, 'a', 'c', 'b'));
        $best = max($best, $this->longestTwoCharBalanced($s, 'b', 'c', 'a'));

        return $best;
    }

    private function longestTwoCharBalanced($s, $x, $y, $forbidden) {
        $n = strlen($s);
        $best = 0;
        $diff = 0;
        $firstSeen = [0 => -1];
        $segmentStart = 0;

        for ($i = 0; $i < $n; $i++) {
            $ch = $s[$i];

            if ($ch === $forbidden) {
                // Reset state because forbidden char cannot be inside the substring.
                $diff = 0;
                $firstSeen = [0 => $i];
                $segmentStart = $i + 1;
                continue;
            }

            if ($ch === $x) {
                $diff++;
            } elseif ($ch === $y) {
                $diff--;
            }

            if (array_key_exists($diff, $firstSeen)) {
                $startIdx = $firstSeen[$diff] + 1;
                // Ensure both characters appear at least once.
                if ($startIdx >= $segmentStart && $startIdx <= $i) {
                    $len = $i - $firstSeen[$diff];
                    if ($len > $best) {
                        $best = $len;
                    }
                }
            } else {
                $firstSeen[$diff] = $i;
            }
        }

        return $best;
    }
}

$solution = new Solution();
echo $solution->longestBalanced("aabcc") . "\n";
