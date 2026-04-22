package main

import "fmt"

func calcEquation(equations [][]string, values []float64, queries [][]string) []float64 {
	graph := make(map[string]map[string]float64)
	for i, equation := range equations {
		a, b := equation[0], equation[1]
		if _, ok := graph[a]; !ok {
			graph[a] = make(map[string]float64)
		}
		if _, ok := graph[b]; !ok {
			graph[b] = make(map[string]float64)
		}
		graph[a][b] = values[i]
		graph[b][a] = 1.0 / values[i]
	}

	result := make([]float64, len(queries))
	for i, query := range queries {
		a, b := query[0], query[1]
		if _, ok := graph[a]; !ok {
			result[i] = -1.0
			continue
		}
		if _, ok := graph[b]; !ok {
			result[i] = -1.0
			continue
		}
		visited := make(map[string]bool)
		result[i] = dfs(graph, a, b, 1.0, visited)
	}
	return result
}

func dfs(graph map[string]map[string]float64, a, b string, product float64, visited map[string]bool) float64 {
	if a == b {
		return product
	}

	visited[a] = true
	for neighbor, value := range graph[a] {
		if visited[neighbor] {
			continue
		}
		answer := dfs(graph, neighbor, b, product*value, visited)
		if answer != -1.0 {
			return answer
		}
	}

	return -1.0
}

func main() {
	fmt.Println(calcEquation([][]string{{"a", "b"}, {"b", "c"}}, []float64{2.0, 3.0}, [][]string{{"a", "c"}, {"b", "a"}, {"a", "e"}, {"a", "a"}, {"x", "x"}}))
}