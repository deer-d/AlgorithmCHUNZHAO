// 题目大意 #
//     假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
//     每次你可以爬 1 或 2 个台阶。
//     你有多少种不同的方法可以爬到楼顶呢？注意：给定 n 是一个正整数
//
// 解题思路 #
//     简单的 DP，经典的爬楼梯问题。一个楼梯可以由 n-1 和 n-2 的楼梯爬上来。
// 这一题求解的值就是斐波那契数列。

// 动态规划
function climbStaires(n) {
    if (n <= 2) {
        return n
    }
    let f1 = 1, f2 = 2, f3 = 3
    for (let i = 3; i < n + 1; i++) {
        f3 = f1 + f2
        f1 = f2
        f2 = f3
    }
    return f3
}

console.log(climbStaires(3))

