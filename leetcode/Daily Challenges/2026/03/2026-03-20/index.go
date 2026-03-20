package main

import (
	"fmt"
	"sort"
)

func minAbsDiff(grid [][]int, k int) [][]int {
	m := len(grid)
	n := len(grid[0])
	outRows := m - k + 1
	outCols := n - k + 1

	ans := make([][]int, outRows)
	for i := 0; i < outRows; i++ {
		ans[i] = make([]int, outCols)
	}

	vals := make([]int, 0, k*k)
	for r := 0; r <= m-k; r++ {
		for c := 0; c <= n-k; c++ {
			vals = vals[:0]
			for i := r; i < r+k; i++ {
				for j := c; j < c+k; j++ {
					vals = append(vals, grid[i][j])
				}
			}

			sort.Ints(vals)

			minDiff := 0
			foundPair := false
			prev := 0
			havePrev := false
			for _, v := range vals {
				if !havePrev {
					prev = v
					havePrev = true
					continue
				}
				if v == prev {
					continue
				}
				diff := absInt(v - prev)
				if !foundPair || diff < minDiff {
					minDiff = diff
				}
				foundPair = true
				prev = v
			}

			ans[r][c] = minDiff
		}
	}
	return ans
}

func absInt(x int) int {
	if x < 0 {
		return -x
	}
	return x
}

func main() {
	fmt.Println(minAbsDiff([][]int{{1, 8}, {3, -2}}, 2)) // [[2]]
	fmt.Println(minAbsDiff([][]int{{3, -1}}, 1))        // [[0,0]]
	fmt.Println(minAbsDiff([][]int{{1, -2, 3}, {2, 3, 5}}, 2))
}

