// 回溯法
// import java.util.ArrayList;
// import java.util.List;
//
// public class Solution {
//
//     public List<String> generateParenthesis(int n) {
//         List<String> res = new ArrayList<>();
//         if (n == 0) {
//             return res;
//         }
//
//         StringBuilder path = new StringBuilder();
//         dfs(path, n, n, res);
//         return res;
//     }
//
//
//     /**
//      * @param path  从根结点到任意结点的路径，全程只使用一份
//      * @param left  左括号还有几个可以使用
//      * @param right 右括号还有几个可以使用
//      * @param res
//      */
//     private void dfs(StringBuilder path, int left, int right, List<String> res) {
//         if (left == 0 && right == 0) {
//             // path.toString() 生成了一个新的字符串，相当于做了一次拷贝，这里的做法等同于「力扣」第 46 题、第 39 题
//             res.add(path.toString());
//             return;
//         }
//
//         // 剪枝（如图，左括号可以使用的个数严格大于右括号可以使用的个数，才剪枝，注意这个细节）
//         if (left > right) {
//             return;
//         }
//
//         if (left > 0) {
//             path.append("(");
//             dfs(path, left - 1, right, res);
//             path.deleteCharAt(path.length() - 1);
//         }
//
//         if (right > 0) {
//             path.append(")");
//             dfs(path, left, right - 1, res);
//             path.deleteCharAt(path.length() - 1);
//         }
//     }
// }


// 广度优先遍历
// import java.util.ArrayList;
// import java.util.List;
//
// public class Solution {
//
//     // 做加法
//     public List<String> generateParenthesis(int n) {
//         List<String> res = new ArrayList<>();
//         // 特判
//         if (n == 0) {
//             return res;
//         }
//
//         dfs("", 0, 0, n, res);
//         return res;
//     }
//
//     /**
//      * @param curStr 当前递归得到的结果
//      * @param left   左括号已经用了几个
//      * @param right  右括号已经用了几个
//      * @param n      左括号、右括号一共得用几个
//      * @param res    结果集
//      */
//     private void dfs(String curStr, int left, int right, int n, List<String> res) {
//         if (left == n && right == n) {
//             res.add(curStr);
//             return;
//         }
//
//         // 剪枝
//         if (left < right) {
//             return;
//         }
//
//         if (left < n) {
//             dfs(curStr + "(", left + 1, right, n, res);
//         }
//         if (right < n) {
//             dfs(curStr + ")", left, right + 1, n, res);
//         }
//     }
// }
//

// BFS 实现
var generateParenthesis = (n) => {
    var res = [];
    // 特判
    if (n === 0) return res;

    bfs("", n, res);
    return res;
}

var bfs = (str, n, res) => {

}
