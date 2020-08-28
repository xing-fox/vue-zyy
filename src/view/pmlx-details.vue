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
    padding: 0.6rem 0 0;
    position: relative;
    i {
      display: inline-block;
      width: 0.8rem;
      height: 0.8rem;
      background-size: 50% 50%;
      background-repeat: no-repeat;
      position: absolute;
      top: 0.6rem;
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
  .detail {
    transition: transform 1s;
    transform-style: preserve-3d;
    transform: rotateY(0deg);
    width: 100vw;
    position: relative;
    &.active {
      transform: rotateY(180deg);
    }
  }
  .d-content-front,
  .d-content-end {
    backface-visibility: hidden;
    position: absolute;
    left: 0;
    right: 0;
  }
  .d-content-front {
    margin: .2rem .4rem 0;
    padding: .4rem 0 .8rem;
    height: calc(100vh - 2.2rem);
    overflow: auto;
    border-radius: 0.06rem;
    box-sizing: border-box;
    background: rgba(229, 215, 207, 1);
    .d-content-main {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
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
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .c-main {
        color: #513327;
        font-size: .24rem;
        width: 6rem;
        text-indent: 2em;
        line-height: .48rem;
      }
    }
  }
  .d-content-end {
    margin: .2rem .4rem 0;
    height: calc(100vh - 2.2rem);
    overflow: auto;
    transform: rotateY(180deg);
    box-sizing: border-box;
    .van-collapse-item {
      background-color:#E5D8CF;
      border-radius:.06rem;
      overflow: hidden;
      margin-bottom: .2rem;
      &:last-child {
        margin-bottom: 0;
      }
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
  .menu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 1rem 0 0 0;
    position: fixed;
    right: .5rem;
    bottom: .8rem;
    .list {
      width: .6rem;
      height: .6rem;
      margin: 0 .075rem;
      background-size: 100% 100%;
      &.menu-show {
        background-image: url('../assets/icon/tlp_menu_1.png');
      }
      &.menu-close {
        background-image: url('../assets/icon/tlp_menu.png');
      }
      &.menu-add {
        background-image: url('../assets/icon/tlp_add.png');
      }
    }
  }
  .img-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 80vw;
    margin: auto;
    .close {
      width: .6rem;
      height: .6rem;
      margin: 0 0 .5rem 0;
      background-image: url('../assets/icon/close_tlp.png');
      background-size: 100% 100%;
    }
    .img {
      width: 100%;
      padding: .4rem;
      border-radius: .05rem;
      box-sizing: border-box;
      background-image: url('../assets/images/bg_tlp.jpg');
      background-size: 100% 100%;
      img {
        width: 100%;
        height: 100%;
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
  .van-collapse-item__title--expanded::after {
    transform: scaleY(.5);
    border-bottom-color: #c8b7ae;
  }
</style>

<template>
  <Cont>
    <div class="wrapper-pmlx-details">
      <div class="title">
        <i class="icon return" @click="routeBack"></i>
        <span>{{ titleName }}</span>
      </div>
      <div class="detail" :class="['detail', {'active': statusChange}]">
        <div class="d-content-front" v-if="!statusChange">
          <div class="d-content-main" v-for="(item, index) in totalData.allcontents" :key="index">
            <div class="c-title" v-if="item.title">{{ item.title }}</div>
            <div class="c-image" v-if="item.pic">
              <img :src="item.pic">
            </div>
            <div class="c-main" v-if="item.content">{{ item.content }}</div>
          </div>
        </div>
        <div class="d-content-end" v-else>
          <van-collapse v-model="dataIndex" :border="false">
            <van-collapse-item v-for="(item, index) in Data" :name="index" :key="index">
              <div slot="title" class="collapse-title">
                <div class="img">
                  <img :src="item.pic">
                </div>
                <div class="info">
                  <h5>{{ item.name }}</h5>
                  <!-- <p>{{ item.sontype.content }}</p> -->
                </div>
              </div>
              <div slot="right-icon" class="arrow"></div>
              <div class="list-box">
                <div class="list-item" v-for="(ite, ind) in item.sontypes" :key="'item' + index + ind" @click="routeChange(ite, ind, item)">
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
      </div>
      <div class="menu">
        <div v-if="!statusChange" class="list menu-show" @click="typeFunc(true)"></div>
        <div v-else class="list menu-close" @click="typeFunc(false)"></div>
        <div class="list menu-add" @click="showImgStatus = true"></div>
      </div>
      <!-- 查看大图 -->
      <van-popup v-model="showImgStatus" style="background: rgba(0,0,0,0)">
        <div v-if="showImgStatus" class="img-content animate__animated animate__fadeInDown">
          <div class="close" @click="showImgStatus = false"></div>
          <div class="img">
            <img :src="bigImg">
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
    </div>
  </Cont>
</template>

<script>
import Cont from "./content"
import { getTarot } from '@/fetch/api'
export default {
  name: 'pmlxDetails',
  data () {
    return {
      payOrderId: '',
      orderStatus: false,
      payOrderData: Object,
      unOrderStatus: false,
      bigImg: '',
      Data: [],
      titleName: '',
      totalData: [],
      dataIndex: [],
      statusChange: false,
      showImgStatus: false
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
      getTarot({
        actiontype: 3,
        userid: this.$userId,
        itemid: this.$route.query.id
      }).then(res => {
        this.totalData = res.infos.cardinfo
        this.Data = res.infos.cardinfo.sontypes
        this.Data.map((item, index) => {
          this.dataIndex.push(index)
        })
        this.bigImg = res.infos.cardinfo.pic
        this.titleName = res.infos.cardinfo.name
      })
    },
    /**
     * 路由跳转
     */
    routeChange (item, eq, data) {
      if (data.pinfos.isbuy == 0) {
        this.unOrderStatus = true
        this.payOrderData = data.pinfos
      } else {
        window.fortune.openactivity('com.fairytale.webpage.WebAcvitity',
          'weburl_tag', 'http://newos.glassmarket.cn/webpage_jumper.php',
          'extra_info_tag',
          `type=43&actiontype=-18&yjyindex='${eq}'&yjyid='${item.id}`, '0', '0')
      }
    },
    /**
     * 展开分类
     */
    typeFunc (status) {
      this.titleName = status ? `${this.totalData.name}所属分类` : this.totalData.name
      this.statusChange = status
    },
    /**
     * 返回
     */
    routeBack () {
      return this.$router.go(-1)
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
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
