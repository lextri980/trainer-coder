<template>
  <div class="link-card-container">
    <div
      class="link-card"
      v-for="(item, index) in linkList"
      :key="index"
      :class="
        item.status === 'TO LEARN'
          ? 'border-danger'
          : item.status === 'LEARNING'
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
            @click="openPostModal(true, item)"
          />
          <img
            :src="deleteIcon"
            alt="logo"
            width="20"
            height="20"
            class="pointer"
            @click="openDeleteModal(item)"
          />
        </div>
      </div>
      <div class="badges">
        <b-badge
          class="badge-item"
          pill
          :variant="
            item.status === 'TO LEARN'
              ? 'danger'
              : item.status === 'LEARNING'
              ? 'warning'
              : 'success'
          "
        >
          {{ item.status }}
        </b-badge>
      </div>
      <div class="content">{{ item.content }}</div>
    </div>

    <b-button
      variant="primary"
      class="add-link-btn"
      @click="openPostModal(true)"
      >Create</b-button
    >

    <b-modal
      v-model="postModal"
      :title="isUpdate === true ? 'Update link card' : 'Create new link card'"
      centered
      :ok-title="isUpdate ? 'Update' : 'Create'"
      @ok="validateCreateNote"
      @hidden="closePostModal"
    >
      <ValidationObserver tag="form" ref="create-form">
          
        <ValidationProvider rules="required" #default="{ errors }" name="Title">
          <b-form-group label="Title">
            <b-form-input v-model="createForm.title"></b-form-input>
            <small class="error">{{ errors[0] }}</small>
          </b-form-group>
        </ValidationProvider>
        <ValidationProvider rules="required" #default="{ errors }" name="Url">
          <b-form-group label="Url">
            <b-form-input v-model="createForm.url"></b-form-input>
            <small class="error">{{ errors[0] }}</small>
          </b-form-group>
        </ValidationProvider>
        <ValidationProvider
          rules="required"
          #default="{ errors }"
          name="Status"
          v-if="isUpdate"
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
import deleteIcon from "@/assets/icon/delete.png";
import updateIcon from "@/assets/icon/update.png";
import { required } from "@validations";

export default {
  name: "LinkCardVue",
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
      postModal: false,
      deleteModal: false,
      link: {},
      isUpdate: false,
      createForm: {
        title: "",
        content: "",
        status: "",
      },
      options: [
        { value: "TO LEARN", text: "To learn" },
        { value: "LEARNING", text: "Learning" },
        { value: "LEARNED", text: "Learned" },
      ],
      linkList: [],
    };
  },
  mounted() {
    this.getNoteList();
  },
  methods: {
    /* <!--@--> (closePostModal): Close post modal ------------------------------------------------------------------------- */
    closePostModal() {
      this.deleteModal = false;
      this.postModal = false;
      this.resetForm();
    },
    /* <!--@--> (resetForm): Reset form data ------------------------------------------------------------------------- */
    resetForm() {
      this.isUpdate = false;
      this.link = {};
      this.createForm = {
        _id: "",
        title: "",
        url: "",
        status: "",
      };
    },
    /* <!--@--> (openPostModal): Open create & update modal ------------------------------------------------------------------------- */
    openPostModal(isUpdate = false, item) {
      // this.isUpdate = isUpdate;
      // if (this.isUpdate) {
      //   this.getNoteDetail(item._id);
      // }
      console.log(isUpdate, item);
      this.postModal = true;
    },
    /* <!--@--> (validateCreateNote): Validate ------------------------------------------------------------------------- */
    async validateCreateNote(e) {
      e.preventDefault();
      const valid = await this.$refs["create-form"].validate();
      if (valid) {
        if (this.isUpdate) {
          this.updateNote();
        } else {
          this.createNote();
        }
      }
    },
    /* <!--!--> Fetch: GET /linkcard/list (getNoteList): Get linkcard list ------------------------------------------------------------------------- */
    async getNoteList() {
      try {
        const response = await apiService.get("/linkcard/list");
        this.linkList = response.data.linkcards;
      } catch (error) {
        this.$toast.error(error);
      }
    },
    /* <!--!--> Fetch: POST /linkcard-create (createNote): Create linkcard ------------------------------------------------------------------------- */
    async createNote() {
      try {
        const response = await apiService.post(
          "/linkcard/create",
          this.createForm
        );
        this.$toast.success(response.data.message);
        this.closePostModal();
        this.getNoteList();
      } catch (error) {
        this.$toast.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.link-card-container {
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px 5%;
  .link-card {
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
  .add-link-btn {
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
