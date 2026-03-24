package main

import "fmt"

func pivotIndex(nums []int) int {
    leftSum := 0
	rightSum := 0
	for i := 0; i < len(nums); i++ {
		rightSum += nums[i]
	}
	for i := 0; i < len(nums); i++ {
		rightSum -= nums[i]
		if leftSum == rightSum {
			return i
		}
		leftSum += nums[i]
	}
	return -1
}

func main() {
	fmt.Println(pivotIndex([]int{1,7,3,6,5,6}))
	fmt.Println(pivotIndex([]int{1,2,3}))
	fmt.Println(pivotIndex([]int{2,1,-1}))
}