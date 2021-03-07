var reverseWords = function(s) {
    /*
        1、trim - split - reverse - join
        2、反转两次 reverse整个string 然后再单独reverse每个单词 （不建议）
    */
    // 解法一
    const a = s.trim().split(/\s+/)

    let l = 0, r = a.length - 1, t
    while (l < r) {
        t = a[l]
        a[l++] = a[r]
        a[r--] = t
    }

    return a.join(' ')

    // 解法一 简化版
    return s.trim().split(/\s+/).reverse().join(' ')

};