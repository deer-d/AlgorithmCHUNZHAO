// Example:
//
//
//     Given array nums = [-1, 0, 1, 2, -1, -4],
//
//     A solution set is:
//     [
//         [-1, 0, 1],
//         [-1, -1, 2]
//     ]
//
// 题目大意 #
//     给定一个数组，要求在这个数组中找出 3 个数之和为 0 的所有组合。
//
// 解题思路 #
//     用 map 提前计算好任意 2 个数字之和，保存起来，可以将时间复杂度降到 O(n^2)。这一题比较麻烦的一点在于，最后输出解的时候，要求输出不重复的解。数组中同一个数字可能出现多次，同一个数字也可能使用多次，但是最后输出解的时候，不能重复。例如 [-1，-1，2] 和 [2, -1, -1]、[-1, 2, -1] 这 3 个解是重复的，即使 -1 可能出现 100 次，每次使用的 -1 的数组下标都是不同的。
//
// 这里就需要去重和排序了。map 记录每个数字出现的次数，然后对 map 的 key 数组进行排序，最后在这个排序以后的数组里面扫，找到另外 2 个数字能和自己组成 0 的组合。


// 需要考虑很多情况

// 双指针
function threeSum(nums) {
    nums.sort()
    let res = []
    for (let k = 0; k < nums.length - 2; k++) {
        if (nums[k] > 0) break; // 因为是有序数组

        if(nums[k] === nums[k-1]) continue; // 去重

        let i = k + 1
        let j  = nums.length - 1

        while (i < j) {
            let sum = nums[k] + nums[i] + nums[j];
            if (sum === 0) {
                res.push([nums[k],nums[i],nums[j]]);
                while (i < j && nums[i] === nums[i+1]) i++; // 去重
                while (i < j && nums[j] === nums[j-1]) j--; // 去重
                i++
                j--
            }
            else if (sum < 0) {
                while (i < j && nums[i] === nums[i+1]) i++; // 去重
            }
            else if (sum > 0) {
                while (i < j && nums[j] === nums[j-1]) j--; // 去重
            }
        }
    }
    return res
}

console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]))

