// easy
// 题目大意 #
//     斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。
//     该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
//
// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
// 给定 N，计算 F(N)。
//
// 提示：0 ≤ N ≤ 30
//
// 解题思路 #
//     求斐波那契数列
// 这一题解法很多，大的分类是四种，递归，记忆化搜索(dp)，矩阵快速幂，通项公式。
// 其中记忆化搜索可以写 3 种方法，自底向上的，自顶向下的，优化空间复杂度版的。
// 通项公式方法实质是求 a^b 这个还可以用快速幂优化时间复杂度到 O(log n) 。



/**
 * @param {number} n
 * @return {number}
 */

// 解法一 递归
var fib = function(n, memo) {
    var f;
    if (n <= 2) {
        f = 1
    } else {
        if (!memo[n]) {
            memo[n] = fib(n - 1) + fib(n - 2)
        }
        f = memo[n]
    }
    return f
};

// https://leetcode-cn.com/problems/fibonacci-number/solution/dong-tai-gui-hua-tao-lu-xiang-jie-by-labuladong/
// 解法一 动态规划
var fib = function (n) {
    // var dp = []
    // var dp[1] = 1
    // var dp[2] = 1
    //
    // for (let i = 3; i <= n; i++) {
    //     dp[i] = dp[i - 1] + dp[i - 2]
    // }
    // return dp[n]

    // 所谓的状态转移
    if (n === 2 || n === 1) {
        return 1
    }

    let pre = 1, cur = 1
    for (let i = 3; i <= n; i++) {
        let sum = pre + cur;
        pre = cur;
        cur = sum;
    }
    return cur;
}