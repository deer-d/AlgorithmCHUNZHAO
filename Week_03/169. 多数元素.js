// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
//
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
//
// 示例 1：
//
// 输入：[3,2,3]
// 输出：3
// 示例 2：
//
// 输入：[2,2,1,1,1,2,2]
// 输出：2

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    // 创建一个map
    let map = new Map();
    // 循环数组
    for (let i = 0; i < nums.length; i++) {
        // 如果map中不存在这个元素
        if (!map.has(nums[i])) {
            // 给当前这个元素设置为 1
            map.set(nums[i], 1);
        } else {
            // 如果存在了map中，在当前的数量上加1。
            map.set(nums[i], map.get(nums[i]) + 1)
        }
    }

    // 再遍历一遍map
    for (let [key, value] of map.entries()) {
        // 根据题目条件
        if (value > nums.length / 2) {
            // 返回键名
            return key
        }
    }
};

