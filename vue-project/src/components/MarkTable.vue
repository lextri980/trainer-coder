<template>
  <div class="template1-container">
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Full name</th>
          <th>Class</th>
          <th>Math</th>
          <th>Physics</th>
          <th>Chemistry</th>
          <th>Average</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in classList">
          <td>{{ index + 1 }}</td>
          <td>{{ fullName(item.firstname, item.lastname) }}</td>
          <td>{{ item.class }}</td>
          <td>{{ item.math }}</td>
          <td>{{ item.physics }}</td>
          <td>{{ item.chemistry }}</td>
          <td>{{ average(item.math, item.physics, item.chemistry) }}</td>
          <td class="group-btn">
            <button
              style="margin-right: 10px"
              class="update-btn"
              @click="openModal('update', item)"
            >
              Update
            </button>
            <button class="del-btn">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button style="margin-top: 10px" class="create-btn" @click="openModal()">
      Create
    </button>

    <!-- ! Modal area --------------------------------------------------------------------------->
    <div class="modal-fulboard" :class="!revealModal ? 'hidden' : ''">
      <div class="modal-container">
        <h3>
          {{
            type === "create"
              ? "Create"
              : type === "update"
              ? "Update"
              : "Delete"
          }}
          record
        </h3>

        <div class="create-form">
          <div class="row">
            <div class="input-group">
              <label for="firstname">First name</label>
              <input id="firstname" type="text" v-model="formData.firstname" />
            </div>
            <div class="input-group">
              <label for="lastname">Last name</label>
              <input id="lastname" type="text" v-model="formData.lastname" />
            </div>
          </div>
          <div class="row">
            <div class="input-group">
              <label for="class">Class</label>
              <input id="class" type="text" v-model="formData.class" />
            </div>
            <div class="input-group">
              <label for="math">Math</label>
              <input id="math" type="text" v-model="formData.math" />
            </div>
          </div>
          <div class="row">
            <div class="input-group">
              <label for="physics">Physics</label>
              <input id="physics" type="text" v-model="formData.physics" />
            </div>
            <div class="input-group">
              <label for="chemistry">Chemistry</label>
              <input id="chemistry" type="text" v-model="formData.chemistry" />
            </div>
          </div>
        </div>

        <div class="model-group-btn">
          <button @click="hideModal">Cancel</button>
          <button
            class="create-btn"
            v-if="type === 'create'"
            @click="createRecord"
          >
            Create
          </button>
          <button
            class="update-btn"
            v-if="type === 'update'"
            @click="updateRecord()"
          >
            Update
          </button>
          <button
            class="del-btn"
            v-if="type === 'delete'"
            @click="deleteRecord"
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
  name: "Template1Vue",
  props: {},
  components: {},
  data() {
    return {
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
          id: 1231233,
          firstname: "Le",
          lastname: "A",
          class: "2C",
          math: 9.2,
          physics: 9.8,
          chemistry: 9,
        },
        {
          id: 1231234,
          firstname: "Nguyen",
          lastname: "B",
          class: "3C",
          math: 9.2,
          physics: 8.9,
          chemistry: 10,
        },
      ],
      classListItem: null,
      plusMark: null,
      formData: {
        id: "",
        firstname: "",
        lastname: "",
        class: "",
        math: "",
        physics: "",
        chemistry: "",
      },
      revealModal: false,
      type: "create",
    };
  },
  computed: {},
  watch: {},
  methods: {
    fullName(firstname, lastname) {
      return `${firstname} ${lastname}`;
    },
    average(math, physics, chemistry) {
      return ((Number(math) + Number(physics) + Number(chemistry)) / 3).toFixed(
        1
      );
    },
    hideModal() {
      this.revealModal = false;
      this.classListItem = null;
      this.formData = {};
    },

    openModal(type = "create", item) {
      this.type = type;
      this.revealModal = true;
      if (type === "update") {
        this.formData = { ...item };
        this.classListItem = item;
      }
    },

    createRecord() {
      const form = {
        ...this.formData,
        id: Math.floor(Math.random() * 1000000),
      };
      this.classList.unshift(form);
      this.hideModal();
    },

    updateRecord() {
      const form = {
        ...this.formData,
      };

      this.classList = this.classList.map((item) => {
        if (item.id === this.classListItem.id) {
          return form;
        }
        return item;
      });
    },

    deleteRecord(id) {},
  },
};
</script>

<style scoped>
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

button {
  min-width: 100px;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  background-color: rgb(175, 175, 175);
  font-weight: 600;
  color: rgb(43, 43, 43);
  cursor: pointer;
}

.hidden {
  display: none;
}

.create-btn {
  background-color: rgb(0, 175, 79);
  color: white;
}
.update-btn {
  background-color: rgb(250, 162, 0);
  color: white;
}
.del-btn {
  background-color: rgb(255, 51, 0);
  color: white;
}

h3 {
  margin: 0;
  text-align: center;
  margin-bottom: 20px;
}
.row {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.modal-fulboard {
  /* display: none; */
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(238, 238, 238, 0.5);
}
.modal-container {
  width: 600px;
  background-color: white;
  box-shadow: 2px 2px 10px rgb(161, 161, 161);
  position: fixed;
  /* height: 200px; */
  top: 50%;
  left: 50%;
  margin-top: -100px; /* Negative half of height. */
  margin-left: -250px; /* Negative half of width. */
  padding: 20px;
}
label {
  display: inline-block;
  text-align: right;
  margin-right: 10px;
  min-width: 70px !important;
}
.input-group {
  width: 50%;
}
.model-group-btn {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
</style>
