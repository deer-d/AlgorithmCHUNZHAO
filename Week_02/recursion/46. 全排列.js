// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
//
// 示例:
//
//     输入: [1,2,3]
// 输出:
//     [
//         [1,2,3],
//         [1,3,2],
//         [2,1,3],
//         [2,3,1],
//         [3,1,2],
//         [3,2,1]
//     ]

// https://leetcode-cn.com/problems/permutations/solution/pei-yang-chou-xiang-neng-li-de-yi-dao-ti-1731/
// https://leetcode-cn.com/problems/permutations/solution/quan-pai-lie-by-leetcode-solution-2/
function permute(nums) {
    let res = []
    let len = nums.length
    if (!len) return res

    let path = [] // 应该是一个栈
    for(let i = 0; i < len; i++) used[i] = false // 以空间换时间
    // 0代表当前层数
    dfs(nums, len, 0, path, used, res)
    return res
}

function dfs(nums, len, depth, path, used, res) {
    // 递归终止条件
    if(depth === len) {
        res.add([...path])
    }

    for(let i = 0; i < len; i++) {
        if(used[i]) continue
        path.push(nums[i])
        used[i] = true

        // 递归下一层
        dfs(nums, depth + 1, path, used, res)

        // 回到上一层，回溯
        path.pop();
        used[i] = false
    }

}

