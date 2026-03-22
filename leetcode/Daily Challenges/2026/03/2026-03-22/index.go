package main

import "fmt"

func findRotation(mat [][]int, target [][]int) bool {
	for i := 0; i < 4; i++ {
		if isSame(mat, target) {
			return true
		}
		mat = rotate(mat)
	}
	return false
}

func isSame(mat [][]int, target [][]int) bool {
	for i := 0; i < len(mat); i++ {
		for j := 0; j < len(mat[0]); j++ {
			if mat[i][j] != target[i][j] {
				return false
			}
		}
	}
	return true
}

func rotate(mat [][]int) [][]int {
	newMat := make([][]int, len(mat[0]))
	for i := 0; i < len(mat[0]); i++ {
		newMat[i] = make([]int, len(mat))
	}
	for i := 0; i < len(mat); i++ {
		for j := 0; j < len(mat[0]); j++ {
			newMat[j][len(mat)-1-i] = mat[i][j]
		}
	}
	return newMat
}
	
func main() {
	fmt.Println(findRotation([][]int{{0,1},{1,0}}, [][]int{{1,0},{0,1}}))
	fmt.Println(findRotation([][]int{{0,1},{1,1}}, [][]int{{1,0},{0,1}}))
	fmt.Println(findRotation([][]int{{0,0,0},{0,1,0},{1,1,1}}, [][]int{{1,1,1},{0,1,0},{0,0,0}}))
}
