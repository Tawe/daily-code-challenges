package main

import "fmt"

func maxProductPath(grid [][]int) int {
	const mod int64 = 1_000_000_007
	m, n := len(grid), len(grid[0])

	maxDP := make([][]int64, m)
	minDP := make([][]int64, m)
	for i := 0; i < m; i++ {
		maxDP[i] = make([]int64, n)
		minDP[i] = make([]int64, n)
	}

	start := int64(grid[0][0])
	maxDP[0][0], minDP[0][0] = start, start


	for j := 1; j < n; j++ {
		v := int64(grid[0][j])
		a := maxDP[0][j-1] * v
		b := minDP[0][j-1] * v
		maxDP[0][j] = max64(a, b)
		minDP[0][j] = min64(a, b)
	}

	for i := 1; i < m; i++ {
		v := int64(grid[i][0])
		a := maxDP[i-1][0] * v
		b := minDP[i-1][0] * v
		maxDP[i][0] = max64(a, b)
		minDP[i][0] = min64(a, b)
	}

	for i := 1; i < m; i++ {
		for j := 1; j < n; j++ {
			v := int64(grid[i][j])

			c1 := maxDP[i-1][j] * v
			c2 := minDP[i-1][j] * v
			c3 := maxDP[i][j-1] * v
			c4 := minDP[i][j-1] * v

			maxDP[i][j] = max64(max64(c1, c2), max64(c3, c4))
			minDP[i][j] = min64(min64(c1, c2), min64(c3, c4))
		}
	}

	best := maxDP[m-1][n-1]
	if best < 0 {
		return -1
	}
	return int(best % mod)
}

func max64(a, b int64) int64 {
	if a > b {
		return a
	}
	return b
}

func min64(a, b int64) int64 {
	if a < b {
		return a
	}
	return b
}

func main() {
	fmt.Println(maxProductPath([][]int{{1, -2, 1}, {1, -2, 1}, {3, -4, 1}}))
	fmt.Println(maxProductPath([][]int{{-1, -2, -3}, {-2, -3, -3}, {-3, -3, -2}}))
	fmt.Println(maxProductPath([][]int{{1, 3}, {0, -4}}))
}