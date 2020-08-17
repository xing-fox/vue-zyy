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
    padding: 0.4rem 0 0;
    position: relative;
    i {
      display: inline-block;
      width: 0.8rem;
      height: 0.8rem;
      background-size: 50% 50%;
      background-repeat: no-repeat;
      position: absolute;
      top: 0.4rem;
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
    height: calc(100vh - 3rem);
    margin: 0.4rem 0.4rem 0;
    box-sizing: border-box;
    overflow: auto;
    .item-1 {
      width: 100%;
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      background:rgba(229,216,207,1);
      border-radius: .06rem;
      padding: .4rem .2rem;
      box-sizing: border-box;
      .content-img {
        width: 5.18rem;
        height: 4.4rem;
        margin: 0 auto .3rem;
        img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
      .desc {
        font-size: .24rem;
        line-height: .48rem;
        color:#513328;
        margin-bottom: .3rem;
      }
      .list-box {
        .list-title {
          color: #B73724;
          font-size: .28rem;
          line-height: .3rem;
          padding-bottom: .08rem;
          font-weight: 600;
        }
        .list-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: .2rem 0;
          border-bottom: #D1BDAF solid 1px;
          &:last-child {
            border-bottom: 0;
          }
          .img {
            width: 1.1rem;
            height: 2rem;
            border-radius: .06rem;
            margin-right: .2rem;
            overflow: hidden;
            background-color: #aeaeae;
            img {
              width: 100%;
              height: 100%;
              display: block;
            }
          }
          .info {
            flex: 1;
            overflow: hidden;
            line-height: .4rem;
            font-size: .24rem;
            color:rgba(81,51,40, .65);
            h5 {
              font-size: .26rem;
              color: #513328;
            }
          }
          .arrow {
            display: block;
            width: .16rem;
            height: .09rem;
            margin-left: .2rem;
            background:url(../assets/images/icon-arrow.png) no-repeat;
            background-size: 100% 100%;
            transform: rotate(270deg);
          }
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
        <span>牌面类型</span>
      </div>
      <ul class="nav bor-b">
        <li v-for="(item, index) in navList" :key="index" :class="{'active': index == navIndex}" @click="navIndex = index">{{ item }}</li>
      </ul>
      <div class="main">
        <div class="item item-1" v-if="navIndex == 0">
          <div class="content-img"><img src="../assets/images/pmlx-img.jpg"/></div>
          <div class="desc">子分类的介绍文字文字这是子分类的介绍文字文字子分类的介绍文字文字这是子分类的介绍文字文字子分类的介绍文字文字这是子分类的介绍文字文字子分类的介绍文字文字这是子分类的介绍文字文字子分类的介绍文字文字这是子分类的介绍文字文字子分类的介绍文字文</div>
          <div class="list-box">
            <div class="list-title">大阿卡纳相关牌</div>
            <div class="list-item" v-for="(item, index) in listData" :key="index">
              <div class="img"></div>
              <div class="info">
                <h5>{{ item.name }}</h5>
                <p>{{ item.desc }}</p>
              </div>
              <div class="arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Cont>
</template>
<script>
import Cont from './content'
export default {
  name: 'pmlx',
  data () {
    return {
      navIndex: 0,
      navList: ['大阿卡纳', '小阿卡纳', '宫廷牌'],
      listData: [
        {
          img: '',
          name: '愚人 The Fool',
          desc: '冒险的行动，追求可能性，重视梦想，无视物质的损失，离开家园，过于信赖。'
        }, {
          img: '',
          name: '愚人 The Fool',
          desc: '冒险的行动，追求可能性，重视梦想，无视物质的损失，离开家园，过于信赖。'
        }
      ]
    }
  },
  components: {
    Cont
  },
  methods: {
    /**
     * 返回
     */
    routeBack () {
      if (this.from == 'app') return this.$router.go(-1)
      return window.fortune.closepage()
    }
  }
}
</script>
