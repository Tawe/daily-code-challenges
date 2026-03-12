# 2026-03-12

## Instructions
Maximize Spanning Tree Stability with Upgrades
You are given an integer `n`, representing `n` nodes numbered from 0 to `n - 1` and a list of `edges`, where `edges[i] = [ui, vi, si, musti]`:

- `ui` and `vi` indicates an undirected edge between nodes `ui` and `vi`.
- `si` is the strength of the edge.
- `musti` is an integer (0 or 1). If `musti == 1`, the edge **must** be included in the **spanning tree**. These edges **cannot** be **upgraded**.

You are also given an integer `k`, the **maximum** number of upgrades you can perform. Each upgrade **doubles** the strength of an edge, and each eligible edge (with `musti == 0`) can be upgraded **at most** once.

The **stability** of a spanning tree is defined as the **minimum** strength score among all edges included in it.

Return the **maximum** possible stability of any valid spanning tree. If it is impossible to connect all nodes, return `-1`.

**Note**: A **spanning tree** of a graph with `n` nodes is a subset of the edges that connects all nodes together (i.e. the graph is **connected**) _without_ forming any cycles, and uses **exactly** `n - 1` edges.

**Example 1:**

**Input:** n = 3, edges = [[0,1,2,1],[1,2,3,0]], k = 1

**Output:** 2

**Explanation:**

- Edge `[0,1]` with strength = 2 must be included in the spanning tree.
- Edge `[1,2]` is optional and can be upgraded from 3 to 6 using one upgrade.
- The resulting spanning tree includes these two edges with strengths 2 and 6.
- The minimum strength in the spanning tree is 2, which is the maximum possible stability.

**Example 2:**

**Input:** n = 3, edges = [[0,1,4,0],[1,2,3,0],[0,2,1,0]], k = 2

**Output:** 6

**Explanation:**

- Since all edges are optional and up to `k = 2` upgrades are allowed.
- Upgrade edges `[0,1]` from 4 to 8 and `[1,2]` from 3 to 6.
- The resulting spanning tree includes these two edges with strengths 8 and 6.
- The minimum strength in the tree is 6, which is the maximum possible stability.

**Example 3:**

**Input:** n = 3, edges = [[0,1,1,1],[1,2,1,1],[2,0,1,1]], k = 0

**Output:** -1

**Explanation:**

- All edges are mandatory and form a cycle, which violates the spanning tree property of acyclicity. Thus, the answer is -1.

**Constraints:**

- `2 <= n <= 105`
- `1 <= edges.length <= 105`
- `edges[i] = [ui, vi, si, musti]`
- `0 <= ui, vi < n`
- `ui != vi`
- `1 <= si <= 105`
- `musti` is either `0` or `1`.
- `0 <= k <= n`
- There are no duplicate edges.

## My Thoughts

This is a maximize-the-minimum problem, which is a good fit for binary search on the answer.

Let `x` be a candidate stability.  
We check whether it is possible to build a valid spanning tree where every chosen edge has effective strength at least `x` (after optional upgrades).

Feasibility check (`check(x)`):

- use DSU (Union-Find) to enforce spanning-tree connectivity/cycle behavior
- mandatory edges must be included, so if any mandatory edge has `s < x`, fail immediately
- first union all optional edges that already satisfy `s >= x` (no upgrade cost)
- then try optional edges with `s < x` but `2*s >= x` (these need one upgrade)
- count upgrades used and ensure it never exceeds `k`
- valid if we finish with one connected component

Also, mandatory edges are prechecked once: if they already form a cycle, answer is `-1`.

Because feasibility is monotonic (if `x` works, smaller values also work), binary search over `x` gives the maximum possible stability.

Time complexity: `O((n + m) * log S)` where `m = edges.length`, `S = max strength`  
Space complexity: `O(n + m)`

## What I Learned

- “Maximize minimum edge value” naturally maps to binary search + feasibility checking.
- DSU is a clean way to test whether a chosen edge set can connect all nodes without creating cycles in required parts.
- Splitting optional edges into “already good” and “upgrade-needed” helps control upgrade usage correctly.
- Mandatory-edge cycle checks should be done early to fail fast on impossible cases.
