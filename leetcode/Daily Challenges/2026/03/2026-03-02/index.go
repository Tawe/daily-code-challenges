package main

import "fmt"

func minSwaps(grid [][]int) int {
	n := len(grid)

	trailing := make([]int, n)
	for i := 0; i < n; i++ {
		cnt := 0
		for j := n - 1; j >= 0 && grid[i][j] == 0; j-- {
			cnt++
		}
		trailing[i] = cnt
	}

	swaps := 0

	for i := 0; i < n; i++ {
		needZeros := n - 1 - i
		j := i
		for j < n && trailing[j] < needZeros {
			j++
		}
		if j == n {
			return -1
		}

		for j > i {
			trailing[j], trailing[j-1] = trailing[j-1], trailing[j]
			swaps++
			j--
		}
	}

	return swaps
}

func main() {
	fmt.Println(minSwaps([][]int{{0, 0, 1}, {1, 1, 0}, {1, 0, 0}}))                         // 3
	fmt.Println(minSwaps([][]int{{0, 1, 1, 0}, {0, 1, 1, 0}, {0, 1, 1, 0}, {0, 1, 1, 0}})) // -1
	fmt.Println(minSwaps([][]int{{1, 0, 0}, {1, 1, 0}, {1, 1, 1}}))                         // 0
}