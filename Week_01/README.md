学习笔记

1.数组、链表、跳表的实现原理：
    1.1 原理和实现

    1.2 三者的时间复杂度、空间复杂度
        数组：
        prepend: O(1)
        append: O(1)
        lookup: O(1)
        insert: O(n)
        delete: O(n)

        链表：
        prepend: O(1)
        append: O(1)
        lookup: O(n)
        insert: O(1)
        delete: O(1)

        跳表：
        要是有序的
        对标平衡树，二分查找
        lookup: O(logn)
        insert: O(logn)
        delete: O(logn)

        空间复杂度O（n）


    1.3 工程运用

    1.4 跳表：升维思想，空间换时间
    

2.实战题目解析：移动零
    2.1 leetcode-283-move-zeroes


    