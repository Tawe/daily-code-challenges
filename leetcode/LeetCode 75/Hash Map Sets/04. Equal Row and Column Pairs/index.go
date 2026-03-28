package main

import (
	"fmt"
	"strconv"
	"strings"
)

func equalPairs(grid [][]int) int {
	n := len(grid)
	rowFreq := make(map[string]int)
	for _, row := range grid {
		rowFreq[rowKey(row)]++
	}
	ans := 0
	for j := 0; j < n; j++ {
		col := make([]int, n)
		for i := 0; i < n; i++ {
			col[i] = grid[i][j]
		}
		ans += rowFreq[rowKey(col)]
	}
	return ans
}

func rowKey(a []int) string {
	parts := make([]string, len(a))
	for i, v := range a {
		parts[i] = strconv.Itoa(v)
	}
	return strings.Join(parts, ",")
}

func main() {
	fmt.Println(equalPairs([][]int{{3, 2, 1}, {1, 7, 6}, {2, 7, 7}}))
	fmt.Println(equalPairs([][]int{{3, 1, 2, 2}, {1, 4, 4, 5}, {2, 4, 2, 2}, {2, 4, 2, 2}}))
}
