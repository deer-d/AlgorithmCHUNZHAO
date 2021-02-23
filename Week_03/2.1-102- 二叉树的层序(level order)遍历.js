// 102. 二叉树的层序遍历
// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
//
//
//
// 示例：
// 二叉树：[3,9,20,null,null,15,7],
//
//     3
//    / \
//   9  20
//     /  \
//    15   7

// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/bfs-de-shi-yong-chang-jing-zong-jie-ceng-xu-bian-l/
var levelOrder = function(root) {
    var result = []
    var queue = [root]
    while(queue.length > 0) {
        var level = []
        var n = queue.length
        for (let i = 0; i < n; i++) {
            var node = queue.shift()
            level.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        result.push(level)
    }
    return result

};

// todo: 随堂练习  试着用 bfs dfs 分别作出括号生成问题
