
function* gene() {
  yield 1
  console.log('aaaaaaaa')
  console.log('bbbbbbbbb')
  yield 2
  console.log('ccccccccccc')

}

const iterator = gene()

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())