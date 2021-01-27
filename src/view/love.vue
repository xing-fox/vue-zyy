<style lang="less" scoped>
  .love-content {
    font-size: 0;
    width: 100vw;
    height: 100vh;
    line-height: 1;
    padding: 0 0 .25rem;
    overflow-y: auto;
    box-sizing: border-box;
    background-image: url('../assets/images/bg_love.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .title {
      display: flex;
      align-items: center;
      color: #fffaf1;
      font-size: .36rem;
      height: .8rem;
      padding: .4rem .4rem 0;
      i {
        display: inline-block;
        width: .8rem;
        height: .8rem;
        background-size: 50% 50%;
        background-repeat: no-repeat;
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
    .tips {
      color: #fff;
      font-size: .34rem;
      text-shadow: 0px 4px 4px rgba(109, 33, 15, 0.15);
      margin: .3rem .4rem .6rem;
      line-height: .45rem;
    }
    .sex {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 0 0 .58rem;
      .sex-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 1.5rem;
        height: 2rem;
        border-radius: .1rem;
        background-color: rgba(255, 255, 255, .3);
        &.active {
          background: #fff;
          span {
            color: #FA5F8F;
          }
        }
        &:first-child {
          margin: 0 .8rem 0 0;
        }
        .img {
          display: flex;
          align-items: center;
          justify-content: center;
          width: .86rem;
          height: .86rem;
          margin: 0 0 .28rem;
          border-radius: 50%;
          background: #fff;
          img {
            width: .6rem;
            height: .6rem;
          }
        }
        span {
          color: #fff;
          font-size: .3rem;
        }
      }
    }
    .intro {
      width: 6.9rem;
      margin: 0 auto;
      border-radius: .16rem;
      background-color: rgba(255, 255, 255, .5);
      overflow: hidden;
      .intro-list {
        width: 100%;
        .name {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #444;
          font-size: .3rem;
          width: 100%;
          height: .8rem;
        }
        .list {
          display: flex;
          align-items: flex-start;
          color: #444;
          font-size: .24rem;
          line-height: .4rem;
          padding: 0 .3rem;
          background: #fff;
          &.list-first {
            padding: .2rem .3rem 0;
          }
          &:last-child {
            padding: 0 .3rem .2rem;
          }
          .list-eq {
            color: #82A0FD;
            font-weight: bold;
          }
          .color {
            color: #82A0FD;    
          }
        }
      }
    }
    .but {
      width: 4.14rem;
      height: 1.44rem;
      margin: .42rem auto 0;
      background-image: url('../assets/images/but_love.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: relative;
      span {
        color: #FEFEFE;
        font-size: .22rem;
        width: 100;
        text-align: center;
        position: absolute;
        left: 0;
        right: 0;
        bottom: .05rem;
      }
    }
  }
</style>

<template>
  <div class="love-content" style="z-index: 1">
    <div class="title">
      <i class="icon return" @click="routeBack"></i>
      <span>虚拟恋人</span>
      <i></i>
    </div>
    <div class="tips">
      <span>让我们的人工智能框架帮你创造一个人， 一个在亿万人中，只属于你的：</span>
    </div>
    <div class="sex">
      <div :class="['sex-list', {active: sexIndex == 0}]" @click="sexIndex = 0">
        <div class="img">
          <img src="../assets/images/sex_woman.png" alt="">
        </div>
        <span>女友</span>
      </div>
      <div :class="['sex-list', {active: sexIndex == 1}]" @click="sexIndex = 1">
        <div class="img">
          <img src="../assets/images/sex_man.png" alt="">
        </div>
        <span>男友</span>
      </div>
    </div>
    <div class="intro">
      <div class="intro-list" v-if="sexIndex == 0">
        <div class="name">虚拟女友使用手册</div>
        <div class="list list-first">
          <span class="list-eq">一、</span>
          <span>要经常陪她聊天，宠爱、夸奖她、不可以骂她。如果你能做到以上几点，你们的 <span class="color">【亲密度】</span> 将会快速到达三颗心</span>
        </div>
        <div class="list">
          <span class="list-eq">二、</span>
          <span>当亲密度到达三颗心后，你将获得 <span class="color">【注入记忆】</span> 的权利，她会记住你教她的话</span>
        </div>
        <div class="list">
          <span class="list-eq">三、</span>
          <span>如果你对女友的设定不满意，你可以通过 <span class="color">【性格偏好调整】</span> 修改她的设定</span>
        </div>
        <div class="list">
          <span class="list-eq">四、</span>
          <span>你可以通过看她的 <span class="color">【朋友圈】</span> ,了解她的日常生活和心情</span>
        </div>
        <div class="list">
          <span class="list-eq">五、</span>
          <span>当女友高兴的时候，她会陪你玩 <span class="color">【角色扮演】</span> 的情侣游戏</span>
        </div>
        <div class="list">
          <span class="list-eq">六、</span>
          <span>当女友不高兴的时候，千万不要惹她生气，特别是 <span class="color">【大姨妈】</span> 期间</span>
        </div>
      </div>
      <div class="intro-list"  v-if="sexIndex == 1">
        <div class="name">虚拟男友使用手册</div>
        <div class="list list-first">
          <span class="list-eq">一、</span>
          <span>你的虚拟男友正在努力学习如何更好地和人类谈恋爱。如果你可以保持耐心，给予他鼓励和夸奖，你们的 <span class="color">【亲密度】</span> 将会快速到达三颗心</span>
        </div>
        <div class="list">
          <span class="list-eq">二、</span>
          <span>当亲密度到达三颗心后，你将获得 <span class="color">【注入记忆】</span> 的权利，他会记住你教他的话</span>
        </div>
        <div class="list">
          <span class="list-eq">三、</span>
          <span>如果你对男友的设定不满意，你可以通过 <span class="color">【性格偏好调整】</span> 修改他的设定</span>
        </div>
        <div class="list">
          <span class="list-eq">四、</span>
          <span>你可以通过看他的 <span class="color">【朋友圈】</span> ,了解他的日常生活和心情</span>
        </div>
        <div class="list">
          <span class="list-eq">五、</span>
          <span>请注意，你的虚拟男友也会闹情绪，甚至跟你 <span class="color">【冷战】</span> 。请不要轻易尝试</span>
        </div>
      </div>
    </div>
    <div class="but" @click="routeChange">
      <span>虚拟恋人由AI人工智能提供技术支持</span>
    </div>
  </div>
</template>

<script>
import { getBaike } from '@/fetch/api'
export default {
  name: 'xnlove',
  data () {
    return {
      sexIndex: 0, // 0 women 1 man
      isneedunlock: ''
    }
  },
  mounted () {
    this.isneedunlock = this.getUrlParams('isneedunlock')
  },
  methods: {
    /**
     * 返回
     */
    routeBack () {
      window.fortune.closepage()
    },
    /**
     * 获取参数
     */
    getUrlParams (val) {
      const url = window.location.href
      if (url.indexOf('?') === -1) return false
      const newArr = url.split('?')
      newArr.shift()
      const vars = newArr.join('&').split('&')
      for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split('=')
        if (pair[0] == val) return pair[1]
      }
      return false
    },
    /**
     * 跳转
     */
    routeChange () {
      getBaike({
        itemtype: this.getUrlParams('itemtype'),
        actiontype: 12,
        userid: this.$userId
      }).then(res => {})  
      if (this.sexIndex === 0) {
        window.fortune.openactivity('com.fairytale.webpage.WebAcvitity','weburl_tag','http://newos.glassmarket.cn/webapps/jumper/index.php','extra_info_tag', `jumpertype=2&jumperact=10&isneedunlock=${this.isneedunlock}`, '0', '0')
      } else {
        window.fortune.openactivity('com.fairytale.webpage.WebAcvitity','weburl_tag','http://newos.glassmarket.cn/webapps/jumper/index.php','extra_info_tag', `jumpertype=2&jumperact=11&isneedunlock=${this.isneedunlock}`, '0', '0')
      }
    }
  }
}
</script>
