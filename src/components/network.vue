<style scoped lang="less">
  .network {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    .title {
      display: flex;
      align-items: center;
      color: #fffaf1;
      font-size: .36rem;
      height: .8rem;
      padding: .4rem 0 0;
      position: relative;
      i {
        display: inline-block;
        width: .8rem;
        height: .8rem;
        background-size: 50% 50%;
        background-repeat: no-repeat;
        position: absolute;
        top: .4rem;
        left: .4rem;
        bottom: 0;
        margin: 0 auto;
        &.return {
          background-position: left center;
          background-image: url('../assets/icon/icon_return.png');
        }
      }
    }
    .content {
      color: #ccc;
      font-size: 28rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100vw;
      height: calc(100vh - 1rem);
    }
  }
</style>

<template>
  <Cont :zIndex="10">
    <div class="network">
      <div class="title">
        <i class="icon return" @click="routeBack"></i>
      </div>
      <div class="content">
        <span @click="reTurnFunc">网络请求超时，请点击重试</span>
      </div> 
    </div>
  </Cont>
</template>

<script>
import { mapMutations } from 'vuex'
import Cont from '@/view/content'
export default {
  name: 'network',
  components: {
    Cont
  },
  methods: {
    ...mapMutations([
      'CHANGE_NETWORKSTATUS'
    ]),
    routeBack () {
      return window.fortune.closepage()
    },
    reTurnFunc () {
      this.CHANGE_NETWORKSTATUS(false)
      window.location.href = this.$Url
    }
  }
}
</script>
