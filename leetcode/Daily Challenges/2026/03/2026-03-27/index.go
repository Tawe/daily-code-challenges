package main

import "fmt"

func areSimilar(mat [][]int, k int) bool {
	for i := 0; i < len(mat); i++ {
		n := len(mat[i])
		shift := k % n

		newRow := make([]int, n)

		for j := 0; j < n; j++ {
			if i%2 == 0 {
				newRow[j] = mat[i][(j+shift)%n]
			} else {
				newRow[j] = mat[i][(j-shift+n)%n]
			}
		}

		for j := 0; j < n; j++ {
			if newRow[j] != mat[i][j] {
				return false
			}
		}
	}
	return true
}

func main() {
	fmt.Println(areSimilar([][]int{{1,2,3},{4,5,6}}, 1))
}