// 给你一个'1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
//
// 岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。
//
// 此外，你可以假设该网格的四条边均被水包围。
//
// 示例 1：
//
// 输入：grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// 输出：1

// 示例 2：
//
// 输入：grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// 输出：3

// https://leetcode-cn.com/problems/number-of-islands/solution/dao-yu-lei-wen-ti-de-tong-yong-jie-fa-dfs-bian-li-/

var numIslands = function (grid) {
    var count = 0
    var n = grid.length
    var m = grid[0].length

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if (grid[i][j] === '1') {
                DFSMarking(grid, i, j, n, m)
                count++
            }
        }
    }

    return count
}

var DFSMarking = function (grid, i, j, n, m) {
    if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] !== '1')  return

    grid[i][j] = '0'
    DFSMarking(grid, i + 1, j, m, n)
    DFSMarking(grid, i - 1, j, m, n)
    DFSMarking(grid, i, j + 1, m, n)
    DFSMarking(grid, i, j - 1, m, n)
}

// DFS 的基本结构
// 网格结构要比二叉树结构稍微复杂一些，它其实是一种简化版的图结构。
// 要写好网格上的 DFS 遍历，我们首先要理解二叉树上的 DFS 遍历方法，再类比写出网格结构上的 DFS 遍历。
// 我们写的二叉树 DFS 遍历一般是这样的：
//
// void traverse(TreeNode root) {
//     // 判断 base case
//     if (root == null) {
//         return;
//     }
//     // 访问两个相邻结点：左子结点、右子结点
//     traverse(root.left);
//     traverse(root.right);
// }