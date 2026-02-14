<?php
class Solution {

    /**
     * @param Integer $poured
     * @param Integer $query_row
     * @param Integer $query_glass
     * @return Float
     */
    function champagneTower($poured, $query_row, $query_glass) {
        $row = array_fill(0, $query_row + 2, 0.0);
        $row[0] = (float)$poured;

        for ($r = 0; $r < $query_row; $r++) {
            for ($c = $r; $c >= 0; $c--) {
                $overflow = max(0.0, ($row[$c] - 1.0) / 2.0);
                $row[$c] = $overflow;
                $row[$c + 1] += $overflow;
            }
        }

        return min(1.0, $row[$query_glass]);
    }
}

$solution = new Solution();
echo $solution->champagneTower(poured: 1, query_row: 1, query_glass: 1) . "\n";
echo $solution->champagneTower(poured: 2, query_row: 1, query_glass: 1) . "\n";
echo $solution->champagneTower(poured: 100000009, query_row: 33, query_glass: 17) . "\n";
