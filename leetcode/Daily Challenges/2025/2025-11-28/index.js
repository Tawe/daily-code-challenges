var maxKDivisibleComponents = function(n, edges, values, k) {
  const graph = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  let components = 0;

  function dfs(node, parent) {
    let sumMod = values[node] % k;

    for (const nei of graph[node]) {
      if (nei === parent) continue; 
      sumMod = (sumMod + dfs(nei, node)) % k;
    }

    if (sumMod === 0) {
      components++;
      return 0; 
    }

    return sumMod;
  }

  dfs(0, -1);
  return components;
};


const x = maxKDivisibleComponents(7, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]], [3,0,6,1,5,2,1], 3)
x;