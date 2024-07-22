Array.prototype.binarySearch = function (n) {
  let low = 0;
  let high = this.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    const midValue = this[mid];
    if (midValue < n) {
      low = mid + 1;
    } else if (midValue > n) {
      high = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
};

const arr = [1, 2, 3, 4, 5];
const index = arr.binarySearch(33);
console.log(index);

// 时间复杂度 O(logN)
