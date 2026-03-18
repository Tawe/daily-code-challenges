package main

import "fmt"

func mergeAlternately(word1 string, word2 string) string {
	result := ""
	for i := 0; i < len(word1) || i < len(word2); i++ {
		if i < len(word1) {
			result += string(word1[i])
		}
		if i < len(word2) {
			result += string(word2[i])
		}
	}
	return result
}

func main() {
	fmt.Println(mergeAlternately("abc", "pqr"))
	fmt.Println(mergeAlternately("ab", "pqrs"))
	fmt.Println(mergeAlternately("abcd", "pq"))
}