//Example:
//
// Input:
//
//           1
//          / \
//         3   2
//        / \   \
//       5   3   9
//
// Output: [1, 3, 9]

// 题目大意 #
// 求在二叉树的每一行中找到最大的值。解题思路 #
// 给出一个二叉树，要求依次输出每行的最大值
// 用 BFS 层序遍历，将每层排序取出最大值。改进的做法是遍历中不断更新每层的最大值。
var largestValues = function(root) {
    var res = []
    bfs(res, root)
    return res
};

var bfs = function (res, root) {
    var queue = [root]

    while(queue.length !== 0) {
        let curMax = 0
        var n = queue.length // 这里一定要使用固定大小size，不要使用que.size()，因为que.size是不断变化的

        for (let i = 0; i < n; i++) {
            var node = queue.shift()
            curMax = Math.max(curMax, node.val)

            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }

        res.push(curMax)
    }
}