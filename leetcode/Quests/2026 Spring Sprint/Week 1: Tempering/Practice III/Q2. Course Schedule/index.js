const canFinish = function (numCourses, prerequisites) {
  const graph = new Map();
  for (const [course, prerequisite] of prerequisites) {
    if (!graph.has(course)) graph.set(course, []);
    graph.get(course).push(prerequisite);
  }

  const visiting = new Set();
  const done = new Set();

  const dfs = (c) => {
    if (visiting.has(c)) return false;
    if (done.has(c)) return true;

    visiting.add(c);
    for (const p of graph.get(c) || []) {
      if (!dfs(p)) return false;
    }
    visiting.delete(c);
    done.add(c);
    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!done.has(i) && !dfs(i)) return false;
  }

  return true;
};

console.log(canFinish(2, [[1, 0]]));
console.log(canFinish(2, [[1, 0], [0, 1]]));
