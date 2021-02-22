学习笔记

## 分治、回溯

###【1.分支、回溯的实现和特性】

分治回溯实际是 递归的一种方式

子问题，重复性和迭代

* 1.分治

分治代码模板
https://shimo.im/docs/zvlDqLLMFvcAF79A/read
```
private static int divide_conquer(Problem problem, ) {    
    // recursion terminator
    if (problem == NULL) {    
        int res = process_last_result();    
        return res;       
    }  

     // process current problem
     subProblems = split_problem(problem)   

     // 下探
     res0 = divide_conquer(subProblems[0])  
     res1 = divide_conquer(subProblems[1])    
     res2 = divide_conquer(subProblems[2])    
     ...

    // merge
    result = process_result(res0, res1);    

    return result;
}
```

* 2.回溯

括号生成问题 https://leetcode-cn.com/problems/generate-parentheses/

###### DFS 和回溯算法区别:
DFS 是一个劲的往某一个方向搜索，
而回溯算法建立在 DFS 基础之上的，但不同的是在搜索过程中，达到结束条件后，恢复状态，回溯上一层，再次搜索。
因此回溯算法与 DFS 的区别就是有无状态重置

