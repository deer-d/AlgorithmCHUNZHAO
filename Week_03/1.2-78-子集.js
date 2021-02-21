// Example:
//
// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]
// 题目大意 #
// 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。说明：解集不能包含重复的子集。
//
// 解题思路 #
// 找出一个集合中的所有子集，空集也算是子集。且数组中的数字不会出现重复。用 DFS 暴力枚举即可。
// 这一题和第 90 题，第 491 题类似，可以一起解答和复习。

// 递归 回溯
public class Solution {

    public List<List<Integer>> subsets(int[] nums) {
    List<List<Integer>> res = new ArrayList<>();
    int len = nums.length;
    if (len == 0) {
    return res;
}
Stack<Integer> stack = new Stack<>();
dfs(nums, 0, len, stack, res);
return res;
}

private void dfs(int[] nums, int index, int len, Stack<Integer> stack, List<List<Integer>> res) {
    if (index == len) {
        res.add(new ArrayList<>(stack));
        return;
    }
    // 当前数可选，也可以不选

    // 不选，直接进入下一层
    dfs(nums, index + 1, len, stack, res);

    // 选了有，进入下一层
    stack.add(nums[index]);
    dfs(nums, index + 1, len, stack, res);
    stack.pop();
}

    public static void main(String[] args) {
        int[] nums = {1, 2, 3};
        Solution solution = new Solution();
        List<List<Integer>> subsets = solution.subsets(nums);
        System.out.println(subsets);
    }
}

const subsets = (nums) => {
    const res = [];

    const dfs = (index, list) => {
        if (index == nums.length) { // 指针越界
            res.push(list.slice());   // 加入解集
            return;                   // 结束当前的递归
        }

        list.push(nums[index]); // 选择这个数
        dfs(index + 1, list);   // 基于该选择，继续往下递归，考察下一个数
        list.pop();             // 上面的递归结束，撤销该选择

        dfs(index + 1, list);   // 不选这个数，继续往下递归，考察下一个数
    };

    dfs(0, []);
    return res;
};
