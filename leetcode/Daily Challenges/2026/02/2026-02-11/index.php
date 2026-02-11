<?php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function longestBalanced($nums) {
        $n = count($nums);
        if ($n === 0) {
            return 0;
        }

        $blockSize = (int)floor(sqrt($n)) + 1;
        $numBlocks = (int)ceil($n / $blockSize);

        $diff = array_fill(0, $n, 0);
        $blockLazy = array_fill(0, $numBlocks, 0);
        $blockMap = array_fill(0, $numBlocks, []);

        // Build initial maps (all zeros).
        for ($b = 0; $b < $numBlocks; $b++) {
            $start = $b * $blockSize;
            if ($start >= $n) {
                break;
            }
            $blockMap[$b][0] = $start;
        }

        $rebuildBlock = function($b) use (&$diff, &$blockMap, $blockSize, $n) {
            $start = $b * $blockSize;
            $end = min($n - 1, ($b + 1) * $blockSize - 1);
            $map = [];
            for ($i = $start; $i <= $end; $i++) {
                $val = $diff[$i];
                if (!array_key_exists($val, $map)) {
                    $map[$val] = $i;
                }
            }
            $blockMap[$b] = $map;
        };

        $pushLazy = function($b) use (&$diff, &$blockLazy, $blockSize, $n, $rebuildBlock) {
            $delta = $blockLazy[$b];
            if ($delta === 0) {
                return;
            }
            $start = $b * $blockSize;
            $end = min($n - 1, ($b + 1) * $blockSize - 1);
            for ($i = $start; $i <= $end; $i++) {
                $diff[$i] += $delta;
            }
            $blockLazy[$b] = 0;
            $rebuildBlock($b);
        };

        $rangeAddPrefix = function($pos, $delta) use (
            &$blockLazy, &$diff, $blockSize, $n, $rebuildBlock, $pushLazy
        ) {
            if ($pos < 0) {
                return;
            }
            $endBlock = intdiv($pos, $blockSize);
            for ($b = 0; $b < $endBlock; $b++) {
                $blockLazy[$b] += $delta;
            }
            // Partial block at end.
            $pushLazy($endBlock);
            $start = $endBlock * $blockSize;
            for ($i = $start; $i <= $pos; $i++) {
                $diff[$i] += $delta;
            }
            $rebuildBlock($endBlock);
        };

        $findLeftmostZero = function($R) use (&$blockLazy, &$blockMap, &$diff, $blockSize, $n) {
            if ($R < 0) {
                return null;
            }
            $endBlock = intdiv($R, $blockSize);
            for ($b = 0; $b < $endBlock; $b++) {
                $target = -$blockLazy[$b];
                if (array_key_exists($target, $blockMap[$b])) {
                    return $blockMap[$b][$target];
                }
            }
            // Scan within the last (partial) block.
            $start = $endBlock * $blockSize;
            $lazy = $blockLazy[$endBlock];
            for ($i = $start; $i <= $R; $i++) {
                if ($diff[$i] + $lazy === 0) {
                    return $i;
                }
            }
            return null;
        };

        $last = [];
        $ans = 0;

        for ($r = 0; $r < $n; $r++) {
            $val = $nums[$r];
            $sign = ($val % 2 === 0) ? 1 : -1;

            $old = array_key_exists($val, $last) ? $last[$val] : -1;
            if ($old >= 0) {
                $rangeAddPrefix($old, -$sign);
            }
            $rangeAddPrefix($r, $sign);
            $last[$val] = $r;

            $l = $findLeftmostZero($r);
            if ($l !== null) {
                $ans = max($ans, $r - $l + 1);
            }
        }

        return $ans;
    }
}

$solution = new Solution();
echo $solution->longestBalanced([2, 5, 4, 3]) . "\n";
