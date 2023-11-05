const state = {
  isAuthenticated: false
};

const getters = {};

const actions = {
  verifyAuth(context) {
    context.commit("VERIFY_AUTH")
  },
};

const mutations = {
  "VERIFY_AUTH"(state) {
    state.isAuthenticated = true
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
