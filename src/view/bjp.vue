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
        width: .36rem;
        height: .36rem;
        margin: .08rem 0 0 .08rem;
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
          background:rgba(229,216,207,1);
          border-radius: .06rem;
          li {
            border-bottom:#A28A78 solid 1px;
            font-size: .26rem;
            color: #A28A78;
            text-align: center;
            line-height: .66rem;
            &:last-child {
              border-bottom: 0;
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
      }
      .item-2 {
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        background: #E5D8CF;
        box-sizing:border-box;
        padding-bottom: .22rem;
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
          font-size: .3rem;
          line-height: .8rem;
          text-align: center;
          color: #805645;
          height: 1.08rem;
          background: url("../assets/images/bjp-btn-bg.png") center top no-repeat;
          background-size: 5.42rem 1.08rem;
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
  }
</style>

<template>
  <Cont>
    <div class="wrapper">
      <div class="title">
        <i class="icon return" @click="routeBack"></i>
        <span @click="comboBoxState = !comboBoxState">{{ selectList[selectIndex] }}<van-icon name="arrow-down" /></span>
        <i class="icon menu" @click="menuStatus = true"></i>
        <div v-show="comboBoxState" class="comboBox">
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
            <span>现代星盘</span>
            <span>Placidus</span>
          </div>
          <img :src="Data.xingpanpic">
        </div>
        <div class="item item-2" v-if="navIndex == 1">
          <img src="../assets/images/bjp-bg.png">
          <div class="desc">
            <p>合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字</p>
            <p>合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字</p>
          </div>
          <div class="btn">查看缘分报告</div>
        </div>
        <div class="item item-3" v-if="navIndex == 2">
        </div>
      </div>
      <div class="submit" @click="divineFunc">
        <span>咨询占星师</span>
      </div>
      <!-- 建档列表 -->
      <van-popup v-model="menuStatus" position="bottom">
        <div class="menu-content">
          <ul>
            <li v-for="item in hpData" :key="item.xpid" @click="choisehp(item.xpid)" :class="['bor-b', {'active': item.xpid == activehpId}]">
              <div class="name">{{ item.name01 }} ♡♡ {{ item.name02 }}</div>
              <i class="icon edit" @click.stop.prevent="listDetails(item.content)"></i>
              <i class="icon delete" @click.stop.prevent="deleteStatus = true; deleteXpId = item.xpid"></i>
            </li>
          </ul>
          <div class="create" @click="createFunc">新建档案</div>
        </div>
      </van-popup>
    </div>
  </Cont>
</template>

<script>
import Cont from './content'
import { getData_XP } from '@/fetch/api'
export default {
  name: 'bjp',
  data () {
    return {
      Data: Object,
      activehpId: '',
      hpData: [],
      navIndex: 0,
      navList: ['双人合盘', '缘分报告', '详细参数'],
      selectIndex: 0,
      menuStatus: false,
      comboBoxState: false,
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
        let data = res.infos
        if (this.navIndex == 0) this.Data = data.bjp
      })
    },
    /**
     * 选择合盘
     */
    choisehp () {},
    /**
     * 
     */
    createFunc () {},
    /**
     * 跳转占星师
     */
    divineFunc () {},
    /**
     * 返回
     */
    routeBack () {
      // window.fortune.closepage()
    },
    changeTitle (index) {
      this.selectIndex = index
      this.comboBoxState = false
    }
  }
}
</script>
