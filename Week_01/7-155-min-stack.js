// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
//
// push(x) —— 将元素 x 推入栈中。
// pop() —— 删除栈顶的元素。
// top() —— 获取栈顶元素。
// getMin() —— 检索栈中的最小元素。
//  


/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
    this.minStack = []
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)
    if (this.minStack.length === 0 ||  x <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(x) // 把最小元素放入栈
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const x = this.stack.pop()
    if (x !== void 0 &&  x === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

