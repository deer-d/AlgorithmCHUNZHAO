// 22. 括号生成
// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
// 示例 1：
//
// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]
// 示例 2：
//
// 输入：n = 1
// 输出：["()"]
//  
// 提示：
//
// 1 <= n <= 8

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = []
    generate(0, 0, n, '', res);
    return res;
};

function generate(left, right, n, s, res) {
    // 终止条件
    if (left === n && right === n) {
        res.push(s)
        return
    }

    // 当层逻辑  // 递归
    if (left < n) {
        generate(left+1, right, s+'(', res)
    }
    if (right < left) {
        generate(left, right+1, s+')', res)
    }

}
