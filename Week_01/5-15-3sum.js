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
    let ans = new Array();
    let len = nums.length;
    if(nums === null || len < 3) return ans;

    nums.sort((a, b) => (a - b)) // 排序
    for (let i = 0; i < len ; i++) {
        if(nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
        if(i > 0 && nums[i] === nums[i-1]) continue; // 去重
        let L = i+1;
        let R = len-1;
        while(L < R){
            let sum = nums[i] + nums[L] + nums[R];
            if(sum === 0){
                ans.push([nums[i],nums[L],nums[R]]);
                while (L<R && nums[L] == nums[L+1]) L++; // 去重
                while (L<R && nums[R] == nums[R-1]) R--; // 去重
                L++;
                R--;
            }
            else if (sum < 0) L++;
            else if (sum > 0) R--;
        }
    }
    return ans;
}

console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]))

