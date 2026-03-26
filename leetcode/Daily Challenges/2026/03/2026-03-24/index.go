package main

import "fmt"

func constructProductMatrix(grid [][]int) [][]int {
	const mod = 12345
	n := len(grid)
	m := len(grid[0])
	total := n * m

	flat := make([]int, 0, total)
	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			flat = append(flat, grid[i][j]%mod)
		}
	}

	left := make([]int, total)
	right := make([]int, total)

	left[0] = 1
	for i := 1; i < total; i++ {
		left[i] = (left[i-1] * flat[i-1]) % mod
	}

	right[total-1] = 1
	for i := total - 2; i >= 0; i-- {
		right[i] = (right[i+1] * flat[i+1]) % mod
	}

	p := make([][]int, n)
	idx := 0
	for i := 0; i < n; i++ {
		p[i] = make([]int, m)
		for j := 0; j < m; j++ {
			p[i][j] = (left[idx] * right[idx]) % mod
			idx++
		}
	}

	return p
}

func main() {
	fmt.Println(constructProductMatrix([][]int{{1,2},{3,4}}))
	fmt.Println(constructProductMatrix([][]int{{12345},{2},{1}}))
}