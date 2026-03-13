package main

import "fmt"


func increasingTriplet(nums []int) bool {
	first := math.MaxInt64 
	second := math.MaxInt64 
	for _, x := range nums {
		if x <= first {
			first = x
		} else if x <= second {
			second = x
		} else {
			return true
		}
	}
	return false
}


func main() {
	fmt.Println(increasingTriplet([]int{2,1,5,0,4,6}))
}