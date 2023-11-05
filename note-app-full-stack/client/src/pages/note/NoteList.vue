<template>
  <div class='note-list-container'>Note</div>
</template>

<script>
import apiService from '@/services/apiService';

export default {
  name: 'NoteListVue',
  props: {},
  data() {
    return {}
  },
  mounted() {
    this.getNoteList()
  },
  methods: {
    /* <!--!--> Fetch: GET /note/list (getNoteList): Get note list ------------------------------------------------------------------------- */
    async getNoteList() {
      try {
        const response = await apiService.get("/note/list")
        console.log('response', response)
      } catch (error) {
        // console.log('error', error)
        this.$toast.error(error)
      }
    },
  },  
}
</script>

<style lang='scss' scoped></style>