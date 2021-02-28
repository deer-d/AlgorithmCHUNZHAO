// medium
// 题目大意 #
// 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
//
// 解题思路 #
// 求出从三角形顶端到底端的最小和。要求最好用 O(n) 的时间复杂度。
// 这一题最优解是不用辅助空间，直接从下层往上层推。普通解法是用二维数组 DP，稍微优化的解法是一维数组 DP。
// 输入：triangle =
// [
//     [2],
//     [3,4],
//     [6,5,7],
//     [4,1,8,3]
// ]
// 输出：11
// 解释：如下面简图所示：
//     2
//     3 4
//     6 5 7
//     4 1 8 3
// 自顶向下的最小路径和为11（即，2+3+5+1= 11）。
/**
 * @param {number[][]} triangle
 * @return {number}
 */

// 自上而下
// https://leetcode-cn.com/problems/triangle/solution/san-chong-jie-fa-duo-tu-xiang-jie-120-san-jiao-xin/
var minimumTotal = function(triangle) {
    if(triangle === null || triangle.length === 0) {
        return 0;
    }

    let n = triangle.length;
    let m = triangle[n-1].length;
    //创建n*m的二维数组
    var dp = new Array(n).fill(0).map(() => new Array(m).fill(0));
    //初始化dp[0][0]
    dp[0][0] = triangle[0][0];

    //第一列需要单独计算
    for (let i = 1;i < n; ++i) {
        dp[i][0] = dp[i-1][0] + triangle[i][0]
    }
    for (let i = 1;i < n; ++i) {
        let j = 1;
        //注意计算的是三角形每一行的长度都不同
        //最后一列需要单独计算(斜边)，所以是从遍历的个数是size()-1
        while(j < triangle[i].length - 1) {
            //状态转移公式
            dp[i][j] = Math.min(dp[i-1][j-1],dp[i-1][j]) + triangle[i][j];
            ++j;
        }
        //三角形斜边需要单独计算
        dp[i][j] = dp[i-1][j-1] + triangle[i][j];
    }

    //最后一行保存了每条路径的计算结果，对最后一行数组求min即为最终结果
    let res = 0
    for (let i = 0; i < dp[n-1].length; i++) {
        res = Math.min(res, dp[n-1][i])
    }
    return res
};

// 自低向上
public int minimumTotal(List<List<Integer>> triangle) {
    // 特判
    if (triangle == null || triangle.size() == 0) {
        return 0;
    }
    // 加1可以不用初始化最后一行
    // 根据题意，行列值相同
    int[][] dp = new int[triangle.size() + 1][triangle.size() + 1];

    for (int i = triangle.size() - 1; i >= 0; i--) {
        List<Integer> rows = triangle.get(i);
        for (int j = 0; j < rows.size(); j++) {
            dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + rows.get(j);
        }
    }
    return dp[0][0];
}

