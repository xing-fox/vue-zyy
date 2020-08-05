<template>
  <div id="app">
    <div class="loading" v-show="loadingStatus">
      <van-loading size="30px" type="spinner" color="#fff" />
    </div>
    <network v-show="netWorkStatus"></network>
    <transition name="component-fade">
      <router-view v-wechat-title="$route.meta.title"/>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Network from '@/components/network'
export default {
  name: 'app',
  components: {
    Network
  },
  computed: mapState({
    'loadingStatus': state => state.app.loadingStatus,
    'netWorkStatus': state => state.app.netWorkStatus
  })
}
</script>

<style lang="less">
@import './style/normal.css';
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  position: relative;
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
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}
</style>
