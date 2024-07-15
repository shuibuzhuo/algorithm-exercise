// 后序遍历

// - 对根节点的左子树进行后序遍历
// - 对根节点的右子树进行后序遍历
// - 访问根节点

const bt = require('./bt')

function postorder (root) {
  if (!root) return 
  postorder(root.left)
  postorder(root.right)
  console.log(root.val)
}

postorder(bt)
