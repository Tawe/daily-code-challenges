package main

import "fmt"

func canVisitAllRooms(rooms [][]int) bool {
	n := len(rooms)
	visited := make([]bool, n)
	stack := []int{0}
	visited[0] = true
	visitedCount := 1

	for len(stack) > 0 {
		room := stack[len(stack)-1]
		stack = stack[:len(stack)-1]

		for _, key := range rooms[room] {
			if !visited[key] {
				visited[key] = true
				visitedCount++
				stack = append(stack, key)
			}
		}
	}

	return visitedCount == n
}

func main() {
	fmt.Println(canVisitAllRooms([][]int{{1}, {2}, {3}, {}}))
	fmt.Println(canVisitAllRooms([][]int{{1, 3}, {3, 0, 1}, {2}, {0}}))
}