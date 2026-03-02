package main

import "fmt"

func minPartitions(n string) int {
    var maxDigit rune = '0'
    for _, digit := range n {
        if digit > maxDigit {
            maxDigit = digit
        }
    }
    return int(maxDigit - '0')
}

func main() {
	fmt.Println(minPartitions("32"))
	fmt.Println(minPartitions("82734"))
	fmt.Println(minPartitions("27346209830709182346"))
}