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
  .main {
    height: calc(100vh - 1.8rem);
    padding: .4rem .4rem 0;
    box-sizing: border-box;
    overflow: auto;
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
        &:last-child {
          margin-bottom: 0;
        }
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
        <div class="main tlyjy">
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
      payOrderId: '',
      orderStatus: false,
      payOrderData: Object,
      unOrderStatus: false,
      activeNames: 0,
      totalData: [],
      tipStatus: false,
      tipsStatus: false,
      orderStatus: false,
      unOrderStatus: false
    }
  },
  components: {
    Cont
  },
  methods: {
    /**
     * 提示
     */
    tipFunc () {

    },
    /**
     * 获取塔罗牌
     */
    getData () {
      getTarot({
        actiontype: 1,
        userid: this.$userId
      }).then(res => {
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
    goPay (item) {
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
    if (!localStorage.getItem('tlpTips')) {
      this.tipStatus = true
      localStorage.setItem('tlpTips', 1)
    }
  }
}
</script>
