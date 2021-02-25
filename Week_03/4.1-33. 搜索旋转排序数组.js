// 二分查找
// 难度：中等

// 整数数组 nums 按升序排列，数组中的值 互不相同 。
//
// 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，
// 使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。
// 例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。
//
// 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的索引，否则返回 -1 。
//
//
// 示例 1：
//
// 输入：nums = [4,5,6,7,0,1,2], target = 0
// 输出：4
// 示例 2：
//
// 输入：nums = [4,5,6,7,0,1,2], target = 3
// 输出：-1
// 示例 3：
//
// 输入：nums = [1], target = 0
// 输出：-1

public int search(int[] nums, int target) {
    int len = nums.length;
    if (len === 0) {
        return -1;
    }

    int left = 0;
    int right = len - 1;
    while (left < right) {

        int mid = left + (right - left  + 1) / 2;
        //     t     m
        // [4, 5, 6, 7, 0, 1, 2]
        //         r

        if (nums[mid] < nums[right]) {

            // 使用上取整的中间数，必须在上面的 mid 表达式的括号里 + 1
            if (nums[mid] <= target && target <= nums[right]) {
                // 下一轮搜索区间是 [mid, right]
                left = mid;
            } else {
                // 只要上面对了，这个区间是上面区间的反面区间，下一轮搜索区间是 [left, mid - 1]
                right = mid - 1;
            }

        } else {

            // [left, mid] 有序，但是为了和上一个 if 有同样的收缩行为，
            // 我们故意只认为 [left, mid - 1] 有序
            // 当区间只有 2 个元素的时候 int mid = (left + right + 1) >>> 1; 一定会取到右边
            // 此时 mid - 1 不会越界，就是这么刚刚好

            if (nums[left] <= target && target <= nums[mid - 1]) {
                // 下一轮搜索区间是 [left, mid - 1]
                right = mid - 1;
            } else {
                // 下一轮搜索区间是 [mid, right]
                left = mid;
            }
        }
    }

    // 有可能区间内不存在目标元素，因此还需做一次判断
    if (nums[left] === target) {
        return left;
    }
    return -1;
}

