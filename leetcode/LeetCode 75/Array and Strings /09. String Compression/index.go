package main

import (
	"fmt"
	"strconv"
)

func compress(chars []byte) int {

	write := 0
	read := 0

	for read < len(chars) {
		char := chars[read]
		count := 0

		for read < len(chars) && chars[read] == char {
			read++
			count++
		}

		chars[write] = char
		write++

		if count > 1 {
			for _, c := range strconv.Itoa(count) {
				chars[write] = byte(c)
				write++
			}
		}
	}

	return write
}

func main() {
	c1 := []byte("aabbccc")
	n1 := compress(c1)
	fmt.Println(n1, string(c1[:n1]))

	c2 := []byte("a")
	n2 := compress(c2)
	fmt.Println(n2, string(c2[:n2]))

	c3 := []byte("abbbbbbbbbbbb")
	n3 := compress(c3)
	fmt.Println(n3, string(c3[:n3]))
}