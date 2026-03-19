package main

import "fmt"

func findMaxAverage(nums []int, k int) float64 {
	sum := 0
	for i := 0; i < k; i++ {
		sum += nums[i]
	}

	maxAverage := float64(sum) / float64(k)

	for r := k; r < len(nums); r++ {
		sum += nums[r]
		sum -= nums[r-k]

		avg := float64(sum) / float64(k)
		if avg > maxAverage {
			maxAverage = avg
		}
	}

	return maxAverage
}

func main() {
	fmt.Println(findMaxAverage([]int{1,12,-5,-6,50,3}, 4))
	fmt.Println(findMaxAverage([]int{5}, 1))
}