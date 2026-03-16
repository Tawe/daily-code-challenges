package main

import (
	"fmt"
	"sort"
)

func getBiggestThree(grid [][]int) []int {
	m := len(grid)
	if m == 0 {
		return []int{}
	}
	n := len(grid[0])

	distinct := make(map[int]struct{})

	// Area-0 rhombuses: each single cell.
	for r := 0; r < m; r++ {
		for c := 0; c < n; c++ {
			distinct[grid[r][c]] = struct{}{}
		}
	}

	// Larger rhombuses defined by top vertex (r, c) and size s.
	for r := 0; r < m; r++ {
		for c := 0; c < n; c++ {
			for s := 1; ; s++ {
				// Check bounds for all four vertices:
				// top:    (r, c)
				// right:  (r+s, c+s)
				// bottom: (r+2s, c)
				// left:   (r+s, c-s)
				if r+2*s >= m || c-s < 0 || c+s >= n {
					break
				}

				sum := 0
				x, y := r, c

				// down-right side
				for i := 0; i < s; i++ {
					x++
					y++
					sum += grid[x][y]
				}

				// down-left side
				for i := 0; i < s; i++ {
					x++
					y--
					sum += grid[x][y]
				}

				// up-left side
				for i := 0; i < s; i++ {
					x--
					y--
					sum += grid[x][y]
				}

				// up-right side (this last step returns to (r, c))
				for i := 0; i < s; i++ {
					x--
					y++
					sum += grid[x][y]
				}

				distinct[sum] = struct{}{}
			}
		}
	}

	var vals []int
	for v := range distinct {
		vals = append(vals, v)
	}
	sort.Sort(sort.Reverse(sort.IntSlice(vals)))

	if len(vals) > 3 {
		vals = vals[:3]
	}
	return vals
}

func main() {
	grid := [][]int{
		{3, 4, 5, 1, 3},
		{3, 3, 4, 2, 3},
		{20, 30, 200, 40, 10},
		{1, 5, 5, 4, 1},
		{4, 3, 2, 2, 5},
	}
	fmt.Println(getBiggestThree(grid))
}