package main

import "fmt"

func maxStability(n int, edges [][]int, k int) int {
	const MOD = 1000000007

	type Edge struct {
		u, v int
		s    int
		must int
	}

	all := make([]Edge, len(edges))
	var mustEdges, optEdges []Edge
	maxS := 0
	for i, e := range edges {
		edge := Edge{u: e[0], v: e[1], s: e[2], must: e[3]}
		all[i] = edge
		if edge.must == 1 {
			mustEdges = append(mustEdges, edge)
		} else {
			optEdges = append(optEdges, edge)
		}
		if edge.s > maxS {
			maxS = edge.s
		}
	}

	// DSU implementation
	type DSU struct {
		parent []int
		rank   []int
	}
	newDSU := func(n int) *DSU {
		p := make([]int, n)
		r := make([]int, n)
		for i := 0; i < n; i++ {
			p[i] = i
		}
		return &DSU{parent: p, rank: r}
	}
	var find func(d *DSU, x int) int
	find = func(d *DSU, x int) int {
		if d.parent[x] != x {
			d.parent[x] = find(d, d.parent[x])
		}
		return d.parent[x]
	}
	union := func(d *DSU, a, b int) bool {
		pa := find(d, a)
		pb := find(d, b)
		if pa == pb {
			return false
		}
		if d.rank[pa] < d.rank[pb] {
			pa, pb = pb, pa
		}
		d.parent[pb] = pa
		if d.rank[pa] == d.rank[pb] {
			d.rank[pa]++
		}
		return true
	}

	// Precheck: mandatory edges must not form a cycle
	dsuMust := newDSU(n)
	for _, e := range mustEdges {
		if !union(dsuMust, e.u, e.v) {
			// cycle formed by mandatory edges -> impossible
			return -1
		}
	}

	// Helper to check if we can achieve stability >= x
	check := func(x int) bool {
		dsu := newDSU(n)
		components := n

		// Add mandatory edges: they must all have strength >= x
		for _, e := range mustEdges {
			if e.s < x {
				return false
			}
			if union(dsu, e.u, e.v) {
				components--
			}
		}

		// First, use optional edges that already meet threshold without upgrade
		for _, e := range optEdges {
			if e.s >= x {
				if union(dsu, e.u, e.v) {
					components--
				}
			}
		}

		// Then, use optional edges that can reach threshold only via upgrade
		upgradesUsed := 0
		for _, e := range optEdges {
			if e.s < x && 2*e.s >= x {
				if union(dsu, e.u, e.v) {
					upgradesUsed++
					components--
					if upgradesUsed > k {
						return false
					}
				}
			}
		}

		return components == 1 && upgradesUsed <= k
	}

	// Binary search for maximum stability
	lo, hi := 0, maxS*2
	if !check(0) {
		return -1
	}
	for lo < hi {
		mid := (lo + hi + 1) / 2
		if check(mid) {
			lo = mid
		} else {
			hi = mid - 1
		}
	}

	return lo % MOD
}

func main() {
	fmt.Println(maxStability(3, [][]int{{0, 1, 2, 1}, {1, 2, 3, 0}}, 1))              // 2
	fmt.Println(maxStability(3, [][]int{{0, 1, 4, 0}, {1, 2, 3, 0}, {0, 2, 1, 0}}, 2)) // 6
	fmt.Println(maxStability(3, [][]int{{0, 1, 1, 1}, {1, 2, 1, 1}, {2, 0, 1, 1}}, 0)) // -1
}	