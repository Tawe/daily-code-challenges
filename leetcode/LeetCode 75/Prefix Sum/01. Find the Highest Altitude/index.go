package main

import "fmt"

func largestAltitude(gain []int) int {
	maxAltitude := 0
	altitude := 0
    for i := 0; i < len(gain); i++ {
		altitude += gain[i]
		if altitude > maxAltitude {
			maxAltitude = altitude
		}
    }
	fmt.Println(maxAltitude)
	return maxAltitude
}

func main() {
	fmt.Println(largestAltitude([]int{-5,1,5,0,-7}))
	fmt.Println(largestAltitude([]int{-4,-3,-2,-1,4,3,2}))
}