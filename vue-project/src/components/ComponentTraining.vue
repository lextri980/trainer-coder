<template>
  <div class="component-training-container">
    <h2>{{ title }}</h2>
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Full name</th>
          <th>Class</th>
          <th>Math</th>
          <th>Physics</th>
          <th>Chemistry</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in classListProps">
          <td>{{ index + 1 }}</td>
          <td>{{ `${item.firstname} ${item.lastname}` }}</td>
          <td>{{ item.class }}</td>
          <td>{{ item.math }}</td>
          <td>{{ item.physics }}</td>
          <td>{{ item.chemistry }}</td>
          <td>
            <button @click="onClick(item)">Click</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ComponentTrainingVue",
  props: {
    classListProps: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: 'Title'
    },
    logEverything: {
      type: Function,
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    onClick(item) {
      this.$emit('table-click', item)
    },
  },
};
</script>

<style lang="scss" scoped>
.component-training-container {
  table,
  th,
  td {
    border: 2px solid black;
    border-collapse: collapse;
  }
  th,
  td {
    padding: 5px 10px;
  }
}
</style>
