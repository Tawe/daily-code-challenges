package main

import "fmt"

func decodeString(s string) string {
	countStack := []int{}
	strStack := []string{}
	curr := ""
	num := 0

	for i := 0; i < len(s); i++ {
		ch := s[i]
		if ch >= '0' && ch <= '9' {
			num = num*10 + int(ch-'0')
		} else if ch == '[' {
			countStack = append(countStack, num)
			strStack = append(strStack, curr)
			num = 0
			curr = ""
		} else if ch == ']' {
			k := countStack[len(countStack)-1]
			countStack = countStack[:len(countStack)-1]

			prev := strStack[len(strStack)-1]
			strStack = strStack[:len(strStack)-1]

			repeated := ""
			for j := 0; j < k; j++ {
				repeated += curr
			}
			curr = prev + repeated
		} else {
			curr += string(ch)
		}
	}
	return curr
}

func main() {
	fmt.Println(decodeString("3[a]2[bc]"))
	fmt.Println(decodeString("3[a2[c]]"))
	fmt.Println(decodeString("2[abc]3[cd]ef"))
}