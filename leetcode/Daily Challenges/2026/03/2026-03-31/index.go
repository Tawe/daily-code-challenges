package main

import "fmt"

func generateString(str1 string, str2 string) string {
	n, m := len(str1), len(str2)
	L := n + m - 1

	word := make([]byte, L)
	fixed := make([]bool, L)
	for i := 0; i < L; i++ {
		word[i] = '?'
	}

	for i := 0; i < n; i++ {
		if str1[i] != 'T' {
			continue
		}
		for k := 0; k < m; k++ {
			p := i + k
			want := str2[k]
			if word[p] == '?' || word[p] == want {
				word[p] = want
				fixed[p] = true
			} else {
				return ""
			}
		}
	}

	// Start from lexicographically smallest baseline.
	for i := 0; i < L; i++ {
		if word[i] == '?' {
			word[i] = 'a'
		}
	}

	for i := 0; i < n; i++ {
		if str1[i] != 'F' {
			continue
		}

		equalWindow := true
		for k := 0; k < m; k++ {
			if word[i+k] != str2[k] {
				equalWindow = false
				break
			}
		}
		if !equalWindow {
			continue
		}

		rightMostFree := -1
		rightMostOffset := -1
		for k := m - 1; k >= 0; k-- {
			p := i + k
			if !fixed[p] {
				rightMostFree = p
				rightMostOffset = k
				break
			}
		}
		if rightMostFree == -1 {
			return ""
		}

		if str2[rightMostOffset] != 'a' {
			word[rightMostFree] = 'a'
		} else {
			word[rightMostFree] = 'b'
		}
	}

	return string(word)
}

func main() {
	fmt.Println(generateString("TFTF", "ab"))  // ababa
	fmt.Println(generateString("TFTF", "abc")) // ""
	fmt.Println(generateString("F", "d"))      // a
	fmt.Println(generateString("F", "da"))     // aa
}