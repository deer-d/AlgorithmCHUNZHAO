// 难度 ： 中等
// 假设按照升序排序的数组在预先未知的某个点上进行了旋转。例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] 。
//
// 请找出其中最小的元素。
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0
    let right = nums.length - 1
    let minIndex = Math.floor((left + right) / 2)
    let minVal = nums[minIndex]

    //      l
    //    m
    // [6,7,0,1,2,4,5]
    //        r

    while(left < right) {
        if (minVal > nums[right]) {
            left = mid + 1
        } else {
            right = mid;
        }
    }

    return nums[left];

};

