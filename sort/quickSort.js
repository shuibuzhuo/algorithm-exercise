Array.prototype.quickSort = function () {

  function rec(arr) {
    if (arr.length <= 1) return arr

    const mid = arr[0];

    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < mid) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return [...rec(left), mid, ...rec(right)];
  }

  const res = rec(this);

  res.forEach((n, i) => (this[i] = n));
};

const arr = [1, 4, 3, 5, 2];
arr.quickSort()

// 时间复杂度 O(n*logN)
// 递归，劈成两半，时间复杂度 O(logN)
// 分区，for 循环，比较与基准数的大小，时间复杂度 O(n)
