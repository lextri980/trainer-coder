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
    <button class="btn" @click="countDown">Count down</button>

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
    <!-- <TodoList></TodoList> -->
    <!-- <MarkTable></MarkTable> -->
    <!-- <ComponentTraining
      :classListProps="classList"
      :title="title"
      @table-click="logEverything"
    >
    </ComponentTraining> -->
    <!-- <component :is="currentComponent"></component>

    <CustomButton @press="onClick" variant="warning">Click</CustomButton>

    <div class="group-btn">
      <b-button variant="primary">Open Modal</b-button>
      <button @click="currentComponent = TodoList">Todo list</button>
      <button @click="currentComponent = MarkTable">Template</button>
      <button @click="currentComponent = ComponentTraining">
        Component training
      </button>
    </div> -->
    <CustomCard title="Click" btnText="OK" @click="handleClick"> 2</CustomCard>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import MarkTable from "./components/MarkTable.vue";
import ComponentTraining from "./components/ComponentTraining.vue";
import Modal from './components/Modal.vue'
import CustomButton from './components/CustomButton.vue'
import CustomCard from "./components/CustomCard.vue";

export default {
  name: "App",
  components: {
    TodoList,
    MarkTable,
    ComponentTraining,
    Modal,
    CustomButton,
    CustomCard
  },
  data() {
    return {
      TodoList,
      MarkTable,
      ComponentTraining,

      currentComponent: MarkTable,
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
      title: "Mark table",
      classList: [
        {
          id: 1231232,
          firstname: "Nguyen",
          lastname: "B",
          class: "1C",
          math: 9,
          physics: 10,
          chemistry: 9.5,
        },
        {
          firstname: "Le",
          lastname: "A",
          class: "2C",
          math: 9.2,
          physics: 9.8,
          chemistry: 9,
        },
        {
          firstname: "Nguyen",
          lastname: "B",
          class: "3C",
          math: 9.2,
          physics: 8.9,
          chemistry: 10,
        },
      ],
    };
  },
  mounted() {
    console.log('asiudgsaidhiua')
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
    /* <!--@--> (handleClick):  ------------------------------------------------------------------------- */
    handleClick() {
      console.log('asdasd')
    },
    onClick() {
      console.log('asdsad')
    },
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
    logEverything(log) {
      console.log(log);
    },
  },
};

//reactive state
</script>

<style lang="scss" scoped>
.original {
  color: red;
}
.orange {
  color: orange;
}
.group-btn {
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: fixed;
  right: 20px;
  bottom: 20px;
}
</style>
