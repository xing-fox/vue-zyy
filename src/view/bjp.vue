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
      padding: .4rem .4rem 0;
      position: relative;
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
        &.menu {
          background-position: right center;
          background-image: url('../assets/icon/icon_menu.png');
        }
      }
      .van-icon-arrow-down {
        display: flex;
        align-items: center;
        justify-content: center;
        width: .3rem;
        height: .3rem;
        margin: .08rem 0 0 .08rem;
        &:before {
          font-size: .24rem;
        }
      }
      span {
        flex: 1;
        display: flex;
        justify-content: center;
      }
      .comboBox {
        position: absolute;
        left: 50%;
        top: 1.3rem;
        margin-left: -1.2rem;
        z-index: 1;
        .arrow {
          position: absolute;
          left: 50%;
          margin-left: -.1rem;
          top: -.16rem;
          border-left: .16rem solid transparent;
          border-right: .16rem solid transparent;
          border-bottom: .16rem solid rgba(229,216,207,1);
        }
        .list {
          width: 2.4rem;
          border-radius: .06rem;
          box-shadow: 0 0 3px #c4a791;
          background:rgba(229, 216, 207, 1);
          li {
            color: #A28A78;
            font-size: .26rem;
            line-height: .66rem;
            text-align: center;
            position: relative;
            &:after {
              content: '';
              width: 100%;
              height: 1px;
              position: absolute;
              left: 0;
              bottom: 0;
              transform-origin: 0 0;
              transform: scaleY(.5);
              background: #c4a791;
            }
            &:last-child:after {
              content: none;
            }
            &.active {
              color: #B73724;
            }
          }
        }
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
      height: calc(100vh - 3.8rem);
      margin: .3rem .4rem 0;
      border-radius: .1rem;
      box-sizing: border-box;
      overflow: auto;
      .item-1 {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100%;
        border-radius: .1rem;
        background: #e5d8cf;
        position: relative;
        .item-1-title {
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: #48291E;
          font-size: .26rem;
          text-align: center;
          position: absolute;
          top: .7rem;
          span {
            margin: 0 0 .2rem;
            &:first-child {
              font-weight: bold;
            }
          }
        }
        img {
          width: 90%;
          border-radius: 50%;
        }
        .pos {
          display: flex;
          align-items: center;
          color: #B73724;
          font-size: .22rem;
          font-weight: bold;
          position: absolute;
          bottom: .5rem;
          &.canshu {
            left: .35rem;
          }
          img {
            width: .35rem;
            height: .35rem;
            margin: 0 .1rem 0 0;
            border-radius: initial;
          }
        }
      }
      .item-2 {
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        background: #E5D8CF;
        box-sizing:border-box;
        padding-bottom: .4rem;
        height: 100%;
        img {
          width: 100%;
          display: block;
        }
        .desc {
          padding: 0 .3rem;
        }
        p {
          font-size: .22rem;
          line-height: .48rem;
          color:#513328;
        }
        .btn {
          color: #805645;
          font-size: .28rem;
          font-weight: bold;
          height: .8rem;
          line-height: .8rem;
          text-align: center;
          background: url("../assets/images/bjp-btn-bg.png") center top no-repeat;
          background-size: 5.2rem .8rem;
        }
      }
      .item-4 {
        .list {
          margin: 0 0 .2rem 0;
          padding: .3rem .2rem .1rem;
          border-radius: .1rem;
          background: #e5d8cf;
          .list-title {
            color: #b73724;
            font-size: .24rem;
            font-weight: bold;
          }
          .intro-1 {
            height: 1rem;
            display: flex;
            align-items: center;
            position: relative;
            &:after {
              border-bottom: 1px solid #d8b293; 
            }
            &:last-child:after,
            &:nth-last-child(2):after {
              content: none;
            }
            .icon {
              display: flex;
              align-items: center;
              justify-content: center;
              color: #fff;
              font-size: .3rem;
              font-family: fontXp;
              width: .64rem;
              height: .64rem;
              border-radius: .32rem;
              background: #ac927f;
            }
            .info {
              flex: 1;
              margin: 0 0 0 .2rem;
              .name {
                color: #513328;
                font-size: .22rem;
                font-weight: 500;
                margin: 0 0 .1rem 0;
              }
              .info-cont {
                color: rgba(81, 51, 40, .65);
                font-size: .2rem;
                font-weight: bold;
              }
            }
            .time {
              color: #513328;
              font-size: .28rem;
            }
          }
          .intro-2 {
            width: 100%;
            padding: .2rem;
            margin: .1rem 0 .2rem;
            border-radius: .1rem;
            box-sizing: border-box;
            background: #d6c5b9;
            .intro-2-list {
              display: flex;
              align-items: center;
              height: .8rem;
              position: relative;
              &:after {
                border-bottom: 1px solid #c9b4a6;
              }
              &:last-child:after {
                content: none;
              }
              .list-info {
                display: flex;
                align-items: center;
                color: #513328;
                font-size: .22rem;
                font-weight: bold;
                margin: 0 .4rem 0 0;
                span {
                  flex: 1;
                }
                .info-num {
                  color: #fff;
                  font-size: .24rem;
                  width: .4rem;
                  height: .4rem;
                  line-height: .42rem;
                  margin: 0 0 0 .1rem;
                  border-radius: 50%;
                  text-align: center;
                  box-sizing: border-box;
                  background: #ac927f;
                  &.color-1 {
                    background: #fe5756;
                  }
                  &.color-2 {
                    background: #f1a81b;
                  }
                  &.color-3 {
                    background: #47ba55;
                  }
                  &.color-4 {
                    background: #2194ca;
                  }
                }
              }
            }
          }
        }
      }
    }
    .menu-content {
      padding: .3rem 0;
      ul>li {
        color: #7f665c;
        font-size: .22rem;
        display: flex;
        align-items: center;
        height: .9rem;
        padding: 0 .25rem;
        position: relative;
        &.active {
          background: #d9cdc5;
        }
        &:after {
          border-bottom: 1px solid #d8b293; 
        }
        .name {
          flex: 1;
        }
        .icon {
          width: .4rem;
          height: .4rem;
          background-size: 100% 100%;
          background-repeat: no-repeat;
          &.edit {
            margin: 0 .1rem 0 0;
            background-position: left center;
            background-image: url('../assets/images/edit.png');
          }
          &.delete {
            background-position: right center;
            background-image: url('../assets/images/delete.png');
          }
        }
      }
      .create {
        color: #e5d8cf;
        font-size: .26rem;
        display: flex;
        align-items: center;
        justify-content: center;
        height: .8rem;
        margin: .2rem .25rem 0;
        background: #b5341f;
        border-radius: 4px;
      }
    }
    .data-content {
      width: 6.5rem;
      padding: .3rem .25rem;
      box-sizing: border-box;
      ul>li {
        display: flex;
        align-items: center;
        color: #513328;
        font-size: .22rem;
        width: 100%;
        height: .7rem;
        position: relative;
        &:after {
          border-bottom: 1px solid #d8b293;
        }
      }
      .sure {
        color: #e5d8cf;
        font-size: .26rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90%;
        height: .8rem;
        margin: .2rem auto 0;
        background: #b5341f;
        border-radius: 4px;
      }
    }
    .delete-content {
      width: 5.3rem;
      padding: .2rem .5rem .45rem;
      box-sizing: border-box;
      .tips {
        color: #513328;
        font-size: .24rem;
        display: flex;
        justify-content: center;
        width: 100%;
        margin: .5rem 0;
      }
      .button {
        display: flex;
        justify-content: space-between;
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
    .order-content {
      width: 6rem;
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
          text-align: center;
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
      <div class="title">
        <i class="icon return" @click="routeBack"></i>
        <span @click="comboBoxState = !comboBoxState">{{ selectList[selectIndex] }}<van-icon name="arrow-down" /></span>
        <i class="icon menu" @click="menuStatus = true"></i>
        <div v-show="comboBoxState" class="comboBox animate__animated fadeInUp">
          <div class="arrow"></div>
          <ul class="list">
            <li v-for="(item, index) in selectList" :key="index" :class="{'active': index == selectIndex}" @click="changeTitle(index)">{{ item }}</li>
          </ul>
        </div>
      </div>
      <ul class="nav bor-b">
        <li v-for="(item, index) in navList" :key="index" :class="{'active': index == navIndex}" @click="navIndex = index">{{ item }}</li>
      </ul>
      <div class="main">
        <div class="item item-1" v-if="navIndex == 0">
          <div class="item-1-title">
            <span>双人合盘</span>
            <span>Placidus</span>
          </div>
          <img :src="Data.xingpanpic">
          <div class="canshu pos" @click="navIndex = 2">
            <img src="../assets/icon/canshu.png" alt="">
            <span>参数</span>  
          </div>
        </div>
        <div class="item item-2" v-if="navIndex == 1">
          <img src="../assets/images/bjp-bg.png">
          <div class="desc">
            <p v-html="reportData.adinfotip"></p>
          </div>
          <div class="btn" @click="reportFunc">查看缘分报告</div>
        </div>
        <div class="item item-4" v-if="navIndex == 2">
          <van-pull-refresh v-model="itemSecondStatus" @refresh="itemSecondStatus = false">
            <div class="list">
              <div class="list-title">行星信息</div>
              <div class="intro-1 bor-b" v-for="(item, index) in Data.baseinfos" :key="index" v-show="(item.lati !== ' ') && item.weidu[0] != 0">
                <div class="icon" :style="{'background': item.spec_1.color}">{{ item.spec_1.flag }}</div>
                <div class="info">
                  <div class="name">{{ item.spec_1.value }}</div>
                  <div class="info-cont">{{ item.spec.value }}{{ item.house }}宫</div>
                </div>
                <div class="time">{{ `${item.weidu[0]}°${item.weidu[2]}′` }}</div>
              </div>
              <div class="intro-2">
                <div class="intro-2-list bor-b">
                  <div class="list-info">
                    <span>火</span>
                    <div class="info-num color-1">{{ Data.others.fir }}</div>
                  </div>
                  <div class="list-info">
                    <span>土</span>
                    <div class="info-num color-2">{{ Data.others.ear }}</div>
                  </div>
                  <div class="list-info">
                    <span>风</span>
                    <div class="info-num color-3">{{ Data.others.air }}</div>
                  </div>
                  <div class="list-info">
                    <span>水</span>
                    <div class="info-num color-4">{{ Data.others.wat }}</div>
                  </div>
                </div>
              </div>
              <div class="intro-2">
                <div class="intro-2-list bor-b">
                  <div class="list-info">
                    <span>基本</span>
                    <div class="info-num">{{ Data.others.d }}</div>
                  </div>
                  <div class="list-info">
                    <span>固定</span>
                    <div class="info-num">{{ Data.others.fix }}</div>
                  </div>
                  <div class="list-info">
                    <span>变动</span>
                    <div class="info-num">{{ Data.others.mut }}</div>
                  </div>
                </div>
              </div>
              <div class="intro-2">
                <div class="intro-2-list bor-b">
                  <div class="list-info">
                    <span>东半球</span>
                    <div class="info-num">{{ Data.others.m }}</div>
                  </div>
                  <div class="list-info">
                    <span>西半球</span>
                    <div class="info-num">{{ Data.others.n }}</div>
                  </div>
                </div>
              </div>
              <div class="intro-2">
                <div class="intro-2-list bor-b">
                  <div class="list-info">
                    <span>南半球</span>
                    <div class="info-num">{{ Data.others.a }}</div>
                  </div>
                  <div class="list-info">
                    <span>北半球</span>
                    <div class="info-num">{{ Data.others.car }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="list">
              <div class="list-title">相位信息</div>
              <div class="intro-1 bor-b" v-for="(item, index) in Data.xiangweis" :key="index">
                <div class="icon" :style="{'background': item.color}">{{ item.flag }}</div>
                <div class="info">
                  <div class="name">{{ item.xingxing01_name }}</div>
                  <div class="info-cont">{{ item.xingxing02_name }}</div>
                </div>
                <div class="time">{{ item.xiangwei_name }}</div>
              </div>
            </div>
            <div class="list">
              <div class="list-title">宫位信息</div>
              <div class="intro-1 bor-b" v-for="(item, index) in Data.gongweis" :key="index">
                <div class="icon" :style="{'background': item.color}">{{ item.flag }}</div>
                <div class="info">
                  <div class="name">{{ item.gongtou }}宫</div>
                  <div class="info-cont">{{ item.name }}</div>
                </div>
                <div class="time">{{ `${item.gongweiList[0]}°${item.gongweiList[2]}′` }}</div>
              </div>
            </div>
          </van-pull-refresh>
        </div>
      </div>
      <div class="submit" @click="divineFunc">
        <span>咨询占星师</span>
      </div>
      <!-- 建档列表 -->
      <van-popup v-model="menuStatus" position="bottom">
        <div class="menu-content">
          <ul>
            <li v-for="item in hpData" :key="item.id" @click="choisehp(item.id)" :class="['bor-b', {'active': item.id == activehpId}]">
              <div class="name">{{ item.name01 }} IN {{ item.name02 }}</div>
              <i class="icon edit" @click.stop.prevent="listDetails(item)"></i>
              <i class="icon delete" @click.stop.prevent="deleteStatus = true; deleteHpId = item.id"></i>
            </li>
          </ul>
          <div class="create" @click="createFunc">新建合盘</div>
        </div>
      </van-popup>
      <!-- 合盘信息 -->
      <van-popup v-model="dataStatus" :style="{ 'border-radius': '4px' }">
        <div class="data-content">
          <ul>
            <li class="bor-b" v-for="(item, index) in listDetailData" :key="index">
              <div>{{ item }}</div>
            </li>
          </ul>
          <ul>
            <li class="bor-b" v-for="(item, index) in listDetailData1" :key="index">
              <div>{{ item }}</div>
            </li>
          </ul>
          <div class="sure" @click="dataStatus = false">确定</div>
        </div>
      </van-popup>
      <!-- 删除合盘 -->
      <van-popup v-model="deleteStatus" :style="{ 'border-radius': '4px' }">
        <div class="delete-content">
          <div class="tips">是否确认删除此合盘?</div>
          <div class="button">
            <div class="color-1" @click="deleteStatus = false">取消</div>
            <div class="color-2" @click="deleteData">确认</div>
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
          <div class="tips" v-if="totalData.pinfos">
            <p v-for="(item, index) in totalData.pinfos.tipinfo" :key="index">{{ item }}</p>
          </div>
          <div class="button">
            <div class="color-1" @click="unOrderStatus = false">我再想想</div>
            <div class="color-2" @click="goPay">前去支付</div>
          </div>
        </div>
      </van-popup>
      <router-view />
    </div>
  </Cont>
</template>

<script>
import {
  BaseInfoData,
  BaseInfoData_1,
  BaseInfoData_2,
  BaseInfoData_3
} from '@/assets/json/xp'
import Cont from './content'
import { payOrder, getData_XP } from '@/fetch/api'
import { resolve } from 'url';
export default {
  name: 'bjp',
  data () {
    return {
      Data: Object, // 当年合盘数据
      reportData: Object, // 报告数据
      totalData: Object, // 总数据
      activehpId: '',
      hpData: [],
      navIndex: 0,
      navList: ['双人合盘', '缘分报告', '详细参数'],
      selectIndex: 0,
      menuStatus: false,
      listDetailData: [], // 当前星盘个人信息
      listDetailData1: [], // 当前星盘个人信息1
      dataStatus: false,
      deleteHpId: '',
      deleteStatus: false,
      comboBoxState: false,
      itemSecondStatus: false,
      orderStatus: false,
      unOrderStatus: false,
      selectList: ['比较盘', '配对盘', '组合中点盘', '时空中点盘']
    }
  },
  components: {
    Cont
  },
  mounted () {
    this.getHpList()
    this.getMainHp()
  },
  methods: {
    /**
     * 获取用户合盘记录
     */
    getHpList () {
      getData_XP({
        actiontype: 10,
        userid: this.$userId
      }).then(res => {
        if (res.result == 1) this.hpData = res.infos
      })
    },
    /**
     * 获取当前主合盘记录
     */
    getMainHp () {
      getData_XP({
        actiontype: 12,
        userid: this.$userId
      }).then(res => {
        if (res.result == 1) {
          let data = res.infos
          this.activehpId = data.hpid
          this.totalData = JSON.parse(JSON.stringify(res.infos))
          if (this.totalData.pinfos.isbuy == 0) this.totalData.pinfos.tipinfo = this.totalData.pinfos.tipinfo.split('<br>')
          this.reportData = data.pinfos
          if (this.navIndex == 0) {
            this.Data = this.resetData(data.bjp)
          }
        } else {
          this.$router.push({
            path: '/yfhp',
            query: {
              from: this.$route.query.from == 'app' ? 'app' : null,
              type: 0
            }
          })
        }
      })
    },
    /**
     * 更新数据
     */
    resetData (data) {
      /**
       * 基本数据
       */
      data.baseinfos.map(item => {
        item.weidu = item.zodic.split('-')
        item.zodic = item.zodic.split('-')[1]
        for (let list of BaseInfoData) {
          if (item.zodic === list.name) item.spec = list
        }
        for (let list of BaseInfoData_1) {
          if (item.name === list.name) item.spec_1 = list
        }
      })
      /**
       * 相位信息
       */
      data.xiangweis.map(item => {
        for (let list of BaseInfoData_1) {
          if (item.xingxing01 === list.name) {
            item.flag = list.flag
            item.color = list.color
            item.xingxing01_name = list.value
          }
          if (item.xingxing02 === list.name) item.xingxing02_name = list.value
        }
        for (let list of BaseInfoData_2) {
          if (item.xiangwei === list.name) item.xiangwei_name = list.value
        }
      })
      /**
       * 宫位信息
       */
      data.gongweis.map(item => {
        item.gongweiList = item.gongwei.split('-')
        for (let data of BaseInfoData) {
          if (item.gongweiList[1] === data.name) {
            item.flag = data.flag
            item.name = data.value
            item.color = data.color
          }
        }
      })
      return data
    },
    /**
     * 删除合盘信息
     */
    deleteData () {
      getData_XP({
        actiontype: 13,
        userid: this.$userId,
        hepanid: this.deleteHpId
      }).then(res => {
        this.$Toast('删除成功！')
        this.deleteStatus = false
        this.hpData = this.hpData.filter(item => item.id !== this.deleteHpId)
        if (this.hpData.length) {
          this.choisehp(this.hpData[0].id)
        } else {
          this.$Toast('暂无合盘信息，请先创建合盘')
          setTimeout(() => {
            this.$router.push({
              path: '/yfhp',
              query: {
                from: this.$route.query.from == 'app' ? 'app' : null,
                type: 0
              }
            })
          }, 1000)
        }
      })
    },
    /**
     * 选择合盘
     */
    choisehp (id) {
      this.activehpId = id
      getData_XP({
        actiontype: 11,
        userid: this.$userId,
        hepanid: id
      }).then(res => {
        this.navIndex = 0
        this.selectIndex = 0
        this.menuStatus = false
        let data = res.infos
        this.totalData = JSON.parse(JSON.stringify(res.infos))
        if (this.totalData.pinfos.isbuy == 0) this.totalData.pinfos.tipinfo = this.totalData.pinfos.tipinfo.split('<br>')
        this.reportData = data.pinfos
        if (this.navIndex == 0) {
          this.Data = this.resetData(data.bjp)
        }
      })
    },
    /**
     * 合盘记录详情
     */
    listDetails (data) {
      this.dataStatus = true
      this.listDetailData = data.content01.split('<br>')
      this.listDetailData1 = data.content02.split('<br>')
    },
    /**
     * 新建档案
     */
    createFunc () {
      if (this.hpData.length === 5) return this.$Toast('最多创建5个合盘，请删除后再次创建')
      this.$router.push({
        path: '/yfhp',
        query: {
          from: this.$route.query.from == 'app' ? 'app' : null,
          type: 1
        }
      })
    },
    /**
     * 跳转占星师
     */
    divineFunc () {
      if (this.$SH == 1) return window.fortune.openactivity('startprivatechat', '0', '1', 'userid#1451758@username#塔罗师岱诗')
      this.$router.push({
        path: '/worker',
        query: {
          from: 'app'
        }
      })
    },
    /**
     * 返回
     */
    routeBack () {
      this.$router.go(-1)
    },
    /**
     * 查看报告
     */
    reportFunc () {
      if (this.totalData.pinfos.isbuy == 0) {
        this.unOrderStatus = true
      } else {
        this.$router.push({
          path: 'bjp/reportBjp',
          name: 'bjpDetails',
          params: {
            data: this.totalData.hpbg
          }
        })
      }
    },
    /**
     * 切换盘
     */
    changeTitle (eq) {
      this.selectIndex = eq
      this.comboBoxState = false
      if (eq == 0) this.Data = this.resetData(JSON.parse(JSON.stringify(this.totalData)).bjp)
      if (eq == 1) this.Data = this.resetData(JSON.parse(JSON.stringify(this.totalData)).pdp)
      if (eq == 2) this.Data = this.resetData(JSON.parse(JSON.stringify(this.totalData)).zhzd)
      if (eq == 3) this.Data = this.resetData(JSON.parse(JSON.stringify(this.totalData)).skzd)
    },
    /**
     * 前去支付
     */
    goPay () {
      this.unOrderStatus = false
      payOrder({
        expertuserid: this.totalData.pinfos.expertuserid,
        userid: this.$userId,
        actiontype: 3,
        ordername: this.totalData.pinfos.ordername,
        price: this.totalData.pinfos.price,
        ordertype: this.totalData.pinfos.ordertype,
        orderpid: this.totalData.pinfos.orderpid
      }).then(res => {
        if (res.result == 0) {
          this.$Toast('你还未登录，请先登录')
        }
        if (res.result == 1) {
          this.payOrderId = res.infos.orderid
          this.orderStatus = true
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
          this.totalData.pinfos.isbuy = 1
        } else {
          this.unOrderStatus = true
        }
      })
    }
  }
}
</script>
