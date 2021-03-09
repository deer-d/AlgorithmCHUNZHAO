学习笔记


## 排序算法

### 1.几种排序算法
```javascript
// 算法四中的算法 https://www.cnblogs.com/devinkin/p/9892761.html#org3af0ed7
```

### 2.实战讲解

```js
// 1. 冒泡排序
var bubble = function (arr) {
    var len = arr.length;
    for(var i = 0; i < len - 1; i++) {
        for(var j = 0; j < len - 1 - i; j++) {
            if(arr[j] > arr[j+1]) {       // 相邻元素两两对比
                var temp = arr[j+1];       // 元素交换
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
var partition = function (arr, low, high) {
    // 将数组切分为a[lo..i-1],a[i],a[i+1..hi]
    // 左扫描指针
    var i = lo;
    // 右扫描指针
    var j = hi + 1;
    var v = a[lo];
    while (true) {
        // 扫描左右,检查是否结束交换元素
        while (less(a[++i], v)) {
            if (i === hi) {
                break;
            }
        }
        while (less(v,a[--j])) {
            if (j === lo) {
                break;
            }
        }

        if (i >= j) {
            break;
        }

        // 如果有交换元素,且i<j,交换
        exch(a, i, j);
    }
    // 将v = a[j]放入正确的位置
    exch(a, lo, j);
    // a[lo..j-1] <= a[j] <= a[j+1..hi]达成
    return j;
   
} 
```
