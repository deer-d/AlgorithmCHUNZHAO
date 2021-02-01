// 347. 前 K 个高频元素
// 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
// 示例 1:
//
// 输入: nums = [1,1,1,2,2,3], k = 2
// 输出: [1,2]
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 方法一 map + 小顶堆
let topKFrequent = function(nums, k) {
    let map = new Map()
    let heap = [,]
    nums.map((num) => {
        if(map.has(num)) {
            map.set(num, map.get(num)+1)
        } else {
            map.set(num, 1)
        }
    })

    // 如果元素数量小于等于 k
    if(map.size <= k) {
        return [...map.keys()]
    }

    // 如果元素数量大于 k，遍历map，构建小顶堆
    let i = 0
    map.forEach((value, key) => {
        if(i < k) {
            // 取前k个建堆, 插入堆
            heap.push(key)
            // 原地建立前 k 堆
            if(i === k-1) buildHeap(heap, map, k)
        } else if(map.get(heap[1]) < value) {
            // 替换并堆化
            heap[1] = key
            // 自上而下式堆化第一个元素
            heapify(heap, map, k, 1)
        }
        i++
    })
    // 删除heap中第一个元素
    heap.shift()
    return heap
};

// 原地建堆，从后往前，自上而下式建小顶堆
let buildHeap = (heap, map, k) => {
    if(k === 1) return
    // 从最后一个非叶子节点开始，自上而下式堆化
    for(let i = Math.floor(k/2); i>=1 ; i--) {
        heapify(heap, map, k, i)
    }
}

// 堆化
let heapify = (heap, map, k, i) => {
    // 自上而下式堆化
    while(true) {
        let minIndex = i
        if(2*i <= k && map.get(heap[2*i]) < map.get(heap[i])) {
            minIndex = 2*i
        }
        if(2*i+1 <= k && map.get(heap[2*i+1]) < map.get(heap[minIndex])) {
            minIndex = 2*i+1
        }
        if(minIndex !== i) {
            swap(heap, i, minIndex)
            i = minIndex
        } else {
            break
        }
    }
}

// 交换
let swap = (arr, i , j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
// https://leetcode-cn.com/problems/top-k-frequent-elements/solution/javascript-qian-k-ge-gao-pin-yuan-su-by-user7746o/
