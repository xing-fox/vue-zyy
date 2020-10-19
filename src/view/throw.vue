<style lang="less" scoped>
.throw-wrapper {
  font-size: 0;
  width: 100%;
  line-height: initial;
  position: relative;
  .title {
    display: flex;
    align-items: center;
    color: #fffaf1;
    font-size: 0.3rem;
    height: 0.8rem;
    padding: 0.6rem 0 0;
    position: relative;
    i {
      display: inline-block;
      width: 0.8rem;
      height: 0.8rem;
      background-size: 50% 50%;
      background-repeat: no-repeat;
      position: absolute;
      &.return {
        top: 0.6rem;
        left: 0.4rem;
        bottom: 0;
        margin: 0 auto;
        background-position: left center;
        background-image: url("../assets/icon/icon_return.png");
      }
      &.tips {
        top: 0.6rem;
        right: 0.4rem;
        bottom: 0;
        margin: 0 auto;
        background-position: right center;
        background-image: url("../assets/images/icon-person.png");
      }
    }
    span {
      flex: 1;
      display: flex;
      justify-content: center;
    }
  }
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0 0 0;
    margin: 0.2rem 0.5rem 0;
    border-top: 1px solid #765e4a;
    .item {
      width: 1.56rem;
      text-align: center;
      .star {
        color: #fff;
        font-size: 0.7rem;
        font-weight: bold;
        font-family: fontXp;
        width: 1.56rem;
        height: 1.56rem;
        line-height: 1.56rem;
        text-align: center;
        background-image: url("../assets/icon/throw.png");
        background-size: 100% 100%;
      }
      .name {
        color: #bfae9a;
        font-size: 0.26rem;
        margin: 0.2rem 0 0 0;
      }
    }
  }
  .content {
    margin: .4rem .5rem 0;
    height: calc(100vh - 6rem);
    .item {
      width: 100%;
      .item-title {
        color: #BFAE9A;
        font-size: .24rem;
        text-align: center;
        margin: .2rem 0;
      }
      .item-cont {
        color: #fff;
        font-size: .24rem;
      }
    }
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 1.2rem;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    position: fixed;
    bottom: 0;
    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #FFFAF2;
      font-size: .26rem;
      width: 7.1rem;
      height: .8rem;
      margin: 0 auto;
      border-radius: .4rem;
      background: #AA1827;
    }
  }
}
</style>

<template>
  <div class="throw-wrapper">
    <Cont>
      <template>
        <div class="title">
          <i class="icon return" @click="routeBack"></i>
          <span>占星骰子</span>
        </div>
        <div class="nav">
          <div class="item">
            <div class="star">{{ Fuhaos[0][flag].flag }}</div>
            <div class="name">{{ Fuhaos[0][flag].name }}</div>
          </div>
          <div class="item">
            <div class="star">{{ Fuhaos[1][flag].flag }}</div>
            <div class="name">{{ Fuhaos[1][flag].name }}</div>
          </div>
          <div class="item">
            <div class="star">{{ Fuhaos[2][flag].flag }}</div>
            <div class="name">{{ Fuhaos[2][flag].name }}</div>
          </div>
        </div>
        <div class="content">
          <div class="item">
            <div class="item-title">行星-交汇点</div>
            <div class="item-cont">主要是获取到加密报文, code, 还有加密算法的初始向量等参数</div>
          </div>
          <div class="item">
            <div class="item-title">行星-交汇点</div>
            <div class="item-cont">主要是获取到加密报文, code, 还有加密算法的初始向量等参数</div>
          </div>
        </div>
        <div class="footer">
          <div class="button" @click="throwFunc">
            <span>掷骰子</span>
          </div>
        </div>
      </template>
    </Cont>
  </div>
</template>

<script>
import Cont from './content'
import Fuhaos from '@/assets/json/throw'
import { getData_XP } from '@/fetch/api'
export default {
  name: 'throw',
  data () {
    return {
      flag: 0,
      Fuhaos: Fuhaos,
      AnimationFunc: Object
    }
  },
  components: {
    Cont
  },
  methods: {
    /**
     * 获取数据
     */
    getData () {
      getData_XP()
    },
    /**
     * 掷骰子
     */
    throwFunc () {
      let Loop = () => {
        this.flag++
        if (this.flag === 9) this.flag = 0
        this.AnimationFunc = requestAnimationFrame(Loop)
      }
      Loop()
    },
    /**
     * 返回
     */
    routeBack() {
      if (this.from == "app") return this.$router.go(-1)
      return window.fortune.closepage()
    }
  }
}
</script>
