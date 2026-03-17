package main

import (
	"fmt"
	"sort"
)

func largestSubmatrix(matrix [][]int) int {
	m := len(matrix)
	if m == 0 {
		return 0
	}
	n := len(matrix[0])

	dp := make([][]int, m)
	for i := 0; i < m; i++ {
		dp[i] = make([]int, n)
		for j := 0; j < n; j++ {
			if matrix[i][j] == 0 {
				dp[i][j] = 0
			} else if i == 0 {
				dp[i][j] = 1
			} else {
				dp[i][j] = dp[i-1][j] + 1
			}
		}
	}

	maxArea := 0

	for i := 0; i < m; i++ {
		heights := make([]int, n)
		copy(heights, dp[i])
		sort.Sort(sort.Reverse(sort.IntSlice(heights)))

		for width := 1; width <= n; width++ {
			if heights[width-1] == 0 {
				break
			}
			area := heights[width-1] * width
			if area > maxArea {
				maxArea = area
			}
		}
	}

	return maxArea
}

func main() {
	fmt.Println(largestSubmatrix([][]int{{0, 0, 1}, {1, 1, 1}, {1, 0, 1}}))
	fmt.Println(largestSubmatrix([][]int{{1, 0, 1, 0, 1}}))
	fmt.Println(largestSubmatrix([][]int{{1, 1, 0}, {1, 0, 1}}))
}