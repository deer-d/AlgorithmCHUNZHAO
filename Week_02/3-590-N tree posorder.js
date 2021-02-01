// 590. N叉树的后序遍历
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    var result = [];
    traversal(root, result);
    return result;
}

function traversal (root, result) {
    if (root === null) return;
    for (let i = 0; i < root.children.length; i++) { // 子孩子
        traversal(root.children[i], result);
    }
    result.push(root.val) // 中
}
