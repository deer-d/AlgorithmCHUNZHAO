// 429. N 叉树的层序遍历

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
// 队列
var levelOrder = function(root) {
    var values = []
    if (root === null) return values;

    var queque = []
    queque.push(root);

    while (queque.length) {
        var level = []
        var size = queque.length
        for (let i = 0; i < size; i++) {
            var nextNode = queque.shift();
            level.push(nextNode.val)

            for (let child of nextNode.children) {
                queque.push(child);
            }
        }
        values.push(level);
    }

    return  values
};

// 递归
var levelOrder = function(root) {
    var nums = [];
    search(nums,root,0);
    return nums;
};

function search(nums,node,k){
    if(node == null){
        return;
    }
    if(nums[k]==undefined){
        nums[k] = [];
    }
    nums[k].push(node.val);
    for(var i = 0;i < node.children.length;i++){
        search(nums,node.children[i],k + 1);
    }
}





