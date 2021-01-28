// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
//
// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
//
// 此外，你可以假设该网格的四条边均被水包围。
//在 LeetCode 中，「岛屿问题」是一个系列系列问题，比如：
//
// L200. 岛屿数量 （Easy）
// 463. 岛屿的周长 （Easy）
// 695. 岛屿的最大面积 （Medium）
// 827. 最大人工岛 （Hard）
//
// https://leetcode-cn.com/problems/number-of-islands/solution/dao-yu-lei-wen-ti-de-tong-yong-jie-fa-dfs-bian-li-/

void dfs(int[][] grid, int r, int c) {
    // 判断 base case
    // 如果坐标 (r, c) 超出了网格范围，直接返回
    if (!inArea(grid, r, c)) {
        return;
    }
    // 访问上、下、左、右四个相邻结点
    dfs(grid, r - 1, c);
    dfs(grid, r + 1, c);
    dfs(grid, r, c - 1);
    dfs(grid, r, c + 1);
}

// 判断坐标 (r, c) 是否在网格中
boolean inArea(int[][] grid, int r, int c) {
    return 0 <= r && r < grid.length
        && 0 <= c && c < grid[0].length;
}

// 方法一 深度优先
class Solution {
    void dfs(char[][] grid, int r, int c) {
        int nr = grid.length;
        int nc = grid[0].length;

        if (r < 0 || c < 0 || r >= nr || c >= nc || grid[r][c] == '0') {
            return;
        }

        grid[r][c] = '0';
        dfs(grid, r - 1, c);
        dfs(grid, r + 1, c);
        dfs(grid, r, c - 1);
        dfs(grid, r, c + 1);
    }

    public int numIslands(char[][] grid) {
        if (grid == null || grid.length == 0) {
            return 0;
        }

        int nr = grid.length;
        int nc = grid[0].length;
        int num_islands = 0;
        for (int r = 0; r < nr; ++r) {
            for (int c = 0; c < nc; ++c) {
                if (grid[r][c] == '1') {
                    ++num_islands;
                    dfs(grid, r, c);
                }
            }
        }

        return num_islands;
    }
}

// 方法二 广度优先
class Solution {
    public int numIslands(char[][] grid) {
        if (grid == null || grid.length == 0) {
        return 0;
    }

    int nr = grid.length;
    int nc = grid[0].length;
    int num_islands = 0;

    for (int r = 0; r < nr; ++r) {
        for (int c = 0; c < nc; ++c) {
            if (grid[r][c] == '1') {
                ++num_islands;
                grid[r][c] = '0';
                Queue<Integer> neighbors = new LinkedList<>();
                neighbors.add(r * nc + c);
                while (!neighbors.isEmpty()) {
                    int id = neighbors.remove();
                    int row = id / nc;
                    int col = id % nc;
                    if (row - 1 >= 0 && grid[row-1][col] == '1') {
                        neighbors.add((row-1) * nc + col);
                        grid[row-1][col] = '0';
                    }
                    if (row + 1 < nr && grid[row+1][col] == '1') {
                        neighbors.add((row+1) * nc + col);
                        grid[row+1][col] = '0';
                    }
                    if (col - 1 >= 0 && grid[row][col-1] == '1') {
                        neighbors.add(row * nc + col-1);
                        grid[row][col-1] = '0';
                    }
                    if (col + 1 < nc && grid[row][col+1] == '1') {
                        neighbors.add(row * nc + col+1);
                        grid[row][col+1] = '0';
                    }
                }
            }
        }
    }

        return num_islands;
    }
}


