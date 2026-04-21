package main

import "fmt"

func findCircleNum(isConnected [][]int) int {
    n := len(isConnected)
    visited := make([]bool, n)
    count := 0
    for i := 0; i < n; i++ {
        if !visited[i] {
            dfs(isConnected, visited, i)
            count++
        }
    }
    return count
}

func dfs(isConnected [][]int, visited []bool, i int) {
    visited[i] = true
    for j := 0; j < len(isConnected[i]); j++ {
        if isConnected[i][j] == 1 && !visited[j] {
            dfs(isConnected, visited, j)
        }
    }
}

func main() {
	fmt.Println(findCircleNum([][]int{{1, 1, 0}, {1, 1, 0}, {0, 0, 1}}))
	fmt.Println(findCircleNum([][]int{{1, 0, 0}, {0, 1, 0}, {0, 0, 1}}))
}