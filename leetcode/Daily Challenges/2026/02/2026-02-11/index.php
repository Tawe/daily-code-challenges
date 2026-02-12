<?php
class Solution {
    private $sum = [];
    private $minPref = [];
    private $maxPref = [];
    private $n = 0;

    private function update($node, $l, $r, $idx, $val) {
        if ($l === $r) {
            $this->sum[$node] = $val;
            $this->minPref[$node] = $val;
            $this->maxPref[$node] = $val;
            return;
        }
        $mid = intdiv($l + $r, 2);
        $left = $node * 2;
        $right = $left + 1;
        if ($idx <= $mid) {
            $this->update($left, $l, $mid, $idx, $val);
        } else {
            $this->update($right, $mid + 1, $r, $idx, $val);
        }
        $sumLeft = $this->sum[$left];
        $sumRight = $this->sum[$right];
        $this->sum[$node] = $sumLeft + $sumRight;
        $this->minPref[$node] = min($this->minPref[$left], $sumLeft + $this->minPref[$right]);
        $this->maxPref[$node] = max($this->maxPref[$left], $sumLeft + $this->maxPref[$right]);
    }

    private function queryFirst($node, $l, $r, $ql, $qr, $base, $target) {
        if ($r < $ql || $l > $qr) {
            return -1;
        }

        if ($ql <= $l && $r <= $qr) {
            if ($target < $base + $this->minPref[$node] || $target > $base + $this->maxPref[$node]) {
                return -1;
            }
            if ($l === $r) {
                return $l;
            }
            $mid = intdiv($l + $r, 2);
            $left = $node * 2;
            $right = $left + 1;

            if ($target >= $base + $this->minPref[$left] && $target <= $base + $this->maxPref[$left]) {
                $res = $this->queryFirst($left, $l, $mid, $ql, $qr, $base, $target);
                if ($res !== -1) {
                    return $res;
                }
            }
            return $this->queryFirst($right, $mid + 1, $r, $ql, $qr, $base + $this->sum[$left], $target);
        }

        $mid = intdiv($l + $r, 2);
        $left = $node * 2;
        $right = $left + 1;
        $res = $this->queryFirst($left, $l, $mid, $ql, $qr, $base, $target);
        if ($res !== -1) {
            return $res;
        }
        return $this->queryFirst($right, $mid + 1, $r, $ql, $qr, $base + $this->sum[$left], $target);
    }

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function longestBalanced($nums) {
        $n = count($nums);
        if ($n === 0) {
            return 0;
        }

        $this->n = $n;
        $size = 4 * $n + 5;
        $this->sum = array_fill(0, $size, 0);
        $this->minPref = array_fill(0, $size, 0);
        $this->maxPref = array_fill(0, $size, 0);

        $last = [];
        $ans = 0;

        for ($r = 0; $r < $n; $r++) {
            $val = $nums[$r];
            $sign = ($val % 2 === 0) ? 1 : -1;

            $old = $last[$val] ?? -1;
            if ($old >= 0) {
                $this->update(1, 0, $n - 1, $old, 0);
            }
            $this->update(1, 0, $n - 1, $r, $sign);
            $last[$val] = $r;

            $total = $this->sum[1];
            if ($total === 0) {
                $ans = max($ans, $r + 1);
            }

            if ($r > 0) {
                $idx = $this->queryFirst(1, 0, $n - 1, 0, $r - 1, 0, $total);
                if ($idx !== -1) {
                    $ans = max($ans, $r - $idx);
                }
            }
        }

        return $ans;
    }
}
