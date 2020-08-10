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
  }
</style>

<template>
  <Cont>
    <div class="wrapper">
      <div class="title">
        <i class="icon return" @click="routeBack"></i>
        <span @click="comboBoxState = !comboBoxState">{{ selectList[selectIndex] }}<van-icon name="arrow-down" /></span>
        <i class="icon menu"></i>
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
        </div>
        <div class="item item-2" v-if="navIndex == 1">
          <img src="../assets/images/bjp-bg.png">
          <div class="desc">
            <p>合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字</p>
            <p>合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字合盘介绍文字</p>
          </div>
          <div class="btn">查看缘分报告</div>
        </div>
        <div class="item item-3" v-if="navIndex == 0">
        </div>
      </div>
      <div class="submit" @click="divineFunc">
        <span>咨询占星师</span>
      </div>
    </div>
  </Cont>
</template>

<script>
import Cont from './content'
export default {
  name: 'bjp',
  data () {
    return {
      navIndex: 0,
      navList: ['双人合盘', '缘分报告', '详细参数'],
      selectIndex: 0,
      comboBoxState: false,
      selectList: ['比较盘', '配对盘', '组合中点盘', '时空中点盘']
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
    divineFunc () {},
    /**
     * 返回
     */
    routeBack () {
      window.fortune.closepage()
    },
    changeTitle (index) {
      this.selectIndex = index
      this.comboBoxState = false
    }
  }
}
</script>
