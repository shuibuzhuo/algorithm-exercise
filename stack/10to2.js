function tenToTwo (num) {
  const arr = []

  while(num > 0) {
    arr.push(num % 2)
    num = Math.floor(num / 2)
  }  

  let str = ''

  while(arr.length > 0) {
    str += arr.pop()
  }

  return str
}

console.log(tenToTwo(35))
