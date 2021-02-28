// medium
// Example:
//
// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.
// 题目大意 #
// 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
// 说明：每次只能向下或者向右移动一步。
//
// 解题思路 #
// 在地图上求出从左上角到右下角的路径中，数字之和最小的一个，输出数字和。
// 这一题最简单的想法就是用一个二维数组来 DP，当然这是最原始的做法。
// 由于只能往下和往右走，只需要维护 2 列信息就可以了，从左边推到最右边即可得到最小的解。
// 更近一步，可以直接在原来的数组中做原地 DP，空间复杂度为 0 。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(dp) {
    var m = dp.length
    var n = dp[0].length
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) continue
            else if (i === 0) dp[i][j] = dp[i][j - 1] + dp[i][j]
            else if (j === 0) dp[i][j] = dp[i-1][j] + dp[i][j]
            else dp[i][j] = Math.min(dp[i-1][j] + dp[i][j-1]) + dp[i][j] // dp[i][j] 是自格子里的步数
        }
    }
    return dp[m-1][n-1]
};
