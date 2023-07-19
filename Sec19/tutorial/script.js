// const naturalNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const a = naturalNumber.forEach(item => {
//   if(item % 2 === 0) {
//     console.log(item)
//   }
//   return item
//  })

//  console.log(a)
 
 
//  //! Quiz b
//  naturalNumber.forEach(item => {
//   if(item % 3 === 0) {
//     console.log(item)
//   }
//  })
 
 
//  //! Quiz c
//  for (let i = 11; i <= 1000; i++) {
//   naturalNumber.push(i);
//  }
//  console.log(naturalNumber);
 
//  map => {
//   item: 'mutable',
//   length: 'no change'
//  }

//  filter => {
//   item: 'immutable',
//   length: '<= old array'
//  }

// const numberList = [44, 23, 54, 12, 65, 13];

// let max = numberList[0];
// // let min = numberList[0];
// //65


// numberList.forEach((item) => {
//  if (item > max) {
//    max = item;
//  }
//  if (item < min) {
//    min = item;
//  }
// });


// //! Quiz a
// console.log(max);

// //! Quiz b
// console.log(min);

const mathPoint = [
  { no: 1, name: "A", class: "1C", mark: 9 },
  { no: 2, name: "B", class: "1C", mark: 4 },
  { no: 3, name: "C", class: "1C", mark: 2 },
  { no: 4, name: "D", class: "2C", mark: 6 },
  { no: 5, name: "E", class: "3C", mark: 7 },
  { no: 6, name: "F", class: "4C", mark: 5 },
  { no: 7, name: "G", class: "4C", mark: 9 },
  { no: 8, name: "H", class: "5C", mark: 8 },
  { no: 9, name: "I", class: "6C", mark: 7 },
  { no: 10, name: "K", class: "6C", mark: 8 },
  { no: 11, name: "L", class: "6C", mark: 6 },
];

let max = mathPoint[0].mark
let min = mathPoint[0].mark

mathPoint.forEach((item) => {
 if(item.mark > max) {
   max = item.mark
 }
 if(item.mark < min) {
   min = item.mark
 }
})

console.log(max, min)

const maxList = mathPoint.filter((item) => {
 return item.mark === max
})

const minList = mathPoint.filter((item) => {
 return item.mark === min
})

//! Quiz a
console.log(maxList)

//! Quiz b
console.log(minList)