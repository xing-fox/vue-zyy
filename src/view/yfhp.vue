<style lang="less" scoped>
  .wrapper {
    font-size: 0;
    width: 100%;
    line-height: initial;
    position: relative;
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
    .main {
      height: calc(100vh - 3.3rem);
      margin: .4rem .4rem 0;
      box-sizing: border-box;
      overflow: auto;
      .yfhp-content {
        box-sizing: border-box;
        padding-top: 1.44rem;
        width: 100%;
        height: 100%;
        background: url('../assets/images/hp-bg.png') no-repeat;
        background-size: 100% 100%;
        .yfhp-box {
          width: 4.35rem;
          height: 4.58rem;
          position: relative;
          margin: 0 auto;
          background: url('../assets/images/hp-bg2.png') no-repeat;
          background-size: 100% 100%;
          .heart {
            display:inline-block;
            position: absolute;
            left: 50%;
            top:50%;
            width: .9rem;
            height: .84rem;
            margin: -.42rem 0 0 -.45rem;
            background: url('../assets/images/hp-img2.png') no-repeat;
            background-size: 100% 100%;
          }
          & > div {
            position: absolute;
            background: url('../assets/images/hp-add.png') no-repeat;
            background-size: 100% 100%;
            width: 1.73rem;
            height: 1.73rem;
            img {
              display: block;
              width: 100%;
              height: 100%;
            }
            span {
              position: absolute;
              width: 100%;
              font-size: .3rem;
              color: #fff;
              left: 0;
              line-height: .8rem;
              text-align: center;
            }
          }
          .left {
            left: -.5rem;
            top: .5rem;
            span {
              top: -.7rem;
            }
          }
          .right {
            right: -.5rem;
            bottom: .5rem;
            span {
              bottom: -.7rem;
            }
          }
        }
      }
    }
  }
</style>

<template>
  <Cont>
    <div class="wrapper">
      <div class="title">
        <i class="icon return" @click="routeBack"></i>
        <span>缘分合盘</span>
      </div>
      <div class="main">
        <div class="yfhp-content">
          <div class="yfhp-box">
            <i class="heart"></i>
            <div class="left">
              <img src="../assets/images/hp-img.png">
              <span>白展堂</span>
            </div>
            <div class="right">
              <span>请选择</span>
            </div>
          </div>
        </div>
      </div>
      <div class="submit" @click="divineFunc">
        <span>开始合盘</span>
      </div>
    </div>
  </Cont>
</template>

<script>
import Cont from './content'
export default {
  name: 'yfhp',
  data () {
    return {
    }
  },
  components: {
    Cont
  },
  mounted () {
  },
  methods: {
    /**
     * 跳转占星师
     */
    divineFunc () {
    },
    /**
     * 返回
     */
    routeBack () {
      window.fortune.closepage()
    }
  }
}
</script>
