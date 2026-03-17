package main

import "fmt"

func numberOfStableArrays(zero int, one int, limit int) int {
	const MOD = 1000000007

	dp0 := make([][][]int, zero+1)
	dp1 := make([][][]int, zero+1)
	for i := 0; i <= zero; i++ {
		dp0[i] = make([][]int, one+1)
		dp1[i] = make([][]int, one+1)
		for j := 0; j <= one; j++ {
			dp0[i][j] = make([]int, limit+1)
			dp1[i][j] = make([]int, limit+1)
		}
	}

	tot0 := make([][]int, zero+1)
	tot1 := make([][]int, zero+1)
	for i := 0; i <= zero; i++ {
		tot0[i] = make([]int, one+1)
		tot1[i] = make([]int, one+1)
	}

	if zero >= 1 {
		dp0[1][0][1] = 1
	}
	if one >= 1 {
		dp1[0][1][1] = 1
	}

	for i := 0; i <= zero; i++ {
		for j := 0; j <= one; j++ {
			if i == 0 && j == 0 {
				continue
			}

			if i > 0 {
				maxK := limit
				if i < maxK {
					maxK = i
				}
				for k := 2; k <= maxK; k++ {
					v := dp0[i-1][j][k-1]
					if v != 0 {
						dp0[i][j][k] += v
						if dp0[i][j][k] >= MOD {
							dp0[i][j][k] -= MOD
						}
					}
				}
				v := tot1[i-1][j]
				if v != 0 {
					dp0[i][j][1] += v
					if dp0[i][j][1] >= MOD {
						dp0[i][j][1] -= MOD
					}
				}
			}

			if j > 0 {
				maxK := limit
				if j < maxK {
					maxK = j
				}
				for k := 2; k <= maxK; k++ {
					v := dp1[i][j-1][k-1]
					if v != 0 {
						dp1[i][j][k] += v
						if dp1[i][j][k] >= MOD {
							dp1[i][j][k] -= MOD
						}
					}
				}
				v := tot0[i][j-1]
				if v != 0 {
					dp1[i][j][1] += v
					if dp1[i][j][1] >= MOD {
						dp1[i][j][1] -= MOD
					}
				}
			}

			sum0, sum1 := 0, 0
			maxK0 := limit
			if i < maxK0 {
				maxK0 = i
			}
			for k := 1; k <= maxK0; k++ {
				sum0 += dp0[i][j][k]
				if sum0 >= MOD {
					sum0 -= MOD
				}
			}
			maxK1 := limit
			if j < maxK1 {
				maxK1 = j
			}
			for k := 1; k <= maxK1; k++ {
				sum1 += dp1[i][j][k]
				if sum1 >= MOD {
					sum1 -= MOD
				}
			}
			tot0[i][j] = sum0
			tot1[i][j] = sum1
		}
	}

	ans := 0
	maxK0 := limit
	if zero < maxK0 {
		maxK0 = zero
	}
	for k := 1; k <= maxK0; k++ {
		ans += dp0[zero][one][k]
		if ans >= MOD {
			ans -= MOD
		}
	}
	maxK1 := limit
	if one < maxK1 {
		maxK1 = one
	}
	for k := 1; k <= maxK1; k++ {
		ans += dp1[zero][one][k]
		if ans >= MOD {
			ans -= MOD
		}
	}
	return ans
}

func main() {
	fmt.Println(numberOfStableArrays(1, 1, 2)) // 2
	fmt.Println(numberOfStableArrays(1, 2, 1)) // 1
	fmt.Println(numberOfStableArrays(3, 3, 2)) // 14
}