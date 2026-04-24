package main

import "fmt"

func orangesRotting(grid [][]int) int {
	m, n := len(grid), len(grid[0])
	queue := [][]int{}
	fresh := 0

	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if grid[i][j] == 2 {
				queue = append(queue, []int{i, j})
			} else if grid[i][j] == 1 {
				fresh++
			}
		}
	}

	if fresh == 0 {
		return 0
	}

	directions := [][]int{{0, 1}, {1, 0}, {0, -1}, {-1, 0}}
	minutes := 0

	for len(queue) > 0 && fresh > 0 {
		size := len(queue)
		for i := 0; i < size; i++ {
			cell := queue[0]
			queue = queue[1:]
			r, c := cell[0], cell[1]

			for _, d := range directions {
				nr, nc := r+d[0], c+d[1]
				if nr < 0 || nr >= m || nc < 0 || nc >= n {
					continue
				}
				if grid[nr][nc] != 1 {
					continue
				}
				grid[nr][nc] = 2
				fresh--
				queue = append(queue, []int{nr, nc})
			}
		}
		minutes++
	}

	if fresh > 0 {
		return -1
	}
	return minutes
}

func main() {
	fmt.Println(orangesRotting([][]int{{2,1,1},{1,1,0},{0,1,1}}))
	fmt.Println(orangesRotting([][]int{{2,1,1},{0,1,1},{1,0,1}}))
	fmt.Println(orangesRotting([][]int{{0,2}}))
}