package main

import "fmt"

const MOD = 1_000_000_007

type Fancy struct {
	arr  []int64
	mult int64
	add  int64
}

func Constructor() Fancy {
	return Fancy{
		arr:  nil,
		mult: 1,
		add:  0,
	}
}

// modPow returns (a^b) % MOD
func modPow(a, b int64) int64 {
	a %= MOD
	res := int64(1)
	for b > 0 {
		if b&1 == 1 {
			res = (res * a) % MOD
		}
		a = (a * a) % MOD
		b >>= 1
	}
	return res
}

func modInverse(a int64) int64 {
	return modPow(a, MOD-2)
}

func (f *Fancy) Append(val int) {
	v := int64(val)
	x := (v - f.add + MOD) % MOD
	x = (x * modInverse(f.mult)) % MOD
	f.arr = append(f.arr, x)
}

func (f *Fancy) AddAll(inc int) {
	f.add = (f.add + int64(inc)) % MOD
}

func (f *Fancy) MultAll(m int) {
	m64 := int64(m)
	f.mult = (f.mult * m64) % MOD
	f.add = (f.add * m64) % MOD
}

func (f *Fancy) GetIndex(idx int) int {
	if idx < 0 || idx >= len(f.arr) {
		return -1
	}
	v := (f.arr[idx]*f.mult + f.add) % MOD
	if v < 0 {
		v += MOD
	}
	return int(v)
}

func main() {
	obj := Constructor()
	obj.Append(2)
	obj.AddAll(3)
	obj.Append(7)
	obj.MultAll(2)
	fmt.Println(obj.GetIndex(0)) // 10
	obj.AddAll(3)
	obj.Append(10)
	obj.MultAll(2)
	fmt.Println(obj.GetIndex(0), obj.GetIndex(1), obj.GetIndex(2)) // 26, 34, 20
}