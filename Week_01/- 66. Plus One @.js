/**
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

 

示例 1：

输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。
 */

var plusOne = function(digits) {
    let carry = 1
    for (let i = digits.length - 1; i >= 0; i--) {
        let value = digits[i] + 1
        digits[i] = value % 10 
        carry = Math.floor(value / 10)
    }

    if (carry === 1) {
        let result = [0]
        for (let i = 1; i < digits.length + 1; i++) {
            result[i] = digits[i - 1]
        }
    }

    return digits

};