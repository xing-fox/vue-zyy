<style lang="less" scoped>
.wrapper-pmlx-details {
  font-size: 0;
  width: 100%;
  line-height: initial;
  position: relative;
  .title {
    display: flex;
    align-items: center;
    color: #fffaf1;
    font-size: 0.36rem;
    height: 0.8rem;
    padding: 0.4rem 0 0;
    position: relative;
    i {
      display: inline-block;
      width: 0.8rem;
      height: 0.8rem;
      background-size: 50% 50%;
      background-repeat: no-repeat;
      position: absolute;
      top: 0.4rem;
      left: 0.4rem;
      bottom: 0;
      margin: 0 auto;
      &.return {
        background-position: left center;
        background-image: url("../assets/icon/icon_return.png");
      }
    }
    span {
      flex: 1;
      display: flex;
      justify-content: center;
    }
  }
  .d-content {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: calc(100vh - 1.8rem);
    margin: .2rem .4rem 0;
    padding: .4rem 0 0 0;
    overflow: auto;
    border-radius: 0.06rem;
    box-sizing: border-box;
    background: rgba(229, 215, 207, 1);
    .c-title {
      color: #B63723;
      font-size: .28rem;
    }
    .c-image {
      width: 2.65rem;
      height: 4.6rem;
      margin: .4rem 0;
      border-radius: .06rem;
      background: #eee;
    }
    .c-main {
      width: .6rem;
      text-indent: 2em;
    }
  }
}
</style>

<template>
  <Cont>
    <div class="wrapper-pmlx-details">
      <div class="title">
        <i class="icon return" @click="routeBack"></i>
        <span>愚人 The Fool</span>
      </div>
      <div class="d-content">
        <div class="c-title">愚人</div>
        <div class="c-image">
          <img src="" alt="">
        </div>
        <div class="c-main"></div>
      </div>
    </div>
  </Cont>
</template>

<script>
import Cont from "./content";
export default {
  name: 'pmlxDetails',
  data() {
    return {}
  },
  components: {
    Cont
  },
  methods: {
    routeBack () {}
  }
}
</script>
