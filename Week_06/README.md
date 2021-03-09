学习笔记

##  排序算法


```js
// 1. 冒泡排序
var bubble = function (arr) {
    var len = arr.length;
    for(var i = 0; i < len - 1; i++) {
        for(var j = 0; j < len - 1 - i; j++) {
            if(arr[j] > arr[j+1]) { // todo: j 相邻元素两两对比
                var temp = arr[j+1];// 元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    returnarr;
}

// 2.选择排序
var selection = function (arr) {
    var len = arr.length;
    var minIndex, temp;
    for(var i = 0; i < len - 1; i++) {
        minIndex = i;
        for(var j = i + 1; j < len; j++) {
            if(arr[j] < arr[minIndex]) {    // 寻找最小的数
                minIndex = j;                // 将最小数的索引保存
            }
        }
        swap(arr, i, maxIndex)
    }
    returnarr;
    
}

// 插入排序
var insertion = function (arr) {
    for(var i = 1; i < arr.length; i++) {
        var preIndex = i - 1;
        var current = arr[i];
        while(preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    return arr;
}

// 4. 快排
var quickSort = function (arr) {
    var low = 0, high = arr.length - 1
    var pivot = partition(arr, low, high)
    quickSort(arr, 0, pivot - 1)
    quickSort(arr, pivot + 1, high)
}
var partition = function (arr, lo, hi) {
    // // 将数组切分为 a[lo...i-1] a[i] a[i+1...hi]
    // var i = lo, j = hi + 1  // 左右扫描指针
    // var v = a[lo]; // 基准值
    // while (true) {
    //     // 扫描左右检查是否结束，并交换元素
    //     while (a[++i] < v) { // a[i] < v, 增大 i
    //         if (i === hi)  break
    //     }
    //     while (v < a[--j]) { // a[j] > v, 减小 j
    //         if (j === lo) break
    //     }
    //     exch(a, i, j)
    // }
    // exch(arr, lo, j);
    // return j;

    var pivot = left,   // 设定基准值（pivot）
        index = pivot + 1;
    for(var i = index; i <= right; i++) {
        if(arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, pivot, index - 1);
    return index - 1;
}

function jsQuickSort(array) {
    if (array.length <= 1) {
        return array;
    }
    const pivotIndex = Math.floor(array.length / 2);
    const pivot = array.splice(pivotIndex, 1)[0];  //从数组中取出我们的"基准"元素
    const left = [], right = [];
    array.forEach(item => {
        if (item < pivot) {  //left 存放比 pivot 小的元素
            left.push(item);
        } else {  //right 存放大于或等于 pivot 的元素
            right.push(item);
        }
    });
    //至此，我们将数组分成了left和right两个部分
    return jsQuickSort(left).concat(pivot, jsQuickSort(right));  //分而治之
}

// 5.归并排序
var mergeSort = function (arr) {
    var lo = 0, hi = arr.length - 1
    if (lo <= hi) return
    
    var mid = lo + (hi - lo) / 2
    var aux = new Array(arr.length)
    mergeSort(arr, lo, mid)
    mergeSort(arr, mid + 1, hi)
    merge(a, lo, mid, hi, aux)
}

var merge = function (a, lo, mid, hi, aux) {
    let i = lo, j = mid + 1 
    for (let k = lo; k <= hi; k++) { // 辅助数组
        aux[k] = arr[k]
    }
    
    for (let k = lo; k <= hi; k++) { //  返回原数组
        if (i > mid)              a[k] = aux[j++]
        else if (j > hi)          a[k] = aux[i++]
        else if (aux[j] < aux[i]) a[k] = aux[j++]
        else                      a[k] = aux[i++]
        
    }
}
```