var relativeSortArray = function(arr1, arr2, r = [], h = new Map, q = new PriorityQueue(), t) {
    arr2.forEach((v, i) => h.set(v,i))
    arr1.forEach(v => q.add(h.has(v) ? h.get(v) : 1000 + v, v))
    while(t = q.shift()) r.push(t.second)
    return r
};
class PriorityQueue {
    constructor(a) {
        this.q = []
        a && this._build(a)
    }
    add(v, second) { // 添加
        this.q.push({v, second}) // 添加 值（比较用） 和 第二参数（索引）
        this._up(this.q.length - 1) // 放入 二叉树的尾部，然后 上浮
    }
    shift() { // 弹出
        var n = this.q.shift() // 弹出 根节点
        if (this.q.length) { // 如果还有节点
            this.q.unshift(this.q.pop()) // 将 最尾部的节点 放到根节点位置
            this._down(0) // 下沉 根节点
        }
        return n
    }
    first() { // 根节点的值
        return this.q[0].v
    }
    empty() { // 是否为空
        return this.q.length === 0
    }
    length() { // 返回队列长度
        return this.q.length
    }
    _build(a) { // 初始化
        this.q.push({v:a[0]}) // 先给空队列放入第0个元素
        for (var i = 1; i < a.length; i++) this.q.unshift({v:a[i]}), this._down(0)
        // 从第1个元素起，把新元素放在根节点，然后下沉 根节点
    }
    _swap(l, r, t) { // 交换
        t = this.q[l], this.q[l] = this.q[r], this.q[r] = t // 交换两个节点
    }
    _down(i){ // 下沉
        var t = this.q.length - 2 >> 1, min, minI // 叶子节点的根节点索引，下沉到 叶子节点的根节点停止
        while(i <= t){
            var l = i * 2 + 1, r = l + 1 // 左子节点的索引 = 当前节点索引 * 2 + 1，右子节点的索引 = 左子节点的索引 + 1
            if ((this.q[l] ? this.q[l].v : Infinity) < (this.q[r] ? this.q[r].v : Infinity))
                min = this.q[l].v, minI = l
            else min = this.q[r].v, minI = r // 找到 左子节点 和 右子节点的 较小者
            if (this.q[i].v > min) this._swap(i, minI), i = minI // 当前节点的 左子节点 或 右子节点 比 它小，交换
            else break
        }
    }
    _up(i) { // 上浮
        while(i > 0){ // 不能超过根节点
            var t = i - 1 >> 1 // 当前节点的 根节点索引 = 当前节点索引 - 1 的一半
            if (this.q[i].v < this.q[t].v) this._swap(i, t), i = t // 当前节点值 比 它的根节点 小，交换
            else break
        }
    }
}