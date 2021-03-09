// 选择排序
var selection = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }

        swap(arr, i, min)
    }
}

// var a = [4, 2, 1, 5, 3]
// selection(a)
// console.log(a)

// 插入排序
var insertion = function (arr) {
    let preIndex, current;
    for (let i = 1; i < arr.length; i++) {
        preIndex = i - 1;
        current = arr[i];

        while(preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }

}

//             2
//          p
//             c
// var a = [4, 2, 6, 5, 3]
// insertion(a)
// console.log(a)

// 冒泡排序
var bubble = function (arr) {
    let len = arr.length
    for(let i = 0; i < len - 1; i++) {
        for(let j = 0; j < len - 1 - i; j++) {
            if(arr[j] > arr[j+1]) {       // 相邻元素两两对比
                let temp = arr[j+1];       // 元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}



// 快排
var quickSort = function (arr, begin, end) {
    if (end <= begin) return

    let pivot = partition(arr, begin, end)
    quickSort(arr, begin, pivot - 1)
    quickSort(arr, pivot + 1, end)
}
var partition = function (a, begin, end) {
    var pivot = end // 设定基准值（pivot）
    var counter = begin;
    for(let i = begin; i < end; i++) {
        if(a[i] < a[pivot]) {
            swap(a, i, counter);
            counter++;
        }
    }
    swap(a, pivot, counter);
    return counter;
}
var swap = function (arr, p, q) {
    let temp = arr[p]
    arr[p] = arr[q]
    arr[q] = temp
}


// 归并排序
var mergeSort = function (arr, left, right) {
    if (right <= left) return
    let mid = Math.floor((left + right) / 2)
    mergeSort(arr, left, mid)
    mergeSort(arr, mid + 1, right)

    merge(arr, left, mid, right)
}
var merge = function (arr, left, mid, right) {
    let temp = [] // right - left + 1
    let i = left, j = mid + 1, k = 0

    while (i <= mid && j <= right) {
        temp[k++] = arr[i] < arr[j] ? arr[i++] : arr[j++]
    }
    while (i <= mid) {
        temp[k++] = arr[i++]
    }
    while (j <= right) {
        temp[k++] = arr[j++]
    }

    for (let p = 0; p < temp.length; p++) {
        arr[left + p] = temp[p]
    }

}


// 堆排序、计数排序、桶排序
// https://www.cnblogs.com/onepixel/p/7674659.html
