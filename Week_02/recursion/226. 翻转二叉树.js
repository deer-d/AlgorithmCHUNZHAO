// 翻转一棵二叉树。
//
// 示例：
//
// 输入：
//
//        4
//      /   \
//     2     7
//    / \   / \
//   1   3 6   9
// 输出：
//
//        4
//      /   \
//     7     2
//    / \   / \
//   9   6 3   1

public TreeNode invertTree(TreeNode root) {
    //递归函数的终止条件，节点为空时返回
    if(root==null) {
        return null;
    }
    //下面三句是将当前节点的左右子树交换
    TreeNode tmp = root.right;
    root.right = root.left;
    root.left = tmp;
    //递归交换当前节点的 左子树
    invertTree(root.left);
    //递归交换当前节点的 右子树
    invertTree(root.right);
    //函数返回时就表示当前这个节点，以及它的左右子树
    //都已经交换完了
    return root;
}

function invertTree(root) {
    function recursion(root) {
        if (root === null) {
            return
        }

        var temp = root.left
        root.left = root.right
        root.right = temp
        recursion(root.left)
        recursion(root.right)
    }
    recursion(root)
    return root
}
// https://leetcode-cn.com/problems/invert-binary-tree/solution/qian-zhong-hou-xu-bian-li-ceng-xu-bian-li-by-liwei/
