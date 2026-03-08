package main

import "fmt"

func kidsWithCandies(candies []int, extraCandies int) []bool {
	result := []bool{}
	for i := 0; i < len(candies); i++ {
		if candies[i] + extraCandies >= max(candies) {
			result = append(result, true)
		} else {	
			result = append(result, false)
		}
	}
	return result
}

func max(candies []int) int {
	max := candies[0]
	for i := 0; i < len(candies); i++ {
		if candies[i] > max {
			max = candies[i]
		}
	}
	return max
}

func main() {
	fmt.Println(kidsWithCandies([]int{2,3,5,1,3}, 3))
	fmt.Println(kidsWithCandies([]int{4,2,1,1,2}, 1))
	fmt.Println(kidsWithCandies([]int{12,1,12}, 10))
}