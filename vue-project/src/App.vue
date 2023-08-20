<template>
  <div id="app">
    <!-- <p v-if="count <= 5">5 left</p>
    <p v-else-if="count > 5 && count <= 10">5 to 10</p>
    <p v-else>More than 10</p>

    <p>{{ count }}</p>

    <ul>
      <li v-for="(item, index) in city" :key="index">{{ item }}</li>
    </ul>

    <button @click="countUp">Count up</button>
    <button @click="countDown">Count down</button>

    <p class="fullname">{{ fullName }}</p>
    <p class="fullname">{{ fullName2() }}</p>

    <button @click="changeComputed">Click</button>
    <p class="fullname">fullName: {{ fullName }}</p>
    <p class="fullname">fullName - read-only: {{ fullNameReadOnly }}</p>

    <p>-----------------------------------------------------</p>

    <p :class="original ? 'original' : 'orange'">V-bind directives</p>
    <button @click="changeColor">Change color</button>
    <form>
      <button type="submit">Submit</button>
    </form>

    <p>-----------------------------------------------------</p>
    <input type="text" v-model="formData.title" placeholder="title" />
    <input type="text" v-model="formData.content" placeholder="content" />
    <br />
    <button @click="onSubmit">Submit</button> -->
    <TodoList></TodoList>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    TodoList,
  },
  data() {
    return {
      formData: {
        title: "",
        content: "",
      },
      count: 1,
      city: ["Hanoi", "Da Nang", "HCM City"],
      firstName: "Nguyen",
      lastName: "A",
      firstName2: "Abc",
      lastName2: "Def",
      original: true,
    };
  },
  computed: {
    fullName: {
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set(value) {
        this.firstName = value;
      },
    },
    fullNameReadOnly() {
      return `${this.firstName2} ${this.lastName2}`;
    },
  },
  methods: {
    countUp() {
      this.count = this.count + 1;
    },
    countDown() {
      this.count = this.count - 1;
    },
    fullName2() {
      return `${this.firstName} ${this.lastName}`;
    },
    changeComputed() {
      this.fullName = "Le";
      this.fullNameReadOnly = "Pham";
    },
    changeColor() {
      this.original = !this.original;
    },
    onSubmit() {
      console.log(this.formData);
    },
  },
};

//reactive state
</script>

<style lang="scss">
.original {
  color: red;
}
.orange {
  color: orange;
}
</style>
