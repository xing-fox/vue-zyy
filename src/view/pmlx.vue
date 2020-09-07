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
  .nav {
    height: .98rem;
    margin: 0 .4rem;
    overflow-x: hidden;
    .nav-swipe {
      color: #a28a78;
      font-size: .26rem;
      width: 100%;
      height: .9rem;
      position: relative;
      /deep/ .van-swipe__track {
        margin: 0 auto;
      }
      &:after {
        border-bottom: 1px solid #765d49; 
      }
      .list {
        padding: 0 .1rem;
        height: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
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
      &.van-swipe {
        overflow: initial;
      }
    }
  }
  .main {
    height: calc(100vh - 3.2rem);
    margin: 0.4rem 0.4rem 0;
    box-sizing: border-box;
    overflow: auto;
    .item-1 {
      width: 100%;
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      background:rgba(229, 216, 207, 1);
      border-radius: .06rem;
      padding: .4rem .2rem;
      box-sizing: border-box;
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
          width: 4rem;
          margin: .4rem 0;
          border-radius: .06rem;
          background: #eee;
          img {
            width: 100%;
          }
        }
        .c-main {
          color: #513327;
          font-size: .26rem;
          width: 6rem;
          text-indent: 2em;
          line-height: .48rem;
        }
      }
      .desc {
        color:#513328;
        font-size: .24rem;
        line-height: .48rem;
        text-indent: 2em;
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
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
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
      <template>
        <div class="title">
          <i class="icon return" @click="routeBack"></i>
          <span>{{ titleName }}</span>
        </div>
        <div class="nav" v-if="totalData.allsontypes">
          <van-swipe :initial-swipe="swipeIndex" class="nav-swipe" :loop="false" :show-indicators="false" width="80">
            <van-swipe-item class="list" v-for="(item, index) in totalData.allsontypes" :key="index" :class="{'active': index == navIndex}" @click="tabChange(item, index)">
              {{ item.name }}
            </van-swipe-item>
          </van-swipe>
        </div>
        <div class="main">
          <div class="item item-1" ref="scroll">
            <van-pull-refresh v-model="itemSecondStatus" @refresh="itemSecondStatus = false">
              <template  v-if="totalData.sontype">
                <div class="d-content-main" v-for="(item, index) in totalData.sontype.allcontents" :key="index">
                  <div class="c-title" v-if="item.title">{{ item.title }}</div>
                  <div class="c-image" v-if="item.pic">
                    <img :src="item.pic">
                  </div>
                  <div class="c-main" v-if="item.content">{{ item.content }}</div>
                </div>
                <div class="desc">{{ totalData.sontype.content }}</div>
                <div class="list-box">
                  <div class="list-title">{{ totalData.allsontypes[navIndex].name }}相关牌</div>
                  <div class="list-item" v-for="(item, index) in totalData.sontype.cards" :key="index" @click="routeChange(item)">
                    <div class="img">
                      <img :src="item.pic">
                    </div>
                    <div class="info">
                      <h5>{{ item.name }}</h5>
                      <p>{{ item.content }}</p>
                    </div>
                    <div class="arrow"></div>
                  </div>
                </div>
              </template>
            </van-pull-refresh>
          </div>
        </div>
      </template>
      <router-view />
    </div>
  </Cont>
</template>

<script>
import Cont from './content'
import { getTarot } from '@/fetch/api'
export default {
  name: 'pmlx',
  data () {
    return {
      titleName: '',
      navIndex: 0,
      swipeIndex: 0,
      totalData: Object,
      itemSecondStatus: false
    }
  },
  components: {
    Cont
  },
  methods: {
    /**
     * 获取数据
     */
    getData (id) {
      const self = this
      getTarot({
        itemid: id,
        actiontype: 2,
        userid: this.$userId
      }).then(res => {
        console.log(res)
        if (res.result == 1) {
          res.infos.allsontypes.map((item, index) => {
            if (item.id == id) {
              self.navIndex = index
              self.swipeIndex = index
            }
          })
          self.totalData = res.infos
          self.titleName = res.infos.sontype.fathertype
          self.$refs.scroll.scrollTo(0, 0)
        }
      })
    },
    /**
     * 切换tab
     */
    tabChange (data, eq) {
      this.getData(data.id)
    },
    /**
     * 页面跳转
     */
    routeChange (item) {
      this.$router.push({
        path: '/tlyjy/pmlx/details',
        query: {
          id: item.id
        }
      })
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
     * 返回
     */
    routeBack () {
      if (this.$route.query.from == 'app') return this.$router.go(-1)
      return window.fortune.closepage()
    }
  },
  mounted () {
    if (this.$route.query.id) return this.getData(this.$route.query.id)
    return this.getData(this.getUrlParams('yjyid'))
  }
}
</script>
