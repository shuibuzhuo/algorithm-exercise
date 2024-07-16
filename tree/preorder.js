// 先序遍历
// - 访问根节点
// - 对根节点的左子树进行先序遍历
// - 对根节点的右子树进行现需遍历

const bt = require("./bt");

// function preorder (root) {
//   if (!root) return
//   console.log(root.val)
//   preorder(root.left)
//   preorder(root.right)
// }

function preorder(root) {
  if (!root) return 
  const stack = [root];
  while (stack.length) {
    const n = stack.pop();
    console.log(n.val);
    if (n.right) stack.push(n.right);
    if (n.left) stack.push(n.left);
  }
}

preorder(bt);
