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
      flex: 1;
      display: flex;
      justify-content: center;
    }
  }
  .video {
    margin: 0 .3rem;
    border: .04rem solid #9F6C49;
    box-shadow: 0px 0px .2rem 0px rgba(62, 33, 11, 0.9);
    border-radius: .1rem;
    video {
      width: 100%;
      height: 3.4rem;
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
    .item-info {
      background: #E5D8CF;
      border-radius: .06rem;
      height: 100%;
      padding: .3rem;
      box-sizing: border-box;
      overflow-y: auto;
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
    height: 1.5rem;
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
  .item-info {
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
      .teacher-info {
        display: flex;
        .teacher-img {
          width: 2rem;
          height: 2.6rem;
          background: #ccc;
          border-radius: .06rem;
          overflow: hidden;
          margin: .1rem .22rem 0 0;
          img {
            width: 100%;
            height: 100%;
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
        margin: .3rem auto .1rem;
        border-radius: .3rem;
        background: #B5341F;
      }
    }
    .class-item {
      .class-img {
        width: 100%;
        height: 2.96rem;
        background: #ccc;
        border-radius: .06rem;
        overflow: hidden;
        margin: 0 0 .14rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .desc {
        text-indent: .48rem;
        padding-bottom: .06rem;
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
          <span>1.第一节：先导课，塔罗不神秘</span>
          <i class="tips"></i>
        </div>
        <div class="video">
          <video src="" controls="controls"></video>
        </div>
        <ul class="nav bor-b">
          <li v-for="(item, index) in navList" :key="index" :class="{'active': index == navIndex}" @click="changeNav(index)">{{ item }}</li>
        </ul>
        <div class="main">
          <div class="item-info" v-if="navIndex == 0">
            <div class="class-info">
              <div class="title-c">
                <h5>塔罗初阶入门教学</h5>
                <span>更新中</span>
              </div>
              <div class="desc">这里是课程的一句话介绍，简介内容简介内容简介内容</div>
              <div class="detail">
                <span>40220次播放</span>
                <span class="price">
                  <i class="old">￥199</i>
                  <i class="new">￥99</i>
                </span>
              </div>
            </div>
            <div class="teacher">
              <div class="title-t">讲师介绍</div>
              <div class="teacher-info">
                <div class="teacher-img"><img src=""></div>
                <div class="desc">占星学是用天体的相对位置和相对运动（尤其是太阳系内的行星的位置）来解释或预言人的和行为的系统。占星师是遵循占星学原理，利用人的出生地、出生时间绘制星盘，借此来解释人的性格和命运的人。</div>
              </div>
              <div class="teacher-btn">立即咨询</div>
            </div>
            <div class="class-item">
              <div class="title-t">课程介绍第一段标题</div>
                <div class="class-img"><img src=""></div>
                <div class="desc">这里是课程的介绍内容。这里是课程的介绍内容。这里是课程的介绍内容。这里是课程的介绍内容。这里是课程的介绍内容。这里是课程的介绍内容。这里是课程的介绍内容。这里是课程的介绍内。这里是课程的介绍内容。这里是课程的介绍内容。这里是课程的介绍内容。这里是课程的介绍内容。这里是课程的介绍内容</div>
            </div>
            <div class="class-item">
              <div class="title-t">课程介绍第二段标题</div>
                <div class="class-img"><img src=""></div>
                <div class="desc">这里是课程的介绍内容。这里是课程的介绍内容。这里是课程的介绍内容。这里是课程的介绍内容。这里是课程的介绍内容。这里是课程的介绍内容。这里是课程的介绍内容。这里是课程的介绍内。这里是课程的介绍内容。这里是课程的介绍内容。这里是课程的介绍内容。这里是课程的介绍内容。这里是课程的介绍内容</div>
            </div>
          </div>
          <div class="item-nav" v-if="navIndex == 1">
            <div class="list-item" v-for="item in listData" :key="item.id" @click="goTo(item.id)">
              <div class="status">
                <img v-if="item.id === currentId" src="../assets/images/icon-stop.png">
                <img v-else src="../assets/images/icon-play.png">
              </div>
              <div class="info">
                <h5 :class="{'red': item.id === currentId}">{{ item.title }}</h5>
                <p>{{ item.time }}</p>
              </div>
            </div>
          </div>
        </div>
        <div :class="['buy']">
          <div class="hear">
            <img src="../assets/images/icon-hear.png">
            <span>试听</span>
          </div>
          <div class="buy-button" @click="payStatus = true">立即参加：<span>99</span>元</div>
        </div>
      </template>
    </div>
  </Cont>
</template>

<script>
import Cont from './content'
export default {
  name: 'tlkt',
  data () {
    return {
      navIndex: 0,
      navList: ['详情', '目录', '咨询'],
      currentId: '1111',
      listData: [
        {
          id: '1111',
          title: '1.第一节：先导课，塔罗不神秘',
          time: "9'40"
        }, {
          id: '1222',
          title: '2.第二节：塔罗发展简史',
          time: "9'40"
        }, {
          id: '12333',
          title: '3.第三节：主流塔罗体系',
          time: "9'40"
        }
      ]
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
    goTo (item) {
      this.$router.push({
        path: '/tlyjy/tlkt'
      })
    },
    routeBack () {
      if (this.from == 'app') return this.$router.go(-1)
      return window.fortune.closepage()
    }
  },
  mounted () {
  }
}
</script>
