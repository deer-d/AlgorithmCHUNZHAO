// 题目要求不能采用额外的辅助空间，
// 将数组中 0 元素都移动到数组的末尾，并且维持所有非 0 元素的相对位置。
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// 双指针
function moveZeros(nums) {
    let j = 0 // 记录非零元素位置
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            swap(nums, i, j)
            j++
        }
    }
}

function swap(arr, a, b) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

//         j
// [1,3,12,0,0]
//           i

let nums = [1,3,12,0,0]
moveZeros(nums)
console.log(nums)
