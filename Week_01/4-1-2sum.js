// Example:
//
//
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1]
//
// 题目大意 #
// 在数组中找到 2 个数之和等于给定值的数字，结果返回 2 个数字在数组中的下标。
// 此题 数组有序
//
// 解题思路 #
// 这道题最优的做法时间复杂度是 O(n)。
//
// 顺序扫描数组，对每一个元素，在 map 中找能组合给定值的另一半数字，如果找到了，直接返回 2 个数字的下标即可。如果找不到，就把这个数字存入 map 中，等待扫到“另一半”数字的时候，再取出来返回结果。

// 方法一 哈希表
function twoSum1(nums, target) {
    let map = { // 存储已经扫描过的值
        // val: index
    }
    for (let i= 0; i < nums.length; i++) {
        let other = target - nums[i];
        if (map[other] || map[other] === 0) {
            return [map[other], i]
        }
        map[nums[i]] = i
    }
    return []

}

// 方法二 对撞指针
function twoSum2(nums, target) {
    nums.sort();
    let l = 0
    let r = nums.length - 1
    while (l < r) {
        if (nums[l] + nums[r] === target) {
            console.log(nums[l], nums[r])
            return [l, r]
        } else if (nums[l] + nums[r] < target) {
            l++
        } else {
            r--
        }
    }
    return []
}
//  l
// [2, 7, 11, 15]
//             r
console.log(twoSum2([3,2,4], 6))


