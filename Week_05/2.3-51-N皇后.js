// 51. N 皇后 困难
// n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
//
// 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
//
// 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

// https://leetcode-cn.com/problems/n-queens/solution/51-n-queenshui-su-fa-jing-dian-wen-ti-xiang-jie-by/

const solveNQueens = (n) => {
    const board = new Array(n);
    for (let i = 0; i < n; i++) {
        board[i] = new Array(n).fill('.');
    }

    const cols = new Set();  // 列集，记录出现过皇后的列
    const diag1 = new Set(); // 正对角线集
    const diag2 = new Set(); // 反对角线集
    const res = [];

    // 回溯
    const helper = (row) => {
        if (row === n) { // 递归终止条件
            const stringsBoard = board.slice();
            for (let i = 0; i < n; i++) {
                stringsBoard[i] = stringsBoard[i].join('');
            }
            res.push(stringsBoard);
            return;
        }

        // 递归深度就是row控制棋盘的行，每一层里for循环的col控制棋盘的列，一行一列，确定了放置皇后的位置。
        // 每次都是要从新的一行的起始位置开始搜，所以都是从0开始。
        for (let col = 0; col < n; col++) {
            // 如果当前点的所在的列，所在的对角线都没有皇后，即可选择，否则，跳过
            if (!cols.has(col) && !diag1.has(row + col) && !diag2.has(row - col)) {
                board[row][col] = 'Q';  // 放置皇后
                cols.add(col);          // 记录放了皇后的列
                diag1.add(row + col);   // 记录放了皇后的正对角线
                diag2.add(row - col);   // 记录放了皇后的负对角线

                helper(row + 1);

                board[row][col] = '.';  // 撤销该点的皇后
                cols.delete(col);       // 对应的记录也删一下
                diag1.delete(row + col);
                diag2.delete(row - col);
            }
        }
    };

    // todo: entry
    helper(0);

    return res;
};
