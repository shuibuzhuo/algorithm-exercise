// 先序遍历
// - 访问根节点
// - 对根节点的左子树进行先序遍历
// - 对根节点的右子树进行现需遍历

const bt = require('./bt')

function preorder (root) {
  if (!root) return 
  console.log(root.val)
  preorder(root.left)
  preorder(root.right) 
}

preorder(bt)

