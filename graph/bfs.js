const graph = require("./graph");

const visited = new Set();

function bfs(n) {
  const q = [n];
  visited.add(n);
  while (q.length) {
    const val = q.shift();
    console.log(val);
    graph[val].forEach((c) => {
      if (!visited.has(c)) {
        q.push(c);
        visited.add(c);
      }
    });
  }
}


bfs(2);
