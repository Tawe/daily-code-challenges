package main

import (
	"fmt"
	"slices"
)

func findDifference(nums1 []int, nums2 []int) [][]int {
	 result1, result2 := []int{}, []int{}

	for _, v := range nums1 {
		if !slices.Contains(nums2, v) && !slices.Contains(result1, v) {
			result1 = append(result1, v)
		}
	}
	for _, v := range nums2 {
		if !slices.Contains(nums1, v) && !slices.Contains(result2, v) {
			result2 = append(result2, v)
		}
	}

	return [][]int{result1, result2}
}

func main() {
	fmt.Println(findDifference([]int{1, 2, 3}, []int{2, 4, 6}))
	fmt.Println(findDifference([]int{1, 2, 3, 3}, []int{1, 1, 2, 2}))
}
