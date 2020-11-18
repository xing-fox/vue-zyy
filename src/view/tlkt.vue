<style lang="less" scoped>
.wrapper {
  font-size: 0;
  width: 100%;
  line-height: initial;
  position: relative;
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
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
      width: 70%;
      display: block;
      margin: 0 auto;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .video {
    margin: 0 .3rem;
    border: .04rem solid #9F6C49;
    box-shadow: 0px 0px .2rem 0px rgba(62, 33, 11, 0.9);
    border-radius: .1rem;
    video, audio {
      width: 100%;
      height: 3.5rem;
      object-fit: cover;
      border-radius: .05rem;
      background: #000;
    }
    audio {
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }
  .nav {
    color: #a28a78;
    font-size: .26rem;
    display: flex;
    align-items: center;
    height: .9rem;
    margin: 0 .4rem;
    position: relative;
    &:after {
      border-bottom: 1px solid #765d49; 
    }
    li {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      &.active {
        color:#fffaf1;
        position: relative;
        &:before {
          content: '';
          width: .2rem;
          height: .2rem;
          border: 1px solid #f5f0e7;
          transform: scale(.5, .5) rotate(45deg);
          position: absolute;
          left: 0;
          right: 0;
          bottom: -.12rem;
          margin: 0 auto;
        }
        &:after {
          content: '';
          width: 100%;
          border-bottom: 1px solid #fffaf1;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
        }
      }
    }
  }
  .main {
    height: calc(100vh - 6.9rem);
    padding: .3rem .4rem 0;
    box-sizing: border-box;
    overflow: auto;
    &.active {
      height: calc(100vh - 6.3rem);
    }
    .item-info {
      background: #E5D8CF;
      border-radius: .06rem;
      height: 100%;
      padding: .3rem;
      box-sizing: border-box;
      overflow-y: auto;
      .class-info {
        padding-bottom: .2rem;
        border-bottom:#D1BDAF solid 1px;
        color: #8B7469;
        font-size: .24rem;
        line-height: .4rem;
        .title-c {
          display: flex;
          justify-content: space-between;
          align-items: center;
          h5 {
            flex: 1;
            font-size: .32rem;
            color: #513328;
          }
          span {
            padding: 0 .16rem;
            font-size: .24rem;
            color: #fff;
            height: .4rem;
            border-radius: .06rem;
            background-color: #B73724;
          }
        }
        .desc {
          padding: .12rem 0 .18rem;
        }
        .detail {
          display: flex;
          justify-content: space-between;
          .price {
            .new {
              font-size: .32rem;
              color: #B73724;
              font-weight: bold;
              font-style: normal;
            }
            .old {
              font-style: normal;
              text-decoration: line-through;
            }
          }
        }
      }
      .teacher, .class-item {
        font-size: .24rem;
        color: #513328;
        line-height: .48rem;
        .title-t {
          color: #B73724;
          font-size: .32rem;
          line-height: .4rem;
          padding: .3rem 0 .2rem;
        }
      }
      .teacher {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        .teacher-info {
          .teacher-img {
            float: left;
            width: 2rem;
            height: 2.6rem;
            background: #ccc;
            border-radius: .06rem;
            overflow: hidden;
            margin: .1rem .22rem 0 0;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .desc {
            flex: 1;
          }
        }
        .teacher-btn {
          color: #E5D8CF;
          font-size: .26rem;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.8rem;
          height: .6rem;
          margin: .3rem auto .2rem;
          border-radius: .3rem;
          background: #B5341F;
        }
      }
      .class-item {
        .class-img {
          width: 100%;
          background: #ccc;
          border-radius: .06rem;
          overflow: hidden;
          img {
            display: block;
            width: 100%;
            line-height: 0;
          }
        }
        .desc {
          text-indent: .48rem;
          padding-bottom: .06rem;
        }
      }
    }
    .item-nav {
      background: #E5D8CF;
      border-radius: .06rem;
      height: 100%;
      padding: .4rem;
      box-sizing: border-box;
      overflow-y: auto;
      .list-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: .4rem 0;
          border-bottom: #D1BDAF solid 1px;
          &:first-child {
            padding-top: 0;
          }
          &:last-child {
            padding-bottom: 0;
            border-bottom: 0;
          }
          .status {
            width: .5rem;
            height: .5rem;
            margin-right: .2rem;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
              display: block;
            }
          }
          .info {
            flex: 1;
            line-height: .3rem;
            font-size: .2rem;
            color:#8B7469;
            h5 {
              margin-bottom: .12rem;
              font-size: .26rem;
              color: #513328;
              font-weight:normal;
              &.red {
                color: #B5341F;
              }
            }
          }
          .bottom {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            font-size: .22rem;
            line-height: .4rem;
            .num {
              font-size: .18rem;
              color: #513328;
              padding-left: .28rem;
              background:url(../assets/images/icon-play.png) left center no-repeat;
              background-size: .2rem .2rem;
            }
            .price {
              color:#B73724;
            }
          }
        }
    }
  }
  .buy {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 1.1rem;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    position: fixed;
    bottom: 0;
    .hear {
      display: flex;
      width: 1.1rem;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin: 0 .3rem 0 0;
      img {
        width: .47rem;
        height: .35rem;
      }
      span {
        color: #B5341F;
        font-size: .28rem;
      }
    }
    .buy-button {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #E5D8CF;
      font-size: .26rem;
      width: 5.3rem;
      height: .7rem;
      border-radius: .35rem;
      background: rgba(181, 52, 31, .9);
      span {
        font-weight: bold;
      }
    }
  }
  .order-content {
    width: 6.6rem;
    padding: .2rem .3rem .45rem;
    box-sizing: border-box;
    .tips {
      color: #513328;
      font-size: .24rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: .5rem 0 .4rem;
      p {
        margin: 0 0 .1rem 0;
      }
    }
    .button {
      display: flex;
      justify-content: space-around;
      width: 100%;
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #e5d8cf;
        font-size: .26rem;
        width: 2rem;
        height: .7rem;
        border-radius: 2px;
        &.color-1 {
          background: #866e64;
        }
        &.color-2 {
          background: #b5341f;
        }
      }
    }
  }
}
</style>

<template>
  <Cont>
    <div class="wrapper">
      <template>
        <div class="title" v-if="totalData.allcourses">
          <i class="icon return" @click="routeBack"></i>
          <span>{{ totalData.allcourses[currentIndex].name }}</span>
          <!-- <i class="tips"></i> -->
        </div>
        <div class="video" v-if="totalData.allcourses">
          <video v-if="totalData.type == '2'" ref="video" :poster="totalData.pic" webkit-playsinline playsinline x5-playsinline controls controlsList="nodownload" :src="totalData.allcourses[currentIndex].video"></video>
          <audio v-else ref="video" preload="true" :style="{'background-image': `url(${totalData.pic})`}" webkit-playsinline playsinline x5-playsinline controls controlsList="nodownload" :src="totalData.allcourses[currentIndex].video"></audio>
        </div>
        <ul class="nav bor-b">
          <li v-for="(item, index) in navList" :key="index" :class="{'active': index == navIndex}" @click="changeNav(index)">{{ item }}</li>
        </ul>
        <div class="main" :class="{'active': totalData.allcourses && totalData.allcourses[0].pinfos.isbuy}">
          <div class="item-info" v-if="navIndex == 0">
            <div class="class-info">
              <div class="title-c">
                <h5>{{ totalData.name }}</h5>
                <span>{{ totalData.estatus === '1' ? '已完结' : '更新中' }}</span>
              </div>
              <div class="desc">{{ totalData.nametip }}</div>
              <div class="detail">
                <span>{{ totalData.views }}次播放</span>
                <span class="price">
                  <i class="old">￥{{ totalData.oldpricetip }}</i>
                  <i class="new">￥{{ totalData.pricetip }}</i>
                </span>
              </div>
            </div>
            <div class="teacher" v-if="totalData.expertshow != 0">
              <div class="title-t">讲师介绍</div>
              <div class="teacher-info">
                <div class="teacher-img">
                  <img :src="totalData.expertface">
                </div>
                <div class="desc">{{ totalData.expertjieshao }}</div>
              </div>
              <div v-if="totalData.expertuserid != 0" class="teacher-btn" @click="workerFunc">立即咨询</div>
            </div>
            <div class="class-item">
                <div v-for="(list, eq) in totalData.detail" :key="eq">
                  <div class="title-t" v-if="list.title">{{ list.title }}</div>
                  <div class="class-img" v-if="list.pic" @click="infoFunc(list)">
                    <img :src="list.pic">
                  </div>
                  <div class="desc" v-if="list.content">{{ list.content }}</div>
                </div>
            </div>
          </div>
          <div class="item-nav" v-if="navIndex == 1">
            <div class="list-item" v-for="(item, index) in totalData.allcourses" :key="item.id" @click="goTo(index)">
              <div class="status">
                <img v-if="index === currentIndex && playStatus" src="../assets/images/icon-stop.png" @click.stop.prevent="pauseVideo(index)">
                <img v-else src="../assets/images/icon-play.png" @click.stop.prevent="playVideo(index)">
              </div>
              <div class="info">
                <h5 :class="{'red': currentIndex === index}">{{ item.name }}</h5>
                <p>{{ item.duration }}</p>
              </div>
            </div>
          </div>
        </div>
        <div :class="['buy']" v-if="totalData.allcourses &&  !totalData.allcourses[0].pinfos.isbuy">
          <div class="hear" @click="playVideo(currentIndex)">
            <img v-if="totalData.type == '2'" src="../assets/images/icon-see.png">
            <img v-else src="../assets/images/icon-hear.png">
            <span>{{ totalData.type == '2' ? '试看' : '试听' }}</span>
          </div>
          <div class="buy-button" @click="goPay">立即参加：<span>{{ totalData.price }}</span>元</div>
        </div>
        <!-- 订单状态 -->
        <van-popup v-model="orderStatus" :style="{ 'border-radius': '4px' }">
          <div class="order-content">
            <div class="tips">是否已成功支付订单？</div>
            <div class="button">
              <div class="color-1" @click="unPayFunc">未支付</div>
              <div class="color-2" @click="checkPay">已支付</div>
            </div>
          </div>
        </van-popup>
        <!-- 未支付订单状态 -->
        <van-popup v-model="unOrderStatus" :style="{ 'border-radius': '4px' }">
          <div class="order-content">
            <div class="tips" v-if="payOrderData">
              <p >{{ payOrderData.tipinfo }}</p>
            </div>
            <div class="button">
              <div class="color-1" @click="unOrderStatus = false">我再想想</div>
              <div class="color-2" @click="goPay">购买课程</div>
            </div>
          </div>
        </van-popup>
      </template>
    </div>
  </Cont>
</template>

<script>
import { payOrder, getTarot } from '@/fetch/api'
import Cont from './content'
export default {
  name: 'tlkt',
  data () {
    return {
      itemSecondStatus: false,
      from: this.$route.query.from || '',
      navIndex: 0,
      navList: ['详情', '目录', '咨询'],
      currentIndex: 0,
      totalData: {},
      playStatus: false,
      videoDom: '',
      payOrderId: '',
      orderStatus: false,
      unOrderStatus: false,
      payOrderData: Object
    }
  },
  components: {
    Cont
  },
  methods: {
    /**
     * 切换导航
     */
    changeNav (eq) {
      if (eq == 2) return this.workerFunc()
      return this.navIndex = eq
    },
    /**
     * 页面跳转
     */
    goTo (eq) {
      if (this.currentIndex == eq) return false
      this.playStatus = false
      this.playVideo(eq)
      return this.currentIndex = eq
    },
    /**
     * 立即咨询
     */
    workerFunc () {
      window.fortune.openactivity('com.fairytale.webpage.WebAcvitity','weburl_tag','http://newos.glassmarket.cn/webapps/jumper/index.php','extra_info_tag', `jumpertype=4&jumperact=5&expertuserid=${this.totalData.expertuserid}`, '0', '0')
    },
    /**
     * 获取数据
     */
    getData (id = '') {
      const self = this
      getTarot({
        itemid: self.$route.query.id,
        sonitemid: id,
        actiontype: 4,
        userid: self.$userId
      }).then(res => {
        self.totalData = res.infos
        window.document.title = document.title = self.$route.meta.title = self.totalData.allcourses[self.currentIndex].name
        self.$nextTick(() => {
          self.videoDom = self.$refs.video
          self.payOrderData = self.totalData.allcourses[0].pinfos
          self.videoDom.load()
          // 播放开始
          self.videoDom.addEventListener('play', function() {})
          // 播放结束
          self.videoDom.addEventListener('pause', function() {})
          // 监听播放结束
          self.videoDom.addEventListener('ended', function() {})
          // 实时监听播放
          self.videoDom.addEventListener('timeupdate', function() {
            self.totalData.allcourses.map((item, index) => {
              if (index == self.currentIndex && item.pinfos.isbuy == 0 && (self.videoDom.currentTime > item.pinfos.freeduration)) {
                // const ele = Document || Window.document
                self.videoDom.pause()
                self.unOrderStatus = true
                self.payOrderData = item.pinfos
                if (ele.exitFullscreen) {
                  ele.exitFullscreen()
                } else if (ele.mozCancelFullscreen) {
                  ele.mozCancelFullscreen()
                } else if (ele.webkitExitFullscreen) {
                  ele.webkitExitFullscreen()
                } else if (ele.webkitCancelFullscreen) {
                  ele.webkitCancelFullscreen()
                } else {
                  self.videoDom.IsFullscreen = false
                }
              } 
            })
          })
        })
      })
    },
    /**
     * 播放视频
     */
    playVideo (eq = 0) {
      this.currentIndex = eq
      this.playStatus = true
      this.$nextTick(() => {
        this.videoDom.play()
      })
    },
    /**
     * 暂停播放
     */
    pauseVideo (eq) {
      this.currentIndex = eq
      this.playStatus = false
      this.$nextTick(() => {
        this.videoDom.pause()
      })
    },
    /**
     * 前去支付
     */
    goPay () {
      this.unOrderStatus = false
      payOrder({
        expertuserid: this.payOrderData.expertuserid,
        userid: this.$userId,
        actiontype: 3,
        ordername: this.payOrderData.ordername,
        price: this.payOrderData.price,
        ordertype: this.payOrderData.ordertype,
        orderpid: this.payOrderData.orderpid
      }).then(res => {
        if (res.result == 0) {
          this.$Toast('你还未登录，请先登录')
        }
        if (res.result == 1) {
          this.orderStatus = true
          this.payOrderId = res.infos.orderid
          window.fortune.openactivity('com.fairytale.fortunetarot.controller.ExpertOrderDetailActivity', '0', '', `orderid#${res.infos.orderid}`)
        }
      })
    },
    /**
     * 未支付
     */
    unPayFunc () {
      [this.orderStatus, this.unOrderStatus] = [false, true]
    },
    /**
     * 检测是否支付
     */
    checkPay () {
      const self = this
      payOrder({
        actiontype: 15,
        orderid: self.payOrderId
      }).then(res => {
        self.orderStatus = false
        if (res.result == 1) {
          self.totalData.allcourses.map((item, index) => {
            item.pinfos.isbuy = 1
          })
          self.totalData = JSON.parse(JSON.stringify(self.totalData))
        } else {
          self.unOrderStatus = true
        }
      })
    },
    /**
     * 图片点击事件
     */
    infoFunc (data) {
      if (!data.extrainfo) return false
      window.fortune.openactivity('com.fairytale.webpage.WebAcvitity','weburl_tag','http://newos.glassmarket.cn/webapps/jumper/index.php','extra_info_tag', `${data.extrainfo}`, '1', '0')
    },
    /**
     * 返回
     */
    routeBack () {
      if (this.from == 'app') return this.$router.go(-1)
      return window.fortune.closepage()
    }
  },
  created () {
    this.getData('')
  },
  watch: {
    'currentIndex' () {
      window.document.title = document.title = this.$route.meta.title = this.totalData.allcourses[this.currentIndex].name
    }
  }
}
</script>
