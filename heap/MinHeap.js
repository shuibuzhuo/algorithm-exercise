class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap (index1, index2) {
    const tmp = this.heap[index1]
    this.heap[index1] = this.heap[index2]
    this.heap[index2] = tmp
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return index * 2 + 1
  }

  getRightChildIndex(index) {
    return index * 2 + 2
  }

  shiftUp(index) {
    if (index <= 0) return
    const parentIndex = this.getParentIndex(index)
    if (this.heap[index] < this.heap[parentIndex]) {
      this.swap(index, parentIndex) 
      this.shiftUp(parentIndex)
    }
  }

  shiftDown(index) {
    const leftIndex = this.getLeftChildIndex(index)
    const rightIndex= this.getRightChildIndex(index)

    if (this.heap[index] > this.heap[leftIndex]) {
      this.swap(index, leftIndex)
      this.shiftDown(leftIndex)
    }
    if (this.heap[index] > this.heap[rightIndex]) {
      this.swap(index, rightIndex)
      this.shiftDown(rightIndex)
    }
  }

  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }
  
  pop() {
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
  }

  peek() {
    return this.heap[0]
  }

  size() {
    return this.heap.length
  }
}

const h = new MinHeap()
h.insert(3)
h.insert(2)
h.insert(1)
h.pop()
