<template>
  <div class="custom-card-container">
    <img :src="avatar" alt="logo" />
    <div class="content">
      <h4>{{ title }}</h4>
      <span>
        <slot></slot>
      </span>
    </div>
    <div class="footer-btn">
      <button @click="$emit('click')">{{ btnText }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomCardVue",
  props: {
    avatar: {
      type: String,
      default: "https://picsum.photos/600/300/?image=25",
    },
    title: {
      type: String,
      default: "",
    },
    btnText: {
      type: String,
      default: "Submit",
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.custom-card-container {
  margin: 10px;
  width: 300px;
  box-shadow: 0 4px 4px rgb(161, 161, 161);
  border-radius: 5px;
  img {
    width: 100%;
    height: 150px;
    border-radius: 5px;
  }
  .content {
    padding: 10px;
  }
  .footer-btn {
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    button {
      border: none;
      background-color: rgb(7, 207, 0);
      color: white;
      border-radius: 5px;
      padding: 3px 10px;
    }
  }
}
</style>
