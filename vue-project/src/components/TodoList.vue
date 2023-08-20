<template>
  <div class="todo-list-container">
    <div class="group-input-section">
      <input v-model="todo" type="text" placeholder="Enter todo..." />
      <button @click="addTodo">Add</button>
    </div>
    <div class="list-todo">
      <div class="single-todo" v-for="(item, index) in todoList" :key="item.id">
        <div class="input-group">
          <input type="checkbox" />
          <p v-if="!item.isUpdate">{{ item.title }}</p>
          <input v-model="updatedTodo" v-else type="text" />
        </div>
        <div class="btn-group">
          <button
            v-if="!item.isUpdate"
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
      updatedTodo: "",
      todoList: [],

    };
  },
  methods: {
    addTodo() {
      const form = {
        id: this.todoList.length,
        title: this.todo,
        isUpdate: false,
      };
      this.todoList.push(form);
      this.todo = "";
    },
    handleUpdate(id) {
      this.todoList[id].isUpdate = true;
      this.updatedTodo = this.todoList[id].title;
    },
    confirmUpdate(id) {
      this.todoList[id].title = this.updatedTodo;
      this.todoList[id].isUpdate = false;
    },
    deleteTodo(id) {
      this.todoList = this.todoList.filter((item) => item.id !== id);
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
        }
        .delete-btn {
          background-color: rgb(255, 41, 41);
        }
      }
    }
  }
}
</style>
