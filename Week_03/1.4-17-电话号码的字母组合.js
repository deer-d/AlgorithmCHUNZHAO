// 题目大意 #
// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。给出数字到字母的映射如下（与电话按键相同）。
// 注意 1 不对应任何字母。
//
// 解题思路 #
// DFS 递归深搜即可

// 解法三 回溯（参考回溯模板，类似DFS）


var letterCombinations = function (digits) {
    var map = {
        "2" : ["a","b","c"],
        "3" : ["d", "e", "f"],
        "4" : ["g", "h", "i"],
        "5" : ["j", "k", "l"],
        "6" : ["m", "n", "o"],
        "7" : ["p", "q", "r", "s"],
        "8" : ["t", "u", "v"],
        "9" : ["w", "x", "y", "z"],
    }
    var result = []
    if (digits === "") {
        return result
    }

    letterFunc("", digits, 0, result, map)
    return result
}

function letterFunc(s, digits, level, result, map) {
    // terminator
    if (level === digits.length) {
        result.push(s)
        return
    }

    // process
    var letters = map[digits[level]]
    for (let j = 0; j < letters.length; j++) {
        // drill down
        letterFunc(s + letters[j], digits, level + 1, result, map)
    }
}

