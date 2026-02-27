<?php
class Solution {

    /**
     * @param string $s
     * @param int $k
     * @return int
     */
    function minOperations($s, $k) {
        $n = strlen($s);

        $zeros = 0;
        for ($i = 0; $i < $n; $i++) {
            if ($s[$i] === '0') {
                $zeros++;
            }
        }

        if ($zeros === 0) {
            return 0;
        }

        $dist = array_fill(0, $n + 1, -1);
        $queue = [];
        $head = 0;

        $next = [];
        for ($i = 0; $i <= $n + 1; $i++) {
            $next[$i] = $i;
        }

        $findNext = function (int $i, array &$next, int $n): int {
            if ($i > $n) {
                return $n + 1;
            }
            $root = $i;
            while ($root <= $n && $next[$root] !== $root) {
                $root = $next[$root];
            }

            $cur = $i;
            while ($cur <= $n && $next[$cur] !== $cur) {
                $parent = $next[$cur];
                $next[$cur] = $root;
                $cur = $parent;
            }
            return ($root <= $n) ? $root : $n + 1;
        };

        $erase = function (int $i, array &$next, int $n, callable $findNext): void {
            if ($i < 0 || $i > $n) {
                return;
            }
            $next[$i] = $findNext($i + 2, $next, $n);
        };

        $dist[$zeros] = 0;
        $queue[] = $zeros;
        $erase($zeros, $next, $n, $findNext); // mark starting state as visited

        while ($head < count($queue)) {
            $z = $queue[$head++];
            $d = $dist[$z];

            if ($z === 0) {
                return $d;
            }

            $minA = max(0, $k - ($n - $z));
            $maxA = min($k, $z);
            if ($minA > $maxA) {
                continue;
            }

            $minZ = $z + $k - 2 * $maxA; // smallest z'
            $maxZ = $z + $k - 2 * $minA; // largest z'

            for ($nz = $findNext($minZ, $next, $n); $nz <= $maxZ; $nz = $findNext($nz, $next, $n)) {
                $dist[$nz] = $d + 1;
                $queue[] = $nz;
                $erase($nz, $next, $n, $findNext);
            }
        }

        return -1;
    }
}

$solution = new Solution();
echo $solution->minOperations("111000", 3) . "\n";