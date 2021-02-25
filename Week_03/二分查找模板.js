var binarySearch = function (arr, target) {
    let lo = 0
    let hi = arr.length - 1

    while(lo <= hi) {
        let mid = Math.floor((lo + hi) / 2)
        if (target === arr[mid]) {
            return target
        } else if (target > arr[mid]) {
            lo = mid + 1
        } else {
            hi = mid - 1
        }
    }

}
