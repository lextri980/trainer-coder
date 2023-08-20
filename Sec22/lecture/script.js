const input = document.querySelector("input");
const addBtn = document.querySelector(".add-btn");
const ul = document.querySelector("ul");
const modal = document.querySelector(".modal");
const updateInput = document.querySelector(".update-input");
const closeBtn = document.querySelectorAll(".close");
const submitUpdate = document.querySelector(".submit-btn");

let updateIndex = "";

const todoList = [];

function renderListTodo(list) {
  ul.textContent = "";
  list.forEach((item, index) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const groupBtn = document.createElement("div");
    const delBtn = document.createElement("button");
    const updateBtn = document.createElement("button");

    groupBtn.classList.add("group-btn");
    updateBtn.classList.add("update-btn");
    delBtn.classList.add("del-btn");

    updateBtn.textContent = "Update";
    delBtn.textContent = "Delete";

    delBtn.addEventListener("click", () => handleDelete(index));
    updateBtn.addEventListener("click", () => openModal(item, index));

    ul.appendChild(li);
    li.appendChild(span);
    li.appendChild(groupBtn);
    groupBtn.appendChild(updateBtn);
    groupBtn.appendChild(delBtn);
    span.textContent = item.value;
  });
}
renderListTodo(todoList);

addBtn.addEventListener("click", () => {
  const todo = {
    id: todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1,
    value: input.value,
  };
  todoList.push(todo);
  renderListTodo(todoList);
  input.value = "";
  console.log(todoList);
});

function handleDelete(index) {
  todoList.splice(index, 1);
  renderListTodo(todoList);
}

for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener("click", () => {
    modal.style.display = "none";
  });
  updateInput.value = "";
}

function openModal(item, index) {
  modal.style.display = "block";
  updateInput.value = item.value;
  updateIndex = index;
  console.log(updateIndex)
}

submitUpdate.addEventListener("click", () => handleUpdate(updateIndex));

function handleUpdate(updateIndex) {
  todoList[updateIndex].value = updateInput.value;
  modal.style.display = "none";
  renderListTodo(todoList);
  updateInput.value = "";
}
