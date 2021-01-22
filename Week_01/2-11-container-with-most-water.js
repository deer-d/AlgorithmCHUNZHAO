// 题目大意 #
//     给出一个非负整数数组 a1，a2，a3，…… an，
//     每个整数标识一个竖立在坐标轴 x 位置的一堵高度为 ai 的墙，选择两堵墙，和 x 轴构成的容器可以容纳最多的水。

//Example 1:
// Input: [1,8,6,2,5,4,8,3,7]
// Output: 49

// 解题思路 #
//     这一题也是对撞指针的思路。首尾分别 2 个指针，每次移动以后都分别判断长宽的乘积是否最大。

// 时间复杂度 O(N)
// 最优解
// 双指针 往中间收
function findMostWater(height) {
    let max = 0
    let start = 0
    let end = height.length - 1

    while(start < end) {
        let w = end - start;
        let h;
        if (height[start] < height[end]) { // 注意此处， 盛水是以最小的高来盛的
            h = height[start]
            start++
        } else {
            h = height[end]
            end--
        }
        let tempMax = w * h
        if (tempMax > max) {
            max = tempMax
        }

    }

    return max
}

//   s
//  [1,8,6,2,5,4,8,3,7]
//                   e

let h =  [1,8,6,2,5,4,8,3,7]
console.log(findMostWater(h))

// 执行用时：
// 124 ms
// , 在所有 JavaScript 提交中击败了
// 32.41%
// 的用户
// 内存消耗：
// 40.2 MB
// , 在所有 JavaScript 提交中击败了
// 93.85%
// 的用户
