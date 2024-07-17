const json = {
  a: {
    b: {
      c: 10
    }
  },
  d: [20, 30]
}

function dfs (n, path) {
  if (!n) return 

  console.log(n, path)

  Object.keys(n).forEach(k => {
    dfs(n[k], path.concat(k))
  })
}

dfs(json, [])
