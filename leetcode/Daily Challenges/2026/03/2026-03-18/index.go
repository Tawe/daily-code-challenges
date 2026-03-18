package main

import "fmt"

func countSubmatrices(grid [][]int, k int) int {
	count := 0

	for i := 0; i < len(grid); i++ {
		for j := 0; j < len(grid[0]); j++ {
			if i > 0 {
				grid[i][j] += grid[i-1][j]
			}
			if j > 0 {
				grid[i][j] += grid[i][j-1]
			}
			if i > 0 && j > 0 {
				grid[i][j] -= grid[i-1][j-1]
			}

			if grid[i][j] <= k {
				count++
			}
		}
	}
	return count
}

func main() {
	fmt.Println(countSubmatrices([][]int{{7,6,3},{6,6,1}}, 18))
	fmt.Println(countSubmatrices([][]int{{7,2,9},{1,5,0},{2,6,6}}, 20))
	fmt.Println(countSubmatrices([][]int{{7,7,10,9},{10,5,10,3}}, 54))
}