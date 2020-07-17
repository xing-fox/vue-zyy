export default {
  state: {
    /**
     * 全局接口请求loading
     */
    loadingStatus: false,
    /**
     * 全局网络status
     */
    netWorkStatus: false,
  },
  mutations: {
    CHANGE_LOADINGSTATUS (state, status) {
      state.loadingStatus = status
    },
    CHANGE_NETWORKSTATUS (state, status) {
      state.netWorkStatus = status
    }
  },
  getters: {},
  actions: {}
}
