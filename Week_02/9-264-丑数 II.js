// 编写一个程序，找出第 n 个丑数。
//
// 丑数就是质因数只包含 2, 3, 5 的正整数。
// 示例:
//
// 输入: n = 10
// 输出: 12
// 解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
// 说明:  
//
// 1 是丑数。
// n 不超过1690。
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/ugly-number-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 2.优先队列 (小顶堆)
// 优先队列/小顶堆/大顶堆
// 利用优先队列有自动排序的功能
// 每次取出队头元素，存入队头元素*2、队头元素*3、队头元素*5
// 但注意，像 12 这个元素，可由 4 乘 3 得到，也可由 6 乘 2 得到，所以要注意去重

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {

};
class Solution {
    public:
        int nthUglyNumber(int n) {
            priority_queue <double,vector<double>,greater<double> > q;
            set<int> s;
            s.insert(1);
            vector<int> mask({2,3,5});
            double answer=1;
            for (int i=1;i<n;++i) {
                for (int &j:mask)
                if (s.count(answer*j)==0) {
                    q.push(answer*j);
                    s.insert(answer*j);
                }
                answer=q.top();
                q.pop();
            }
            return answer;
        }
};
