package main

import "fmt"

func reverseSubmatrix(grid [][]int, x int, y int, k int) [][]int {
	for i := 0; i < k/2; i++ {
		top, bottom := x+i, x+k-1-i
		for j := 0; j < k; j++ {
			grid[top][y+j], grid[bottom][y+j] = grid[bottom][y+j], grid[top][y+j]
		}
	}
	return grid
}

func main() {
	fmt.Println(reverseSubmatrix([][]int{{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}, {13, 14, 15, 16}}, 1, 0, 3))
	fmt.Println(reverseSubmatrix([][]int{{3, 4, 2, 3}, {2, 3, 4, 2}}, 0, 2, 2))
}