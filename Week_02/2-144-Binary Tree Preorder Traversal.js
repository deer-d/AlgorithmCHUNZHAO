// 二叉树前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let res = []
    inorder(root, res)
    return res

};

function inorder(node, res) {
    if (!node) {
        return
    }
    res.push(node.val)
    inorder(node.left, res)
    inorder(node.right, res)
}
// 复杂度分析

// 时间复杂度：O(n)O(n)，其中 nn 是二叉树的节点数。每一个节点恰好被遍历一次。

// 空间复杂度：O(n)O(n)，为递归过程中栈的开销，平均情况下为 O(\log n)O(logn)，最坏情况下树呈现链状，为 O(n)O(n)。
