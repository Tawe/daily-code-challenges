package main

import "fmt"

func findTheString(lcp [][]int) string {
	n := len(lcp)
	if n == 0 {
		return ""
	}

	for i := 0; i < n; i++ {
		if len(lcp[i]) != n {
			return ""
		}
		if lcp[i][i] != n-i {
			return ""
		}
		for j := 0; j < n; j++ {
			if lcp[i][j] != lcp[j][i] {
				return ""
			}
			if lcp[i][j] < 0 || lcp[i][j] > n {
				return ""
			}
		}
	}
	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			if i < n-1 && j < n-1 {
				if lcp[i][j] > 0 && lcp[i][j] != 1+lcp[i+1][j+1] {
					return ""
				}
			} else if (i == n-1) != (j == n-1) {
				if lcp[i][j] > 1 {
					return ""
				}
			}
		}
	}

	parent := make([]int, n)
	for i := range parent {
		parent[i] = i
	}
	var find func(int) int
	find = func(x int) int {
		if parent[x] != x {
			parent[x] = find(parent[x])
		}
		return parent[x]
	}
	union := func(a, b int) {
		ra, rb := find(a), find(b)
		if ra != rb {
			parent[rb] = ra
		}
	}

	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			if lcp[i][j] > 0 {
				union(i, j)
			}
		}
	}

	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			if i == j {
				continue
			}
			same := find(i) == find(j)
			pos := lcp[i][j] > 0
			if same != pos {
				return ""
			}
		}
	}

	rootChar := make([]byte, n)
	for i := 0; i < n; i++ {
		r := find(i)
		if rootChar[r] != 0 {
			continue
		}
		for c := byte('a'); c <= 'z'; c++ {
			ok := true
			for j := 0; j < i; j++ {
				if lcp[i][j] == 0 && rootChar[find(j)] == c {
					ok = false
					break
				}
			}
			if ok {
				rootChar[r] = c
				break
			}
		}
		if rootChar[r] == 0 {
			return ""
		}
	}

	b := make([]byte, n)
	for i := 0; i < n; i++ {
		b[i] = rootChar[find(i)]
	}
	return string(b)
}

func main() {
	fmt.Println(findTheString([][]int{{4, 0, 2, 0}, {0, 3, 0, 1}, {2, 0, 2, 0}, {0, 1, 0, 1}}))
	fmt.Println(findTheString([][]int{{4, 3, 2, 1}, {3, 3, 2, 1}, {2, 2, 2, 1}, {1, 1, 1, 1}}))
	fmt.Println(findTheString([][]int{{4, 3, 2, 1}, {3, 3, 2, 1}, {2, 2, 2, 1}, {1, 1, 1, 3}}))
}
