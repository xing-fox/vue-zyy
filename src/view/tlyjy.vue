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
    font-size: 0.36rem;
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
        background-image: url("../assets/icon/experticon.png");
      }
    }
    span {
      flex: 1;
      display: flex;
      justify-content: center;
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
    height: calc(100vh - 2rem);
    padding: .4rem .4rem 0;
    box-sizing: border-box;
    overflow: auto;
    .item-1 {
      .van-collapse-item {
        background-color:#E5D8CF;
        border-radius:.06rem;
        overflow: hidden;
        margin-bottom: .2rem;
        .img {
          width: 1.1rem;
          height: 1.1rem;
          border-radius: .06rem;
          margin-right: .2rem;
          overflow: hidden;
          background-color: #f9ebe2;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .info {
          flex: 1;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
          line-height: .4rem;
          color: rgba(81, 51, 40, .65);
          font-size: .24rem;
          margin: 0 .1rem 0 0;
          h5 {
            font-size: .26rem;
            color: #513328;
          }
        }
        .arrow {
          display: block;
          width: .16rem;
          height: .09rem;
          margin: auto;
          background:url(../assets/images/icon-arrow.png) no-repeat;
          background-size: 100% 100%;
          transition: all .3s ease;
        }
      }
      .van-collapse-item__title--expanded {
        .arrow {
          transform: rotate(180deg);
        }
      }
      .collapse-title {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .list-box {
        .list-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-bottom: .2rem;
          // &:last-child {
          //   margin-bottom: 0;
          // }
          .img {
            width: .9rem;
            height: .9rem;
            margin-left: .4rem;
          }
          h5 {
            font-weight: normal;
          }
          .arrow {
            transform: rotate(270deg);
          }
        }
      }
    }
    .item-2 {
      background: #E5D8CF;
      border-radius: .06rem;
      height: 100%;
      padding: .3rem;
      box-sizing: border-box;
      overflow-y: auto;
      .list-item {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          padding: .2rem 0;
          border-bottom: #D1BDAF solid 1px;
          &:first-child {
            padding-top: 0;
          }
          // &:last-child {
          //   padding-bottom: 0;
          //   border-bottom: 0;
          // }
          .img {
            width: 1.8rem;
            height: 2rem;
            border-radius: .06rem;
            margin-right: .2rem;
            overflow: hidden;
            background-color: #aeaeae;
            display: flex;
            justify-content: center;
            img {
              height: 100%;
              display: block;
            }
          }
          .right {
            flex: 1;
            display: flex;
            flex-direction: column;
          }
          .info {
            flex: 1;
            line-height: .3rem;
            font-size: .22rem;
            color:rgba(81,51,40, .65);
            h5 {
              line-height: .4rem;
              font-size: .26rem;
              color: #513328;
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
<style lang="less">
  .van-cell,
  .van-collapse-item__content {
    background: initial;
  }
  .tlyjy .van-cell::after {
    transform: scaleY(.5);
    border-bottom-color: #c8b7ae;
  }
  .tlyjy .van-cell--clickable:active {
    background-color: rgba(0, 0, 0, 0);
  }
</style>

<template>
  <Cont>
    <div class="wrapper">
      <template>
        <div class="title">
          <i class="icon return" @click="routeBack"></i>
          <span>塔罗研究院</span>
          <i class="tips" @click="tipsStatus = true"></i>
        </div>
        <!-- <ul class="nav bor-b">
          <li v-for="(item, index) in navList" :key="index" :class="{'active': index == navIndex}" @click="changeNav(index)">{{ item.title }}</li>
        </ul> -->
        <div class="main tlyjy">
          <div class="item item-1" v-if="navIndex == 0">
            <van-pull-refresh v-model="itemSecondStatus" @refresh="itemSecondStatus = false">
              <van-collapse v-model="activeNames" accordion :border="false">
                <van-collapse-item v-for="(item, index) in totalData" :name="index" :key="item.id">
                  <div slot="title" class="collapse-title">
                    <div class="img">
                      <img v-if="item.pic" :src="item.pic">
                    </div>
                    <div class="info">
                      <h5>{{ item.name }}</h5>
                      <p>{{ item.content }}</p>
                    </div>
                  </div>
                  <div slot="right-icon" class="arrow"></div>
                  <div class="list-box">
                    <div class="list-item" v-for="(ite, ind) in item.sontypes" :key="'item' + index + ind" @click="routeChange(ite, item)">
                      <div class="img">
                        <img :src="ite.pic">
                      </div>
                      <div class="info">
                        <h5>{{ ite.name }}</h5>
                        <p>{{ ite.content }}</p>
                      </div>
                      <div class="arrow"></div>
                    </div>
                  </div>
                </van-collapse-item>
              </van-collapse>
            </van-pull-refresh>
          </div>
          <div class="item item-2" v-if="navIndex == 1">
            <div class="list-item" v-for="(item, eq) in navList[1].edus" :key="eq" @click="goTo(item.id)">
              <div class="img">
                <img :src="item.pic">
              </div>
              <div class="right">
                <div class="info">
                  <h5>{{ item.name }}</h5>
                  <p>{{ item.nametip }}</p>
                </div>
                <div class="bottom">
                  <div class="num">{{ item.views }}</div>
                  <div class="price">{{ item.lessonstip }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="item item-2" v-if="navIndex == 2">
            <div class="list-item" v-for="(item, eq) in navList[2].edus" :key="eq" @click="goTo(item.id)">
              <div class="img">
                <img :src="item.pic">
              </div>
              <div class="right">
                <div class="info">
                  <h5>{{ item.name }}</h5>
                  <p>{{ item.nametip }}</p>
                </div>
                <div class="bottom">
                  <div class="num">{{ item.views }}</div>
                  <div class="price">{{ item.lessonstip }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 塔罗牌提示 -->
        <van-popup v-model="tipsStatus" :style="{ 'border-radius': '4px' }">
          <div class="order-content">
            <div class="tips" style="align-items: flex-start !important; justify-content: flex-start !important">
              <!-- <p>{{ totalData.experttip }}</p> -->
              <p v-for="(item, index) in totalData.expertinfo" :key="index">{{ item }}</p>
            </div>
            <div class="button">
              <div class="color-2" @click="openWebUrl">{{ totalData.experttip }}</div>
            </div>
          </div>
        </van-popup>
        <!-- 塔罗牌提示1 -->
        <van-popup v-model="tipStatus" :style="{ 'border-radius': '4px' }">
          <div class="order-content">
            <div class="tips" style="align-items: flex-start !important; justify-content: flex-start !important">
              <p v-for="(item, index) in totalData.tarotunivinfoArr" :key="index">{{item}}</p>
            </div>
            <div class="button">
              <div class="color-2" @click="tipStatus = false">确定</div>
            </div>
          </div>
        </van-popup>
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
              <div class="color-2" @click="goPay">前去支付</div>
            </div>
          </div>
        </van-popup>
      </template>
      <router-view></router-view>
    </div>
  </Cont>
</template>

<script>
import Cont from './content'
import { payOrder, getTarot } from '@/fetch/api'
export default {
  name: 'tlyjy',
  data () {
    return {
      navIndex: 0,
      navList: [{
        title: '塔罗牌义'
      }],
      listData: [],
      payOrderId: '',
      activeNames: 0,
      totalData: [],
      pullStatus: false,
      tipStatus: false,
      tipsStatus: false,
      orderStatus: false,
      orderStatus: false,
      payOrderData: Object,
      unOrderStatus: false,
      unOrderStatus: false,
      itemSecondStatus: false
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
      this.navIndex = eq
    },
    /**
     * 页面跳转
     */
    goTo (id) {
      this.$router.push({
        path: '/tlyjy/tlkt',
        query: {
          id: id,
          from: 'app'
        }
      })
    },
    /**
     * 获取塔罗牌
     */
    getData () {
      getTarot({
        actiontype: 1,
        userid: this.$userId
      }).then(res => {
        this.navList = this.navList.concat(res.infos.alledus)
        res.infos.alltypes.experttip = res.infos.experttip
        res.infos.alltypes.expertinfo = res.infos.expertinfo.split('<br>')
        res.infos.alltypes.tarotunivinfoArr = res.infos.tarotunivinfo.split('<br>')
        this.totalData = res.infos.alltypes
      })
    },
    /**
     * 路由跳转
     */
    routeChange (item, data) {
      if (data.pinfos.isbuy == 0) {
        this.unOrderStatus = true
        this.payOrderData = data.pinfos
      } else {
        this.$router.push({
          path: '/tlyjy/pmlx',
          query: {
            id: item.id,
            from: 'app'
          }
        })
      }
    },
    /**
     * 返回
     */
    routeBack () {
      if (this.from == 'app') return this.$router.go(-1)
      return window.fortune.closepage()
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
      payOrder({
        actiontype: 15,
        orderid: this.payOrderId
      }).then(res => {
        this.orderStatus = false
        if (res.result == 1) {
          this.totalData.map(item => {
            if (item.pinfos.expertuserid == this.payOrderData.expertuserid) item.pinfos.isbuy = 1
          })
        } else {
          this.unOrderStatus = true
        }
      })
    },
    /**
     * 打开新页面
     */
    openWebUrl () {
      this.tipsStatus = false
      this.$router.push({
        path: '/worker',
        query: {
          leibie: 3,
          expertway: 5,
          from: 'app'
        }
      })
    }
  },
  mounted () {
    this.getData()
    if (!localStorage.getItem('tlpTips') && this.$route.path == '/tlyjy') {
      this.tipStatus = true
      localStorage.setItem('tlpTips', 1)
    }
  }
}
</script>
