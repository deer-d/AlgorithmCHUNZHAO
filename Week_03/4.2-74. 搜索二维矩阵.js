// 难度 中等

// 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
//
// 每行中的整数从左到右按升序排列。
// 每行的第一个整数大于前一行的最后一个整数。

// 示例 1：
// 输入：matrix = [ n     9 / n = row  9 % n = col
//   m  [1, 3, 5, 7 ],
    //  [10,11,16,20],
    //  [23,30,34,60]
//  ]
//  target = 3
// 输出：true

public boolean searchMatrix(int[][] matrix, int target) {
    int m = matrix.length;
    if (m === 0) return false;
    int n = matrix[0].length;

    // 二分查找
    int left = 0, right = m * n - 1;
    int pivotIdx, pivotElement;
    while (left <= right) {
        pivotIdx = (left + right) / 2;
        pivotElement = matrix[pivotIdx / n][pivotIdx % n]; // todo: 此处是重点
        if (target === pivotElement) return true;
        else {
            if (target < pivotElement) right = pivotIdx - 1;
            else left = pivotIdx + 1;
        }
    }
    return false;
}
