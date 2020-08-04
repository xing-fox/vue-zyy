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
      padding: .4rem 0 0;
      position: relative;
      i {
        display: inline-block;
        width: .8rem;
        height: .8rem;
        background-size: 50% 50%;
        background-repeat: no-repeat;
        position: absolute;
        top: .4rem;
        left: .4rem;
        bottom: 0;
        margin: 0 auto;
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
    .content {
      height: calc(100vh - 2rem);
      margin: .3rem .4rem 0;
      box-sizing: border-box;
      overflow: auto;
      ul>li {
        display: flex;
        align-items: center;
        width: 100%;
        height: 2.9rem;
        margin: 0 0 .2rem 0;
        .img-photo {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.1rem;
          height: 2.9rem;
          border-radius: 4px;
          overflow: hidden;
          background: #fff;
          position: relative;
          .t-intro {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 1.2rem;
            box-sizing: border-box;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
            background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
            .name {
              color: #fff;
              font-size: .3rem;
              // font-family: fontMini;
              margin: 0 0 0 .15rem;
            }
            .star {
              display: flex;
              align-items: center;
              margin: .1rem 0 0 .2rem;
              i {
                display: inline-block;
                width: .2rem;
                height: .2rem;
                background-image: url('../assets/icon/star.png');
                background-size: 100% 100%;
                background-repeat: no-repeat;
              }
              span {
                color: #fff;
                font-size: .24rem;
                font-weight: bold;
                margin: 0 0 0 .1rem;
              }
            }
          }
          img {
            height: 2.9rem;
          }
        }
        .intro {
          flex: 1;
          height: 2.6rem;
          padding: .15rem .2rem;
          border-radius: 0 .1rem .1rem 0;
          box-sizing: border-box;
          background: #e8dad2;
          .intro-top {
            display: flex;
            color: rgba(81, 51, 40, .45);
            font-size: .22rem;
            // font-family: fontMini;
            p {
              &:nth-child(2) {
                margin: 0 .2rem;
                padding: 0 .2rem;
                position: relative;
                &:before {
                  border-left: 1px solid rgba(81, 51, 40, .45);
                }
                &:after {
                  border-right: 1px solid rgba(81, 51, 40, .45);
                }
              }
              span {
                color: rgba(81, 51, 40, 1);
                margin: 0 .1rem 0 0;
              }
            }
          }
          .intro-middle {
            display: flex;
            margin: .2rem 0 0 0;
            li {
              display: flex;
              align-items: center;
              justify-content: center;
              color:rgba(81, 51, 40, .65);
              font-size: .18rem;
              font-weight: bold;
              // font-family: fontMini;
              width: inherit;
              height: .32rem;
              margin: 0 .1rem 0 0;
              padding: 0 .12rem;
              border-radius: .16rem;
              background: #f1e8e3;
              &:last-child {
                margin: 0;
              }
            }
          }
          .intro-info {
            display: flex;
            align-items: center;
            flex-direction: column;
            color: rgba(81, 51, 40, .65);
            font-size: .18rem;
            width: 100%;
            height: 1rem;
            line-height: .3rem;
            padding: .1rem 0;
            text-indent: 2em;
            box-sizing: border-box;
            overflow: hidden;
            position: relative;
            &:after {
              border-bottom: 1px solid rgba(81, 51, 40, .45);
            }
          }
          .intro-bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #b83824;
            font-size: .26rem;
            // font-family: fontMini;
            width: 100%;
            height: .6rem;
            img {
              width: .3rem;
              height: .3rem;
              margin: 0 .05rem 0 0;
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
        <span>咨询师</span>
      </div>
      <van-pull-refresh class="content" v-model="refreshStatus" @refresh="refreshStatus = false">
        <ul>
          <li v-for="item in data" :key="item.id" @click="routeChange(item.userid)">
            <div class="img-photo">
              <div class="t-intro">
                <div class="name">{{ item.name }}</div>
                <div class="star">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <span>{{ item.star }}</span>
                </div>
              </div>
              <img :src="item.face">
            </div>
            <div class="intro">
              <div class="intro-top">
                <p><span>{{ item.fensi }}</span>粉丝</p>
                <p class="bor-l bor-r"><span>{{ item.pingjia }}</span>评价</p>
                <p><span>{{ item.jieda }}</span>解答</p>
              </div>
              <ul class="intro-middle">
                <li v-for="(list, eq) in item.shanchang" :key="eq" v-show="eq < 3">
                  {{ list }}
                </li>
              </ul>
              <div class="intro-info bor-b" v-html="item.jieshao"></div>
              <div class="intro-bottom">
                <div>{{ item.titletip }}</div>
                <div>
                  <img src="../assets/images/im.jpg">
                  <span>[在线]咨询</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </van-pull-refresh>
    </div>
  </Cont>  
</template>

<script>
import { getDiviner } from '@/fetch/api'
import Cont from './content'
export default {
  name: 'worker',
  data () {
    return {
      from: this.$route.query.from, // app 内页跳转
      data: [],
      refreshStatus: false
    }
  },
  components: {
    Cont
  },
  methods: {
    getData () {
      getDiviner({
        leibie: 3,
        expertway: this.getUrlParam('expertway') || 3
      }).then(res => {
        res.infos.map(item => {
          item.shanchang = item.shanchang.split('#')
          item.jieshao = item.jieshao.replace('\\t\\t\\t', '')
        })
        this.data = res.infos
      })
    },
     getUrlParam (val) {
      const url = window.location.href
      if (url.indexOf('?') === -1) return false
      const vars = url.split('?')[1].split('&')
      for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split('=')
        if (pair[0] == val) return pair[1]
      }
      return false
    },
    routeBack () {
      if (this.from == 'app') return this.$router.go(-1)
      return window.fortune.closepage()
    },
    routeChange (id) {
      this.$router.push({
        path: '/tarot'
      })
      // window.fortune.openactivity('com.fairytale.fortunetarot.controller.ExpertDetailActivity', '0', '', `expertuserid#${id}`)
    } 
  },
  created () {
    this.getData()
  }
}
</script>
