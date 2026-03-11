package main

import "fmt"

func bitwiseComplement(n int) int {
	if n == 0 {
        return 1
    }
	return n ^ (1<<bits.Len(uint(n)) - 1)
}

func main() {
	fmt.Println(bitwiseComplement(5))
	fmt.Println(bitwiseComplement(7))
	fmt.Println(bitwiseComplement(10))
}