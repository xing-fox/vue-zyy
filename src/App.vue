<template>
  <div id="app">
    <div class="loading" v-show="loadingStatus">
      <van-loading size="30px" type="spinner" color="#fff" />
    </div>
    <router-view v-wechat-title="$route.meta.title"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'app',
  computed: mapState({
    'loadingStatus': state => state.app.loadingStatus
  })
}
</script>

<style lang="less">
@import './style/normal.css';
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
}
</style>
