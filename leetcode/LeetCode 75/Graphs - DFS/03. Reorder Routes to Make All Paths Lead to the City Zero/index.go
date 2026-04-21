package main

import "fmt"

func minReorder(n int, connections [][]int) int {
	graph := make([][][2]int, n)
	for _, edge := range connections {
		a, b := edge[0], edge[1]
		graph[a] = append(graph[a], [2]int{b, 1})
		graph[b] = append(graph[b], [2]int{a, 0})
	}

	changes := 0
	visited := make([]bool, n)
	stack := []int{0}
	visited[0] = true

	for len(stack) > 0 {
		city := stack[len(stack)-1]
		stack = stack[:len(stack)-1]

		for _, next := range graph[city] {
			neighbor, needsFlip := next[0], next[1]
			if visited[neighbor] {
				continue
			}
			visited[neighbor] = true
			changes += needsFlip
			stack = append(stack, neighbor)
		}
	}

	return changes
}

func main() {
	fmt.Println(minReorder(4, [][]int{{0, 1}, {1, 2}, {2, 3}, {3, 0}}))
}