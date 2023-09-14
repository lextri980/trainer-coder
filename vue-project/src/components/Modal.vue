<template>
  <div class='modal-container'>
    <h3>
      <slot name="header"></slot>
    </h3>
    <slot name="body"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'ModalVue',
  props: {},
  components: {},
  methods: {},
}
</script>

<style lang='scss' scoped>
.modal-container {
  width: 400px;
  box-shadow: 0 4px 10px gray;
  border-radius: 8px;
  padding: 15px;
}
</style>