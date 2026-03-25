package main

import "fmt"

func canPartitionGrid(grid [][]int) bool {
	m, n := len(grid), len(grid[0])

	total := 0
	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			total += grid[i][j]
		}
	}
	if total%2 != 0 {
		return false
	}
	half := total / 2

	prefix := 0
	for i := 0; i < m-1; i++ {
		for j := 0; j < n; j++ {
			prefix += grid[i][j]
		}
		if prefix == half {
			return true
		}
	}

	prefix = 0
	for j := 0; j < n-1; j++ {
		for i := 0; i < m; i++ {
			prefix += grid[i][j]
		}
		if prefix == half {
			return true
		}
	}

	return false
}

func main() {
	fmt.Println(canPartitionGrid([][]int{{1, 4}, {2, 3}}))
	fmt.Println(canPartitionGrid([][]int{{1, 3}, {2, 4}}))
}
