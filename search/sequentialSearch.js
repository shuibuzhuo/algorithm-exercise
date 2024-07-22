Array.prototype.sequentialSearch = function(n) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === n) {
      return i
    }
  }

  return -1
}

const arr = [1, 2, 3, 4, 5]
const index = arr.sequentialSearch(13)

// 时间复杂度 O(n)
