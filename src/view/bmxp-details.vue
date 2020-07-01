<style lang="less" scoped>
  .wrapper {
    font-size: 0;
    width: 100%;
    line-height: 1;
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
      span {
        flex: 1;
        display: flex;
        justify-content: center;
      }
    }
  }
</style>

<template>
  <Cont>
    <div class="wrapper">
      <div class="title">
        <i class="icon return" @click="$router.go(-1)"></i>
        <span>本命星盘</span>
      </div>
    </div>
  </Cont>
</template>

<script>
import Cont from './content'
export default {
  name: 'bmxpDetails',
  components: {
    Cont
  }
}
</script>
