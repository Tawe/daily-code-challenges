package main

import "fmt"

func canPartitionGrid(grid [][]int) bool {
	m, n := len(grid), len(grid[0])

	var total int64
	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			total += int64(grid[i][j])
		}
	}

	topCount := map[int]int{}
	bottomCount := map[int]int{}
	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			bottomCount[grid[i][j]]++
		}
	}

	var topSum int64
	bottomSum := total
	for cut := 0; cut < m-1; cut++ {
		for j := 0; j < n; j++ {
			v := grid[cut][j]
			topCount[v]++
			bottomCount[v]--
			if bottomCount[v] == 0 {
				delete(bottomCount, v)
			}
			topSum += int64(v)
			bottomSum -= int64(v)
		}

		if topSum == bottomSum {
			return true
		}
		if topSum > bottomSum {
			diff := topSum - bottomSum
			if canDiscountHorizontal(grid, 0, cut, n, diff, topCount) {
				return true
			}
		} else {
			diff := bottomSum - topSum
			if canDiscountHorizontal(grid, cut+1, m-1, n, diff, bottomCount) {
				return true
			}
		}
	}

	leftCount := map[int]int{}
	rightCount := map[int]int{}
	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			rightCount[grid[i][j]]++
		}
	}

	var leftSum int64
	rightSum := total
	for cut := 0; cut < n-1; cut++ {
		for i := 0; i < m; i++ {
			v := grid[i][cut]
			leftCount[v]++
			rightCount[v]--
			if rightCount[v] == 0 {
				delete(rightCount, v)
			}
			leftSum += int64(v)
			rightSum -= int64(v)
		}

		if leftSum == rightSum {
			return true
		}
		if leftSum > rightSum {
			diff := leftSum - rightSum
			if canDiscountVertical(grid, 0, cut, m, diff, leftCount) {
				return true
			}
		} else {
			diff := rightSum - leftSum
			if canDiscountVertical(grid, cut+1, n-1, m, diff, rightCount) {
				return true
			}
		}
	}

	return false
}

func canDiscountHorizontal(grid [][]int, r1, r2, n int, diff int64, count map[int]int) bool {
	if diff <= 0 || diff > 100000 {
		return false
	}
	target := int(diff)
	h := r2 - r1 + 1
	w := n

	if h > 1 && w > 1 {
		return count[target] > 0
	}

	if h == 1 {
		return grid[r1][0] == target || grid[r1][n-1] == target
	}

	return grid[r1][0] == target || grid[r2][0] == target
}

func canDiscountVertical(grid [][]int, c1, c2, m int, diff int64, count map[int]int) bool {
	if diff <= 0 || diff > 100000 {
		return false
	}
	target := int(diff)
	h := m
	w := c2 - c1 + 1

	if h > 1 && w > 1 {
		return count[target] > 0
	}
	if h == 1 {
		return grid[0][c1] == target || grid[0][c2] == target
	}
	return grid[0][c1] == target || grid[m-1][c1] == target
}

func main() {
	fmt.Println(canPartitionGrid([][]int{{1, 4}, {2, 3}})) 
	fmt.Println(canPartitionGrid([][]int{{1, 2}, {3, 4}}))
	fmt.Println(canPartitionGrid([][]int{{1, 2, 4}, {2, 3, 5}}))
	fmt.Println(canPartitionGrid([][]int{{4, 1, 8}, {3, 2, 6}}))
}