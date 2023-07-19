function defaultParams(title = "hello", content) {
  console.log(title);
  console.log(content);
}

defaultParams(undefined, "content");

console.log("------------------------------------");

const destructoring = {
  title: "hello",
  content: "world",
};

// console.log(destructoring.title)
// console.log(destructoring['title'])

const { title, content } = destructoring;

console.log(content);

console.log("------------------------------------");

const array1 = [0, 1, 2];
const array2 = [3, 4, 5];

const mainArray = [...array1, ...array2];

console.log(mainArray);

const object1 = {
  title: "Spread",
  key: 'is keys'
};
const object2 = {
  content: "operator",
};

const mainObject = {
  ...object1,
  ...object2,
};

console.log(mainObject)

console.log("------------------------------------");

// export const a = '1'
// import {a} from './script'

// const b = '2'
// export default b
// import anyName from './script'

console.log("------------------------------------");

const optionalChaining = {
  title: 'optional'
}

console.log(optionalChaining?.content)

console.log("------------------------------------");

const variable = 1
const checked = variable <= 1 && 'in'

console.log(checked)

console.log("------------------------------------");

