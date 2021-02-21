var numDecodings = function(s) {
    /**
     * CC : Core Code
     * cur += valid lastOne (0 ~ 10) + valid lastTwo (10 ~ 26)
     */

    // 异常处理
    if(s[0] === '0') return 0

    // 边界处理：多填充一位辅助位（前两位为1）因为后续需要用到
    const len = s.length, dp = [1, 1, ...new Array(len - 1).fill(0)]

    // DP 方程 CC的具体实现
    for (let i = 2; i <= len; i++) {
        let lastOne = s.slice(i - 1, i), lastTwo = s.slice(i - 2, i)

        if(lastOne > 0 && lastOne < 10) dp[i] += dp[i - 1]

        if(lastTwo >= 10 && lastTwo <= 26) dp[i] += dp[i - 2]
    }

    return dp[len]
};