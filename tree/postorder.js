// 后序遍历

// - 对根节点的左子树进行后序遍历
// - 对根节点的右子树进行后序遍历
// - 访问根节点

const bt = require("./bt");

// function postorder (root) {
//   if (!root) return
//   postorder(root.left)
//   postorder(root.right)
//   console.log(root.val)
// }

function postorder(root) {
  if (!root) return;

  const stack = [root];
  const outputStack = [];

  while (stack.length) {
    const n = stack.pop();
    outputStack.push(n);

    if (n.left) stack.push(n.left);
    if (n.right) stack.push(n.right);
  }

  while (outputStack.length) {
    const n = outputStack.pop();
    console.log(n.val);
  }
}

postorder(bt);
