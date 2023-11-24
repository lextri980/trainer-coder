export const globalMixin = {
  data() {
    return {}
  },
  methods: {
    startLoading() {
      const loading = document.querySelector('.loading-bg')
      loading.style.display = "flex"
    },
    endLoading() {
      const loading = document.querySelector('.loading-bg')
      loading.style.display = "none"
    },
  },
};
