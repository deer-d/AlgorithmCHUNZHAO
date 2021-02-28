// medium
// 有 n 个城市，其中一些彼此相连，另一些没有相连。如果城市 a 与城市 b 直接相连，且城市 b 与城市 c 直接相连，那么城市 a 与城市 c 间接相连。
// 
// 省份 是一组直接或间接相连的城市，组内不含其他没有相连的城市。
// 
// 给你一个 n x n 的矩阵 isConnected ，其中 isConnected[i][j] = 1 表示第 i 个城市和第 j 个城市直接相连，而 isConnected[i][j] = 0 表示二者不直接相连。
// 
// 返回矩阵中 省份 的数量。
//
// 示例 1：
// 
// 
// 输入：isConnected = [[1,1,0],[1,1,0],[0,0,1]]
// 输出：2
// 示例 2：
// 
// 
// 输入：isConnected = [[1,0,0],[0,1,0],[0,0,1]]
// 输出：3
//
function Node(val) {
    this.val = val
    this.parent = this
}

function find(x) {
    if (x !== x.parent)
        return find(x.parent)
    return x.parent
}

/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function (M) {
    // 初始化元素
    const arr = []
    for (let i = 0; i < M.length; i++) {
        arr[i] = new Node(i)
    }

    for (let i = 0; i < M.length; i++) {
        for (let j = 0; j < M.length; j++) {
            if (M[i][j]) {
                xRoot = find(arr[i])
                yRoot = find(arr[j])
                xRoot.parent = yRoot
            }
        }
    }

    let res = 0
    const tmp = new Map() // 记录元
    for (let i = 0; i < arr.length; i++) {
        if (!tmp.has(find(arr[i]))) {
            tmp.set(find(arr[i]), true)
            res++
        }
    }
    return res
};

