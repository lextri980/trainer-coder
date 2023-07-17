const title = document.querySelector(".title");
const body = document.querySelector("body");

const content1 = title.innerText;
// console.log("innerText:", content1);

// const content2 = title.textContent;
// console.log('textContent:', content2);

// const content3 = title.innerHTML;
// console.log('innerHTML:', content3);

// title.innerHTML = '<b>No bug today</b>'
// console.log(title);

const bold = document.querySelector(".bold");
const strongText = document.createElement("b");
bold.appendChild(strongText);

strongText.textContent = "This is bold text";
bold.style.backgroundColor = "red";

const list = bold.classList.value;
console.log(list);

bold.classList.add("reveal");

const checked = bold.classList.contains("hidden");
console.log(checked);

bold.classList.remove("hidden");
bold.classList.toggle("reveal");

const myDiv = document.querySelector('.mydiv')
const button = document.createElement("button");
myDiv.appendChild(button);
button.textContent = "Click me";
button.setAttribute("type", "submit");

const submitBtn = document.querySelector(".submit");
submitBtn.onclick = function (e) {
  console.log(e);
  e.preventDefault();
  console.log("Submit");
};

const handleClick = (e) => {
  console.log('click')
}

button.addEventListener("click", handleClick);

button.removeEventListener("click", handleClick)

//! Toggle click
const toggleText = document.querySelector('.toggle-text')
const toggleBtn = document.querySelector('.toggle-btn')

toggleBtn.addEventListener('click', () => {
  toggleText.classList.toggle('hidden')
})