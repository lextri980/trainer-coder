<template>
  <div class="note-list-container">
    <!-- <div class="note-wrapper" > -->
    <div
      class="note-card"
      v-for="(item, index) in noteList"
      :key="index"
      :class="
        item.status === 'IMPORTANT'
          ? 'border-danger'
          : item.status === 'HIGHLIGHT'
          ? 'border-warn'
          : 'border-success'
      "
    >
      <div class="header">
        <div class="title">{{ item.title }}</div>
        <div class="group-btn">
          <img
            :src="updateIcon"
            alt="logo"
            width="20"
            height="20"
            class="pointer"
          />
          <img
            :src="deleteIcon"
            alt="logo"
            width="20"
            height="20"
            class="pointer"
          />
        </div>
      </div>
      <div class="badges">
        <b-badge
          class="badge-item"
          pill
          :variant="
            item.status === 'IMPORTANT'
              ? 'danger'
              : item.status === 'HIGHLIGHT'
              ? 'warning'
              : 'success'
          "
        >
          {{ item.status }}
        </b-badge>
      </div>
      <div class="content">{{ item.content }}</div>
    </div>
    <!-- </div> -->

    <b-button variant="primary" class="add-note-btn" @click="addModal = true"
      >Create</b-button
    >

    <b-modal
      v-model="addModal"
      title="Create new note"
      centered
      ok-title="Create"
      @ok="validateCreateNote"
    >
      <ValidationObserver tag="form" ref="create-form">
        <ValidationProvider rules="required" #default="{ errors }" name="Title">
          <b-form-group label="Title">
            <b-form-input v-model="createForm.title"></b-form-input>
            <small class="error">{{ errors[0] }}</small>
          </b-form-group>
        </ValidationProvider>
        <ValidationProvider
          rules="required"
          #default="{ errors }"
          name="Content"
        >
          <b-form-group label="Content">
            <b-form-textarea
              rows="4"
              v-model="createForm.content"
            ></b-form-textarea>
            <small class="error">{{ errors[0] }}</small>
          </b-form-group>
        </ValidationProvider>
        <ValidationProvider
          rules="required"
          #default="{ errors }"
          name="Status"
        >
          <b-form-group label="Status">
            <b-form-select
              v-model="createForm.status"
              :options="options"
            ></b-form-select>
            <small class="error">{{ errors[0] }}</small>
          </b-form-group>
        </ValidationProvider>
      </ValidationObserver>
    </b-modal>
  </div>
</template>

<script>
import apiService from "@/services/apiService";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { required } from "@validations";
import deleteIcon from "@/assets/icon/delete.png";
import updateIcon from "@/assets/icon/update.png";

export default {
  name: "NoteListVue",
  props: {},
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      required,
      deleteIcon,
      updateIcon,
      addModal: false,
      noteList: [],
      createForm: {
        title: "",
        content: "",
        status: "",
      },
      options: [
        { value: "IMPORTANT", text: "Important" },
        { value: "HIGHLIGHT", text: "Highlight" },
        { value: "NORMAL", text: "Normal" },
      ],
    };
  },
  mounted() {
    this.getNoteList();
  },
  methods: {
    /* <!--@--> (validateCreateNote): Validate ------------------------------------------------------------------------- */
    async validateCreateNote(e) {
      e.preventDefault();
      const valid = await this.$refs["create-form"].validate();
      if (valid) {
        this.createNote();
      }
    },
    /* <!--!--> Fetch: GET /note/list (getNoteList): Get note list ------------------------------------------------------------------------- */
    async getNoteList() {
      try {
        const response = await apiService.get("/note/list");
        this.noteList = response.data.notes;
      } catch (error) {
        this.$toast.error(error);
      }
    },
    /* <!--!--> Fetch: POST /note-create (createNote): Create note ------------------------------------------------------------------------- */
    async createNote() {
      try {
        const response = await apiService.post("/note/create", this.createForm);
        this.$toast.success(response.data.message);
        this.addModal = false;
        this.createForm = {
          title: "",
          content: "",
          status: "",
        };
        this.getNoteList()
      } catch (error) {
        this.$toast.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.note-list-container {
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px 5%;
  .note-card {
    width: 30%;
    background-color: white;
    border-radius: 4px;
    padding: 20px;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 16px;
      font-weight: 700;
    }
    .group-btn {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
  .badges {
    margin: 10px 0;
    .badge-item {
      padding: 5px;
      font-size: 10px;
    }
  }
  .add-note-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    box-shadow: 0 4px 4px gray;
  }
  .border-danger {
    border: 2px solid #dc3545;
  }
  .border-warn {
    border: 2px solid #ffc107;
  }
  .border-success {
    border: 2px solid #28a745;
  }
}
</style>
