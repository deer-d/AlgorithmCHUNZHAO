//题目大意 #
// 实现 pow(x, n) ，即计算 x 的 n 次幂函数。
//
// 解题思路 #
// 要求计算 Pow(x, n)
// 这一题用递归的方式，不断的将 n 2 分下去。注意 n 的正负数，n 的奇偶性。

// 1 暴力法
result = 1
for (let i = 0; i < n; i++) {
    result *= x
}
O(N)

// 2 分治
class Solution {
    public double quickMul(double x, long N) {
            if (N == 0) {
            return 1.0;
        }
        double y = quickMul(x, N / 2);
        return N % 2 == 0 ? y * y : y * y * x;
    }

    public double myPow(double x, int n) {
        long N = n;
        return N >= 0 ? quickMul(x, N) : 1.0 / quickMul(x, -N);
    }
}

