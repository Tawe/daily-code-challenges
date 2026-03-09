package main

import "fmt"

func canPlaceFlowers(flowerbed []int, n int) bool {

	for i := 0; i < len(flowerbed); i++ {
		if flowerbed[i] == 0 && (i == 0 || flowerbed[i-1] == 0) && (i == len(flowerbed)-1 || flowerbed[i+1] == 0) {

			flowerbed[i] = 1
			n--

			if n <= 0 {
				return true
			}
		}
	}

	return n <= 0
}

func main() {
	fmt.Println(canPlaceFlowers([]int{1,0,0,0,1}, 1))
	fmt.Println(canPlaceFlowers([]int{1,0,0,0,1}, 2))
}