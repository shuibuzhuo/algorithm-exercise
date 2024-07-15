// 广度优先遍历 Breadth-First Search

const tree = {
  val: "a",
  children: [
    {
      val: "b",
      children: [
        {
          val: "d",
          children: [],
        },
        {
          val: "e",
          children: [],
        },
      ],
    },
    {
      val: "c",
      children: [
        {
          val: "f",
          children: [],
        },
        {
          val: "g",
          children: [],
        },
      ],
    },
  ],
};

// - 新建一个队列，把根节点入队
// - 把队头出队，并访问
// - 把对头的 children 挨个入队
// - 重复第二、三步，直到队列为空
function bfs(root) {
  const queue = [root];

  while (queue.length > 0) {
    const n = queue.shift();
    console.log(n.val);
    n.children.forEach((child) => queue.push(child));
  }
}

bfs(tree)
