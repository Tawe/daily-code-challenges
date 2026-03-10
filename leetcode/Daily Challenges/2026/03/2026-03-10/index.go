package main

import "fmt"

func numberOfStableArrays(zero int, one int, limit int) int {
	const MOD = 1000000007

	dp0 := make([][]int, zero+1)
	dp1 := make([][]int, zero+1) 
	pref0 := make([][]int, zero+1)
	pref1 := make([][]int, zero+1)
	for i := 0; i <= zero; i++ {
		dp0[i] = make([]int, one+1)
		dp1[i] = make([]int, one+1)
		pref0[i] = make([]int, one+1)
		pref1[i] = make([]int, one+1)
	}

	for i := 0; i <= zero; i++ {
		for j := 0; j <= one; j++ {
			var v0, v1 int

			if i == 0 && j == 0 {
			} else {
				if i > 0 {
					if j == 0 {
						if i <= limit {
							v0 = 1
						}
					} else {
						L := i - limit
						if L < 0 {
							L = 0
						}
						R := i - 1
						if R >= 0 {
							sum := pref1[R][j]
							if L > 0 {
								sum -= pref1[L-1][j]
							}
							sum %= MOD
							if sum < 0 {
								sum += MOD
							}
							v0 = sum
						}
					}
				}
				if j > 0 {
					if i == 0 {
						if j <= limit {
							v1 = 1
						}
					} else {
						L := j - limit
						if L < 0 {
							L = 0
						}
						R := j - 1
						if R >= 0 {
							sum := pref0[i][R]
							if L > 0 {
								sum -= pref0[i][L-1]
							}
							sum %= MOD
							if sum < 0 {
								sum += MOD
							}
							v1 = sum
						}
					}
				}
			}

			dp0[i][j] = v0
			dp1[i][j] = v1

			if i == 0 {
				pref1[i][j] = v1
			} else {
				pref1[i][j] = (pref1[i-1][j] + v1) % MOD
			}

			if j == 0 {
				pref0[i][j] = v0
			} else {
				pref0[i][j] = (pref0[i][j-1] + v0) % MOD
			}
		}
	}

	ans := dp0[zero][one] + dp1[zero][one]
	ans %= MOD
	return ans
}

func main() {
	fmt.Println(numberOfStableArrays(1, 1, 2)) // 2
	fmt.Println(numberOfStableArrays(1, 2, 1)) // 1
	fmt.Println(numberOfStableArrays(3, 3, 2)) // 14
}