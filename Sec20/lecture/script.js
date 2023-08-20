function task1(callback) {
  console.log("task1");
  callback();
}

function task2() {
  console.log("task2");
}

task1(task2);

const isSuccess = false;

const promise = new Promise((res, rej) => {
  if (isSuccess) {
    res("Success");
  } else {
    rej("Fail");
  }
});

console.log(promise);

// pending = loading
// resolve = fulfilled
// reject

promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// fetch("https://jsonplaceholder.typicode.com/comments", {
//   method: "GET",
//   body: {},
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((error) => console.error(error));

fetch("https://jsonplaceholder.typicode.com/comments?postId=1", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  // .then((data) => console.log(data))
  .then((data) => localStorage.setItem("post", JSON.stringify(data)))
  .catch((error) => console.error(error));

  const getLocal = localStorage.getItem("post")
  console.log(JSON.parse(getLocal))

  localStorage.removeItem('post')

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     userId: 2,
//     title: "abcxyz",
//   }),
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

//! https://jsonplaceholder.typicode.com/posts/:id/:id2/:id3?postId=1&userId=2
//? /posts/:id?postId=1 : route
//? /id : params (hay áp dụng cho các màn detail)
//? ?postId=1 : query (hay áp dụng cho các chức năng search)

const data = JSON.parse(localStorage.getItem("post"));
console.log("data", data);
localStorage.removeItem("post");
//route