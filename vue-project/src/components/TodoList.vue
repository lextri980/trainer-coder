<template>
  <div class="todo-list-container">
    <div class="group-input-section">
      <input @keydown.enter="addTodo" v-model="todo" type="text" placeholder="Enter todo..." />
      <button @click="addTodo">Add</button>
    </div>
    <small style="color: red">{{ errorMessage }}</small>
    <div class="list-todo">
      <div class="single-todo" v-for="item in todoList" :key="item.id">
        <div class="input-group">
          <input
            @change="checkDone(item.id)"
            type="checkbox"
            v-model="item.done"
            :disabled="isDisabled"
          />
          <p :class="item.done ? 'line-through' : ''" v-if="!item.isUpdate">
            {{ item.title }}
          </p>
          <input v-else v-model="updatedTodo" type="text" />
        </div>
        <div class="btn-group">
          <button
            v-if="!item.isUpdate"
            :disabled="isDisabled"
            class="update-btn"
            @click="handleUpdate(item.id)"
          >
            Update
          </button>
          <button
            v-if="item.isUpdate"
            class="update-btn"
            @click="confirmUpdate(item.id)"
          >
            Confirm
          </button>
          <button
            v-if="!item.isUpdate"
            class="delete-btn"
            @click="deleteTodo(item.id)"
            :disabled="isDisabled"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoListVue",
  props: {},
  data() {
    return {
      todo: "",
      updatedTodo: "dhcashdiuahsicxzjzcz",
      isDisabled: false,
      todoList: [],
      errorMessage: "",
    };
  },
  mounted() {
    const newArr = this.todoList.filter((item, index) => item.id % 2 === 0);
    console.log(newArr);
  },
  methods: {
    // handleKeyDown(e) {
    //   if(e.key === 'Enter') {
    //     this.addTodo()
    //   }
    // },
    addTodo() {
      this.errorMessage = "";
      if (this.todo.length === 0) {
        this.errorMessage = "Enter first";
      } else {
        const form = {
          id: Math.floor(Math.random() * 1000000),
          title: this.todo,
          isUpdate: false,
          done: false,
        };
        this.todoList.push(form);
        this.todo = "";
      }
    },
    handleUpdate(id) {
      this.todoList[id].isUpdate = true;
      this.updatedTodo = this.todoList[id].title;
      this.isDisabled = true;
    },
    confirmUpdate(id) {
      this.todoList[id].title = this.updatedTodo;
      this.todoList[id].isUpdate = false;
      this.isDisabled = false;
    },
    deleteTodo(chosenId) {
      this.todoList = this.todoList.filter((ele) => ele.id !== chosenId);
    },
    checkDone(id) {
      this.todoList[id].done = this.todoList[id].done;
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-list-container {
  display: flex;
  flex-direction: column;
  width: 500px;
  .group-input-section {
    width: 100%;
    display: flex;
    gap: 0 10px;
    margin-bottom: 10px;
    input {
      width: 100%;
    }
    button {
      border: none;
      background-color: rgb(122, 255, 122);
      padding: 5px 15px;
      border-radius: 3px;
      color: white;
      cursor: pointer;
    }
  }
  .list-todo {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .single-todo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .input-group {
        display: flex;
        align-items: center;
        p {
          margin: 0;
        }
      }
      .btn-group {
        display: flex;
        gap: 10px;
        button {
          border: none;
          padding: 7px 15px;
          border-radius: 3px;
          color: white;
          cursor: pointer;
        }
        .update-btn {
          background-color: rgb(255, 137, 19);
          &[disabled] {
            background-color: rgb(255, 137, 19, 0.5);
          }
        }
        .delete-btn {
          background-color: rgb(255, 41, 41);
          &[disabled] {
            background-color: rgb(255, 41, 41, 0.5);
          }
        }
      }
    }
  }
}
.line-through {
  text-decoration: line-through;
}
</style>
