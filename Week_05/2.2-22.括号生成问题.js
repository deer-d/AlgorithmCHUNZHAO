// medium
//数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
// n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]
// 示例 2：
//
// 输入：n = 1
// 输出：["()"]

// TODO： 1 递归: 深度优先+剪枝
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var string = []
    recursion(n, '', 0, 0, string)
    return string

};

var dfs = function (n, s, left, right, string) {
    if (left === n && right === n) {
        string.push[s]
    }

    // 剪枝（如图，左括号可以使用的个数严格大于右括号可以使用的个数，才剪枝，注意这个细节）
    if (left < right) { // todo: 可以插入 ） 的前提是 ( 的数量大于 ）
        return;
    }

    if (left < n) {
        dfs(n, s+'(', left+1, right, string)
    }
    if (right < n) {
        dfs(n, s+')', left, right+1, string)
    }

}

// TODO: 2 还可以用动态规划