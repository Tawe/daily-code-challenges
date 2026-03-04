package main

import "fmt"

func numSpecial(mat [][]int) int {
    m := len(mat)
    n := len(mat[0])
    count := 0
    for i := 0; i < m; i++ {
        for j := 0; j < n; j++ {
            if mat[i][j] == 1 {
                rowCount := 0
                colCount := 0
                for k := 0; k < m; k++ {
                    if mat[k][j] == 1 {
                        rowCount++
                    }
                }
                for k := 0; k < n; k++ {
                    if mat[i][k] == 1 {
                        colCount++
                    }
                }
                if rowCount == 1 && colCount == 1 {
                    count++
                }
            }
        }
    }
    return count
}

func main() {
	fmt.Println(numSpecial([][]int{{1,0,0},{0,0,1},{1,0,0}})) // 1
	fmt.Println(numSpecial([][]int{{1,0,0},{0,1,0},{0,0,1}})) // 3
}