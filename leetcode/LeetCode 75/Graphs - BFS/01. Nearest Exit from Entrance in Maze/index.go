package main

import "fmt"	

func nearestExit(maze [][]byte, entrance []int) int {
	m := len(maze)
	n := len(maze[0])
	visited := make([][]bool, m)
	for i := range visited {
		visited[i] = make([]bool, n)
	}

	visited[entrance[0]][entrance[1]] = true
	queue := [][]int{{entrance[0], entrance[1]}}
	directions := [][]int{{0, 1}, {1, 0}, {0, -1}, {-1, 0}}
	steps := 0

	for len(queue) > 0 {
		levelSize := len(queue)
		for i := 0; i < levelSize; i++ {
			cell := queue[0]
			queue = queue[1:]
			r, c := cell[0], cell[1]

			if steps > 0 && (r == 0 || r == m-1 || c == 0 || c == n-1) {
				return steps
			}

			for _, d := range directions {
				nr, nc := r+d[0], c+d[1]
				if nr < 0 || nr >= m || nc < 0 || nc >= n {
					continue
				}
				if maze[nr][nc] == '+' || visited[nr][nc] {
					continue
				}
				visited[nr][nc] = true
				queue = append(queue, []int{nr, nc})
			}
		}
		steps++
	}

	return -1
}	

func main() {
	fmt.Println(nearestExit([][]byte{{'+', '+', '.', '+'}, {'.', '.', '.', '+'}, {'+', '+', '+', '.'}}, []int{1, 2}))
}