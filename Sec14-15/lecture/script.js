const number = 32132312;
console.log(number, typeof number);

const numberToString = number.toString();
console.log(numberToString, typeof numberToString);

const decimal = 100.53414197481;
console.log(decimal.toFixed("sda"));

const nString = "293182031";
console.log(typeof Number(nString), Number(nString));

const arrayString = ["first", "second", "third", "forth", "fifth"];
const arrayNumber = [23123, 23123, 34324];
const arrayObject = [
  { firstName: "Nguyen", lastName: "A" },
  { firstName: "Le", lastName: "B" },
  { firstName: "Nguyen", lastName: "C" },
];

const newArray = arrayString.indexOf("fifth");

function declarationFunc(number1, number2) {
  return number1 + number2;
}

console.log(declarationFunc(3, 4));

const expressionFunc = function go() {
  console.log("nice");
  return "IIFE";
};

expressionFunc();

const arrowFunc = (number1, number2) => {
  return number1 + number2;
};

function* generatorFunc(i) {
  yield i;
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

const gen = generatorFunc(10);

// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

function root(cb) {
  console.log(cb);
}

const callback = () => {
  return "This is callback";
};

root(callback());

const object = {
  key: "value",
  key2: "value2",
};

const userDetail = {
  firstName: "Le",
  lastName: "A",
  age: 23,
  address: "Hanoi",
  country: "Vietnam",
  0: "this is number key",
  ["multi letter"]: "this is multi letter key",
  info: {
    id: "021312jsadad",
    passport: "sdfdsfjosidfjiwjoirj",
  },
};

userDetail.phoneNumber = "0987654321";

const { country2 } = userDetail;

switch (userDetail.age) {
  case 23:
    console.log("small");
    break;
  case 23:
    console.log("middle");
    break;
  case 24:
    console.log("big");
    break;
  default:
    break;
}

const userAge = userDetail.age < 18 ? "lower" : "adult";
console.log(userAge);

if (userDetail.firstName === "Nguyen") {
  console.log("Nguyen");
} else if (userDetail.firstName === "Le") {
  console.log("Le");
} else if (userDetail.firstName === "Pham") {
  console.log("Pham");
} else {
  console.log("Dont have");
}

const checkFirstName =
  userDetail.firstName === "Nguyen"
    ? "Nguyen"
    : userDetail.firstName === "Le"
    ? "Le"
    : userDetail.firstName === "Le"
    ? "Le"
    : userDetail.firstName === "Pham"
    ? "Pham"
    : "Dont have";

console.log(checkFirstName);

const userDetail = {
  firstName: "Le Van",
  lastName: "A",
  age: 23,
  address: {
    country: "Vietnam",
    province: "Ha noi",
    district: "Dong Da",
  },
  phoneNumber: "0987654321",
  favouriteFlower: ["rose", "morning glory"],
};

const markRecord = {
  name: 'Peter Parker',
  class: '6C18',
  mark: {
    math: 9.2,
    physics: 9.0,
    chemistry: 8.4,
  }
}
