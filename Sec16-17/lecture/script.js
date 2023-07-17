const markRecord = [
  { no: 1, name: "A", class: "6C", mark: 9 },
  { no: 2, name: "B", class: "6C", mark: 4 },
  { no: 3, name: "C", class: "1C", mark: 2 },
  { no: 4, name: "D", class: "2C", mark: 6 },
  { no: 5, name: "E", class: "3C", mark: 7 },
  { no: 6, name: "F", class: "4C", mark: 5 },
];

for (let i = 0; i < markRecord.length; i++) {
  if (markRecord[i].mark >= 5) {
    // console.log(i, markRecord[i]);
  }
}

const string = "anh xin noi iem";

for (let i = 0; i < 100; i++) {
  // console.log(string);
}

const userDetail = {
  firstName: "Nguyen",
  lastName: "B",
  age: 23,
  class: "6C16",
  university: "Hanoi university",
  haha: "adas",
};

for (const key in userDetail) {
  // console.log(userDetail[key]);
}

for (const key in markRecord) {
  // console.log(key);
}

// userDetail.tendau
console.log("-------------------------------------------------");
//OBJECT
//! {
//!   key: 'value'
//! }

//ARRAY
//! INDEX => [ITEM]

for (const index of markRecord) {
  // console.log(index)
}

console.log("-------------------------------------------------");
const objectChange = Object.keys(userDetail);
// console.log(objectChange)

for (const index of objectChange) {
  // console.log(index)
  // console.log(userDetail[index])
}

console.log("-------------------------------------------------");

markRecord.forEach((item, index) => {
  // console.log(index, item)
});

for (let i = 0; i < markRecord[i]; i++) {
  if (markRecord[i].mark >= 5) {
    // console.log(i, markRecord[i]);
  }
}
console.log("-------------------------------------------------");

const func1 = (param, arg) => {
  // console.log(param)
};

func1(3, 2);

console.log("-------------------------------------------------");

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

const every = mathPoint.some((item) => {
  return item.mark === 9;
});

console.log(every);

const find = mathPoint.find((item) => {
  return item.no === 6;
});

console.log(find);

const map = mathPoint.map((item, index) => {
  const newData = {
    id: item.no,
    name: item.name,
    class: item.class,
    mark: 5,
    bonus: "xxx",
  };
  return newData;
});

console.log(map);

//  = length old array
//  change item

const filter = mathPoint.filter((item) => {
  return item.mark === 7;
});

console.log(filter);

//! CRUD
//* C => Create
//* R => Read (List / Get)
//* U => Update
//* D => Delete

const naturalNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const total = naturalNumber.reduce((prev, curr) => {
  //! previous
  //! current
  return prev + curr;
}, 0);

console.log(total);

console.log(Math.PI);

console.log(Math.min());

console.log("-------------------------------------------------");

// const myHeader = document.getElementById("header");
// console.log(myHeader);

// const callClass = document.getElementsByClassName("getclass");
// console.log(callClass);

// for (let i = 0; i < callClass.length; i++) {
//   console.log(callClass[i]);
// }

// const callTag = document.getElementsByTagName("h2");
// console.log(callTag);

const query = document.querySelectorAll(".getclass");
console.log(query);

for (let i = 0; i < query.length; i++) {
  console.log(query[i]);
}

const pTag = document.querySelector(".hello");
const attr = pTag.getAttribute("class");
console.log(attr)
pTag.setAttribute('class', 'unique hello')
console.log(pTag)
