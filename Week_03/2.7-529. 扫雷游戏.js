// 中等 得做
var updateBoard = function (board, click) {
    var direct = [[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1]] // 八个方向

    // 看看周围几个雷
    var search_around = function (x, y, m, n) {
        var count = 0
        for (let [i, j] in direct) {
            if (0 <= x+i && x+i <= n-1 && 0<=y+j && y+j<= m-1) { // 不越界
                if (board[x][y] === 'M') {
                    count++
                }
            }
        }
        return count
    }

    // 深度优先搜索
    var dfs = function (x, y, m, n) {
        if (x<0 || x>n-1 || y<0 || y>m-1) return // 判断边界
        if (board[x][y]!=='E') return // 判断是不是E

        var count = search_around(x, y) // 算雷
        if (count !== 0) {
            // 有雷截断， 不找了
            board[x][y] = count + ''
            return
        } else {
            board[x][y] = 'B'
            for (let [i, j] in direct) {
                dfs(x+i,y+j)
            }
        }
    }


    var m = board.length
    var n = board[0].length

    if (board[click[0]][click[1]]=='M') { // 有可能一开始就踩雷
        board[click[0]][click[1]]='X'
        return board
    } else {
        dfs(click[0],click[1])
        return board
    }
}
