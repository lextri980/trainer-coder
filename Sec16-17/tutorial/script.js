const naturalNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numberList = [44, 23, 54, 12, 65, 13];

let i = numberList[0];
numberList.forEach((item, index) => {
  if (i - item < 0) {
    i = item;
  }
});

console.log(i)

const mathPoint = [
  { no: 1, name: "A", class: "1C", mark: 4 },
  { no: 2, name: "B", class: "1C", mark: 5 },
  { no: 3, name: "C", class: "1C", mark: 9 },
  { no: 4, name: "D", class: "2C", mark: 6 },
  { no: 5, name: "E", class: "3C", mark: 7 },
  { no: 6, name: "F", class: "4C", mark: 5 },
  { no: 7, name: "G", class: "4C", mark: 9 },
  { no: 8, name: "H", class: "5C", mark: 8 },
  { no: 9, name: "I", class: "6C", mark: 7 },
  { no: 10, name: "K", class: "6C", mark: 8 },
  { no: 11, name: "L", class: "6C", mark: 6 },
];

const topArray = []
let topMark = 0
mathPoint.forEach((item, index) => {
  if(topMark - item.mark <= 0) {
    topMark = item.mark
  }
})

