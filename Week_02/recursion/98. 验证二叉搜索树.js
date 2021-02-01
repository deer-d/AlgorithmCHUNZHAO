// 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
//
// 假设一个二叉搜索树具有如下特征：
//
// 节点的左子树只包含小于当前节点的数。
// 节点的右子树只包含大于当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。
// 示例 1:
//
// 输入:
//     2
//    / \
//   1   3
// 输出: true
// 示例 2:
//
// 输入:
//     5
//    / \
//   1   4
//      / \
//     3   6
// 输出: false
// 解释: 输入为: [5,1,4,null,null,3,6]。
//      根节点的值为 5 ，但是其右子节点值为 4 。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// BST 中序遍历是递增的， 在遍历中就比较
let pre = ''
function isValidBST(root) {
    if (root == null) {
        return true;
    }
    // 访问左子树
    if (!isValidBST(root.left)) {
        return false;
    }
    // 访问当前节点：如果当前节点小于等于中序遍历的前一个节点，说明不满足BST，返回 false；否则继续遍历。
    if (root.val <= pre) {
        return false;
    }
    pre = root.val;
    // 访问右子树
    return isValidBST(root.right);
}

思路：引入上下边界

对于树的每个节点 val ，设其上下边界 low , high。(用 long 防止 INT_MAX 溢出 )
判断根结点时，须满足 low < val < high ，否则返回 false
判断左节点时，仅 上界 变化 ( 新上界为 high 与 val 较小值。又因 val 必小于 high，故新上界为 val )
判断右节点时，仅 下界 变化 ( 同理，新下界为 val )

bool fun(struct TreeNode* root, long low, long high) {
    if (root == NULL) return true;
    long num = root->val;
    if (num <= low || num >= high) return false;
    return fun(root->left, low, num) && fun(root->right, num, high);
}
bool isValidBST(struct TreeNode* root){
    return fun(root, LONG_MIN, LONG_MAX);
}
