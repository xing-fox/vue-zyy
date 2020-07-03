export default {
  state: {
    /**
     * 全局接口请求loading
     */
    loadingStatus: false
  },
  mutations: {
    CHANGE_LOADINGSTATUS (state, status) {
      state.loadingStatus = status
    } 
  },
  getters: {},
  actions: {}
}
