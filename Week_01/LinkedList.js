function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * 206. 反转链表
 */
var reverseList = function(head) {
    let pre = null
    let cur = head
    while(cur) {
        let tmp = cur.next // 1. 临时存储当前指针后续内容
        cur.next = pre // 2. 反转链表
        pre = cur // 3. 接收反转结果
        cur = tmp // 4. 接回临时存储的后续内容
    }
    return pre
};

/**
 * 24. 两两交换链表中的节点
 */
// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
var swapPairs = function(head) {
    let nodo0 = new ListNode(0); // 设置虚拟节点 nodo0
    let nodo1 = head;
    nodo0.next = nodo1;
    let prev = nodo0;

    while (nodo1 && nodo1.next) {
        const node2 = nodo1.next; // nodo1.next，nodo1.next待会要改变
        nodo1.next = node2.next; // node1 指向 node3
        node2.next = nodo1; // node2 指向 node1
        prev.next = node2;  // node0 指向 node2

        prev = nodo1;      // 指针更新
        nodo1 = nodo1.next; // 指针更新
    }
    return nodo0.next;
};

// 递归实现
// 不理解
var swapPairs = function(head) {
    if(head == null || head.next == null){
        return head;
    }
    // 获得第 2 个节点
    let next = head.next;
    // next.next = head.next.next
    // 第1个节点指向第 3 个节点，并从第3个节点开始递归
    head.next = swapPairs(next.next);
    // 第2个节点指向第 1 个节点
    next.next = head;
    // 或者 [head.next,next.next] = [swapPairs(next.next),head]
    return next;
};


/**
 * 141. 环形链表
 * */
//给定一个链表，判断链表中是否有环。
//
// 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。
// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
// 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
//
// 如果链表中存在环，则返回 true 。 否则，返回 false 。
//
// 进阶：
//
// 你能用 O(1)（即，常量）内存解决此问题吗？

// 方法一
var hasCycle = function(head) {
    let map = new Map();
    while (head) {
        if (map.has(head)) return true;
        map.set(head, true); // 存的是节点的地址引用，而不是节点值
        head = head.next;
    }
    return false;
};
// 方法二 快慢指针法
var hasCycle = function(head) {
    let fast = head;
    let slow = head;
    while (fast) {
        if (fast.next === null) return false;
        slow = slow.next; // 慢指针，每次走一步
        fast = fast.next.next; // 快指针，每次走两步
        if (slow === fast) return true;
    }
    return false;
};

/**
 * 142. 环形链表 II
 * */
// 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
// Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
// 如果 pos 是 -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。
//
// 说明：不允许修改给定的链表。
//
// 进阶：
//
// 你是否可以使用 O(1) 空间解决此题？
var detectCircle = function(head) {
    if (head === null) {
        return null;
    }
    let slow = head, fast = head;
    while (fast !== null) {
        slow = slow.next;
        if (fast.next !== null) {
            fast = fast.next.next;
        } else {
            return null;
        }
        if (fast === slow) {  // 这就意味着，从头结点出发一个指针，从相遇节点 也出发一个指针，这两个指针每次只走一个节点， 那么当这两个指针相遇的时候就是 环形入口的节点
            let ptr = head;
            while (ptr !== slow) {
                ptr = ptr.next;
                slow = slow.next;
            }
            return ptr;
        }
    }
    return null;
}
// 具体解析 可看 https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/142-huan-xing-lian-biao-ii-jian-hua-gong-shi-jia-2/

/**
 * 25. K 个一组翻转链表
 * */
// 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
// k 是一个正整数，它的值小于或等于链表的长度。
// 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
// 示例：
// 给你这个链表：1->2->3->4->5
// 当 k = 2 时，应当返回: 2->1->4->3->5
// 当 k = 3 时，应当返回: 3->2->1->4->5
// 说明：
// 你的算法只能使用常数的额外空间。
// 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
var reverseKGroup = function(head, k) {
    let dummy = new ListNode(0); // 添加虚拟结点
    dummy.next = head;

    let pre = dummy;
    let end = dummy;

    while (end.next != null) {
        for (let i = 0; i < k && end != null; i++) end = end.next;
        if (end == null) break;
        let start = pre.next;
        let next = end.next;
        end.next = null;
        pre.next = reverseList(start);
        start.next = next;
        pre = start;
        end = pre;
    }
    return dummy.next;
}
// 题解 https://leetcode-cn.com/problems/reverse-nodes-in-k-group/solution/tu-jie-kge-yi-zu-fan-zhuan-lian-biao-by-user7208t/


/**
 * tool
 * */
function printLinkedList(head) {
    while(head) {
        console.log(head.val)
        head = head.next
    }
}

//  head - 1 - 2- 3- 4

const __main = () => {
    let a = new ListNode(1)
    let b = new ListNode(2)
    let c = new ListNode(3)
    let d = new ListNode(4)
    let e = new ListNode(5)
    a.next = b
    b.next = c
    c.next = d
    d.next = e
    // e.next = c

    console.log(hasCycle(a))
}

__main()

