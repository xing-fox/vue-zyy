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
    overflow: auto;
    .item {
      width: 100%;
      .item-title {
        color: #BFAE9A;
        font-size: .26rem;
        text-align: center;
        margin: .3rem 0;
      }
      .item-cont {
        color: #fff;
        font-size: .26rem;
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
      i {
        display: inline-block;
        width: .4rem;
        height: .4rem;
        margin: 0 .1rem 0 0;
        background-image: url("../assets/images/zxsz-btn.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
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
            <div class="star">{{ Fuhaos[1][flag1].flag }}</div>
            <div class="name">{{ Fuhaos[1][flag1].name }}</div>
          </div>
          <div class="item">
            <div class="star">{{ Fuhaos[2][flag2].flag }}</div>
            <div class="name">{{ Fuhaos[2][flag2].name }}</div>
          </div>
        </div>
        <div class="content">
          <div class="item" v-for="item in Data" :key="item.index">
            <div class="item-title">{{ item.info.title }}</div>
            <div class="item-cont">{{ item.info.content }}</div>
          </div>
        </div>
        <div class="footer">
          <div v-if="!status && tapStatus" class="button" @click="throwFunc">
            <i></i>
            <span>掷骰子</span>
          </div>
          <div v-else class="button" @click="routeChange">
            <i></i>
            <span>咨询骰子师</span>
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
      flag1: 0,
      flag2: 0,
      setTime: '',
      status: false,
      tapStatus: true,
      Data: Object,
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
      let self = this
      getData_XP({
        actiontype: 14
      }).then(res => {
        let animal = () => {
          if (new Date().getTime() > self.setTime + 2000) {
            self.status = true
            self.Data = res.infos
            cancelAnimationFrame(animal)
            clearInterval(self.AnimationFunc)
            self.flag = self.Data[0].position + 1
            self.flag1 = self.Data[1].position + 1
            self.flag2 = self.Data[2].position + 1
          } else {
            requestAnimationFrame(animal)
          }
        }
        animal()
      })
    },
    /**
     * 掷骰子
     */
    throwFunc () {
      this.tapStatus = false
      this.setTime = new Date().getTime()
      this.AnimationFunc = setInterval(() => {
        this.flag++
        this.flag1++
        this.flag2++
        if (this.flag === 12) this.flag = 1
        if (this.flag1 === 12) this.flag1 = 1
        if (this.flag2 === 12) this.flag2 = 1
      }, 100)
      this.getData()
    },
    /**
     * 返回
     */
    routeBack() {
      if (this.$route.query.from == 'app') return this.$router.go(-1)
      return window.fortune.closepage()
    },
    /**
     * 跳转
     */
    routeChange () {
      window.fortune.openactivity('com.fairytale.webpage.WebAcvitity','weburl_tag','http://newos.glassmarket.cn/webapps/jumper/index.php','extra_info_tag', 'jumpertype=4&jumperact=7', '0', '0')
    }
  }
}
</script>
