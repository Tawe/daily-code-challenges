package main

import "fmt"

func numberOfSubmatrices(grid [][]byte) int {
	m := len(grid)
	n := len(grid[0])
	colDiff := make([]int, n)
	colX := make([]int, n)
	count := 0

	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if grid[i][j] == 'X' {
				colDiff[j]++
				colX[j]++
			} else if grid[i][j] == 'Y' {
				colDiff[j]--
			}
		}

		prefixDiff := 0
		prefixX := 0
		for j := 0; j < n; j++ {
			prefixDiff += colDiff[j]
			prefixX += colX[j]
			if prefixDiff == 0 && prefixX > 0 {
				count++
			}
		}
	}

	return count
}

func main() {
	fmt.Println(numberOfSubmatrices([][]byte{{'X', 'Y', '.'}, {'Y', '.', '.'}}))
	fmt.Println(numberOfSubmatrices([][]byte{{'X', 'X'}, {'X', 'Y'}}))
	fmt.Println(numberOfSubmatrices([][]byte{{'.', '.'}, {'.', '.'}}))
}