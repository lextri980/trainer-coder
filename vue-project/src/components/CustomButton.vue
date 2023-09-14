<template>
  <span @click="$emit('press')" class="custom-button-container" :class="getVariant(variant)">
    <span class="fw-900">
      <slot></slot>
    </span>
  </span>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    variant: {
      type: String,
      default: "primary",
    },
  },
  components: {},
  mounted() {
    console.log(this.variant);
  },
  data() {
    return {};
  },
  methods: {
    getVariant(vari) {
      switch (vari) {
        case "success":
          return "success";
        case "warning":
          return "warning";
        case "danger":
          return "danger";
        case "primary":
          return "primary";
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-button-container {
  padding: 5px 10px;
  border-radius: 3px;
  color: white;
}
.primary {
  background-color: gray;
}
.success {
  background-color: rgb(4, 176, 4);
}
.warning {
  background-color: rgb(255, 162, 0);
}
.danger {
  background-color: rgb(214, 0, 0);
}
.fw-900 {
  font-weight: 700;
}
</style>
