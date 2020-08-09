<style lang="less" scoped>
.tarot-wrapper {
  font-size: 0;
  width: 100vw;
  height: 100vh;
  padding: 1.5rem 0 0 0;
  line-height: initial;
  box-sizing: border-box;
  overflow: auto;
  position: relative;
  background-image: url("../assets/images/bg_tarot.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .title {
    display: flex;
    align-items: center;
    color: #fffaf1;
    font-size: 0.36rem;
    height: 1.2rem;
    padding: .5rem 0 0 1.2rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    &.active {
      background: #402721;
    }
    i {
      display: inline-block;
      width: 0.8rem;
      height: 0.8rem;
      background-size: 50% 50%;
      background-repeat: no-repeat;
      position: absolute;
      top: .5rem;
      left: .4rem;
      bottom: 0;
      margin: auto auto;
      &.return {
        background-position: left center;
        background-image: url("../assets/icon/icon_return.png");
      }
    }
    img {
      width: 0.9rem;
      height: 0.9rem;
      border-radius: 50%;
    }
    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 0 0 0.3rem;
      span {
        color: #fff;
        font-size: 0.28rem;
        &:last-child {
          font-size: 0.24rem;
        }
      }
    }
  }
  .header {
    margin: 0.2rem 0 0.2rem 0.6rem;
    .h-img {
      display: flex;
      align-items: center;
      img {
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        border: 0.04rem solid #886853;
      }
      span {
        color: #fffaf1;
        font-size: 0.36rem;
        margin: 0 0 0 0.2rem;
      }
    }
    .h-star {
      display: flex;
      align-items: center;
      color: #ffc495;
      font-size: 0.24rem;
      font-weight: bold;
      margin: 0.3rem 0 0.2rem;
      i {
        width: 0.18rem;
        height: 0.18rem;
        margin: 0 0.01rem 0 0;
        background-image: url("../assets/icon/tarot_star.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
      span {
        margin: 0 0 0 0.1rem;
      }
    }
    .h-year {
      display: flex;
      align-items: center;
      color: #d6c5b8;
      font-size: 0.2rem;
      margin: 0.2rem 0;
      span {
        color: #fffaf1;
        font-size: 0.24rem;
        font-weight: bold;
        margin: 0 0.05rem 0 0;
      }
    }
    .h-tip {
      display: flex;
      align-items: center;
      color: #d6c5b8;
      font-size: 0.2rem;
      margin: 0.2rem 0;
      span {
        margin: 0 0.2rem 0 0;
      }
    }
  }
  .wrapper-content {
    width: 100%;
    position: relative;
    .content-info {
      margin: 0.3rem 0 0.5rem 0;
      .item {
        display: flex;
        align-items: center;
        color: #d6c5b8;
        font-size: 0.18rem;
        margin: 0 0 0.25rem 0.6rem;
        line-height: 0.25rem;
        .list {
          display: flex;
          align-items: center;
          padding: 0 0.2rem;
          height: 0.25rem;
          line-height: 0.25rem;
          &:first-child {
            padding: 0 0.2rem 0 0;
          }
          &:nth-child(2) {
            border-left: 1px solid #765d49;
            border-right: 1px solid #765d49;
          }
        }
        img {
          width: 0.22rem;
          height: 0.22rem;
        }
        span {
          display: inline-block;
          height: 0.25rem;
          &.color-1 {
            font-size: 0.22rem;
            margin: 0 0.3rem 0 0.1rem;
          }
          &.color-2 {
            color: #e7e3db;
            font-size: 0.18rem;
            margin: 0 0.05rem 0 0;
          }
        }
      }
      .intro {
        margin: 0.6rem 0.25rem 0 0.3rem;
        .i-title {
          color: #d6c5b8;
          font-size: 0.32rem;
          font-weight: 400;
          margin: 0 0 0.3rem 0;
        }
        .i-content {
          color: rgba(201, 183, 170, 0.7);
          font-size: 0.2rem;
          line-height: 0.34rem;
          text-indent: 2em;
          .content-image-show {
            float: left;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 2rem;
            height: 2.4rem;
            margin: 0 0.2rem 0.2rem 0;
            border-radius: 0.1rem;
            overflow: hidden;
            img {
              height: 100%;
              max-height: 2.4rem;
            }
          }
        }
        .i-time {
          padding: 0 0 0 0.3rem;
          .i-time-list {
            display: flex;
            flex-direction: column;
            padding: 0 0 0.7rem;
            position: relative;
            &:last-child {
              padding: 0;
            }
            &:last-child:after {
              content: none;
            }
            &:before {
              content: "";
              width: 0.1rem;
              height: 0.1rem;
              border-radius: 50%;
              background: #bd9467;
              position: absolute;
              top: 0.1rem;
              left: -0.3rem;
            }
            &:after {
              content: "";
              width: 0.04rem;
              height: 70%;
              background: #bd9467;
              position: absolute;
              top: 0.2rem;
              left: -0.26rem;
              bottom: -0.1rem;
              margin: auto 0;
            }
            span {
              color: rgba(201, 183, 170, 1);
              font-size: 0.22rem;
              &:first-child {
                color: rgba(201, 183, 170, 0.45);
              }
            }
          }
        }
        .i-data {
          display: flex;
          align-items: center;
          color: #513328;
          font-size: 0.26rem;
          font-weight: bold;
          width: 6.3rem;
          height: 0.6rem;
          padding: 0 0 0 0.7rem;
          box-sizing: border-box;
          background-image: url("../assets/icon/tarot_title.png");
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
        .i-data-num {
          display: flex;
          align-items: center;
          color: #c9b7aa;
          font-size: 0.22rem;
          margin: 0.4rem 0 0 0;
          span {
            display: flex;
            justify-content: center;
            color: #b83824;
            font-size: 0.3rem;
            width: 0.3rem;
            height: 0.4rem;
            line-height: 0.4rem;
            margin: 0 0.02rem 0 0;
            background: rgba(204, 181, 159, 1);
            position: relative;
            &:first-child {
              margin: 0 0.02rem 0 0.2rem;
            }
            &:last-child {
              margin: 0 0.2rem 0 0;
            }
            &:before {
              width: 100%;
              height: 1px;
              background: #000;
              position: absolute;
              top: 0;
              left: 0;
              bottom: 0;
              margin: auto 0;
            }
          }
        }
        .i-list {
          display: flex;
          flex-direction: column;
          color: rgba(201, 183, 170, 1);
          font-size: 0.22rem;
          line-height: 0.4rem;
          margin: 0 0 0.4rem 0;
          .i-list-content {
            padding: 0 0 0 0.15rem;
            text-indent: 2em;
          }
        }
      }
    }
    .content-platform {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: .3rem 0 0 0;
      .detail {
        display: flex;
        align-items: center;
        justify-content: center;
        color:rgba(214, 197, 184, .5);
        font-size: .2rem;
        margin: 0 0 .4rem 0;
        img {
          width: .16rem;
          height: .14rem;
          margin: 0 .1rem 0 0;
        }
      }
      .content {
        padding: .5rem .3rem;
        border-top-left-radius: .3rem;
        border-top-right-radius: .3rem;
        background: #E5D8CF;
        .item {
          width: 100%;
          .i-title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #513328;
            font-size: .32rem;
            font-weight: bold;
            margin: 0 0 .2rem 0;
            span {
              color: rgba(59, 37, 32, .4);
              font-size: .2rem;
            }
          }
          .i-content {
            img {
              width: .33rem;
              height: .25rem;
              float: left;
              &.img-right {
                float: none;
              }
            }
            span {
              color: #3B2520;
              font-size: .22rem;
              line-height: .42rem;
            }
          }
          .i-plan {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 1.6rem;
            padding: 0 0 0 1.25rem;
            margin: .45rem 0;
            position: relative;
            background-image: url('../assets/images/plan.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            .i-plan-title {
              color: #513328;
              font-size: .28rem;
              font-weight: 500;
            }
            .i-plan-content {
              color: #6F543F;
              font-size: .2rem;
              margin: .2rem 0 0 0;
              span {
                margin: 0 .15rem 0 0;
              }
            }
            .i-plan-arrow {
              width: .09rem;
              height: .17rem;
              position: absolute;
              top: 0;
              right: .3rem;
              bottom: 0;
              margin: auto 0;
              background-image: url('../assets/icon/arrow_right.png');
              background-size: 100% 100%;
              background-repeat: no-repeat;
            }
          }
          .i-tip {
            display: flex;
            align-items: center;
            color: #513328;
            font-size: .22rem;
            span {
              margin: 0 .5rem 0 0;
            }
          }
          .i-box {
            padding: .2rem;
            margin: .3rem 0;
            box-sizing: border-box;
            border-radius: .06rem;
            border: 1px solid rgba(186, 153, 129, 1);
            background: rgba(215, 197, 184, 1);
            .i-box-title {
              display: flex;
              align-items: center;
              width: 100%;
              .t-icon {
                display: flex;
                align-items: center;
                justify-content: center;
                width: .5rem;
                height: .5rem;
                background: rgba(185, 56, 37, 1);
                border-radius: .06rem;
                img {
                  width: .27rem;
                  height: .27rem;
                }
              }
              .t-name {
                flex: 1;
                color: #513328;
                font-size: .28rem;
                font-weight: 500;
                margin: 0 0 0 .15rem;
              }
              .t-price {
                color: #B83824;
                font-size: .32rem;
              }
              .t-oldPrice {
                color: #866F65;
                font-size: .2rem;
                margin: 0 0 0 .1rem;
                text-decoration: line-through;
              }
            }
            .i-box-main {
              margin: .25rem 0 0 .6rem;
              p {
                color:rgba(81, 51, 40, .65);
                font-size: .21rem;
                line-height: .3rem;
              }
            }
            .i-box-button {
              color: #E5D8CF;
              font-size: .26rem;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 2.8rem;
              height: .6rem;
              margin: .28rem auto 0;
              border-radius: .3rem;
              background: #B5341F;
            }
          }
          .i-evaluate {
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 100%;
            height: 1.7rem;
            background: rgba(105, 78, 59, .2);
            border-radius: .06rem;
            .e-star {
              display: flex;
              align-items: center;
              i {
                display: inline-block;
                width: .16rem;
                height: .16rem;
                background-image: url('../assets/icon/star.png');
                background-size: 100% 100%;
                background-repeat: no-repeat;
              }
            }
            .e-left {
              display: flex;
              justify-content: space-between;
              flex-direction: column;
              height: .7rem;
              span {
                color: #B83824;
                font-size: .4rem;
              }
            }
            .e-middle,
            .e-right {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              height: .8rem;
              .e-middle-list {
                display: flex;
                align-items: center;
                span {
                  color: #513328;
                  font-size: .22rem;
                  font-weight: bold;
                  margin: 0 .1rem 0 0;
                }
              }
            }
          }
          .i-swiper {
            width: 100%;
            white-space: nowrap;
            overflow-x: auto;
            overflow-y: hidden;
            margin: .25rem 0 .3rem 0;
            .i-swiper-list {
              display: inline-block;
              vertical-align: top;
              width: 5rem;
              height: 2.75rem;
              margin: 0 .2rem 0 0;
              padding: .25rem .2rem;
              background: rgba(245, 236, 231, 1);
              border: 1px solid rgba(211, 193, 181, 1);
              border-radius: .06rem;
              box-sizing: border-box;
              position: relative;
              &:last-child {
                margin: 0;
              }
              .list-top {
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                width: 100%;
                .top-userinfo {
                  display: flex;
                  align-items: flex-start;
                  img {
                    width: .4rem;
                    height: .4rem;
                    border-radius: 50%;
                  }
                  span {
                    color: rgba(81, 51, 40, .65);
                    font-size: .2rem;
                    margin: 0 0 0 .2rem;
                  }
                }
                .top-buyType {
                  display: flex;
                  align-items: center;
                  line-height: 1;
                  span {
                    color: #AA9789;
                    font-size: .2rem;
                    &.color {
                      color: #B93825;
                      margin: 0 0 0 .05rem;
                    }
                  }
                }
              }
              .list-tips {
                display: flex;
                margin: 0 0 0 .6rem;
                p {
                  display: flex;
                  align-items: center;
                  color: #FFFAF3;
                  font-size: .18rem;
                  height: .3rem;
                  padding: 0 .1rem;
                  margin: 0 .1rem 0 0;
                  border-radius: .2rem;
                  background: #C6B5AA;
                }
              }
              .list-main {
                color: #513328;
                font-size: .26rem;
                line-height: .4rem;
                white-space: initial;
                margin: .3rem .15rem 0 .55rem;
              }
              .list-time {
                color: #AA9789;
                font-size: .2rem;
                position: absolute;
                right: .2rem;
                bottom: .2rem;
              }
            }
          }
          .i-wechat {
            width: 100%;
            padding: 0 0 .6rem 0;
            .i-wechat-list {
              display: flex;
              width: 100%;
              margin: 0 0 .5rem 0;
              .wechat-time {
                color: #513328;
                font-size: .36rem;
                font-weight: bold;
                span {
                  font-size: .24rem;
                  margin: 0 0 0 .1rem;
                }
              }
              .wechat-content {
                flex: 1;
                margin: 0 0 0 .3rem;
                span {
                  color: #513328;
                  font-size: .28rem;
                  width: 100%;
                  line-height: .4rem;
                }
                .wechat-c-image {
                  display: flex;
                  flex-wrap: wrap;
                  width: 100%;
                  margin: .2rem 0 0 0;
                  .image-box {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 1.8rem;
                    height: 1.8rem;
                    margin: 0 .15rem .15rem 0;
                    overflow: hidden;
                    &:nth-child(3n) {
                      margin: 0 0 .15rem 0;
                    }
                    img {
                      width: 100%;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .arrow {
    width: 0.46rem;
    height: 0.4rem;
    margin: 0.4rem auto 0;
    position: fixed;
    left: 0;
    right: 0;
    bottom: .2rem;
    background-image: url("../assets/icon/arrow_up.png");
    background-size: 80% 80%;
    background-repeat: no-repeat;
    background-position: center center;
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
    .follow {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 .35rem 0 0;
      img {
        width: .35rem;
        height: .35rem;
      }
      span {
        color: #B5341F;
        font-size: .22rem;
      }
    }
    .buy-button {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #E5D8CF;
      font-size: .26rem;
      font-weight: bold;
      width: 5.6rem;
      height: .7rem;
      border-radius: .35rem;
      background: rgba(181, 52, 31, .9);
    }
  }
  .pay-content {
    width: 100%;
    padding: .3rem 0 .3rem;
    position: relative;
    background: rgba(229, 216, 207, 1);
    .pay-content-title {
      display: flex;
      justify-content: center;
      color: #513328;
      font-size: .32rem;
      font-weight: 600;
      margin: 0 0 .5rem 0;
    }
    .close {
      width: .3rem;
      height: .3rem;
      position: absolute;
      top: .4rem;
      right: .3rem;
    }
    ul {
      width: 100%;
      max-height: 50vh;
      overflow: auto;
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: .9rem;
        padding: 0 .3rem;
        position: relative;
        &:after {
          border-bottom: 1px solid rgba(85, 51, 40, .2) !important;
        }
        .color {
          color: #7F665C;
          font-size: .22rem;
        }
        .color-1 {
          color: #B83824;
          font-size: .28rem;
        }
        &.active {
          background: #c7beb7;
          &:after {
            content: none;
          }
          .color {
            color: #513328;
            font-size: .22rem;
          }
        }
      }
    }
    .list {
      display: flex;
      align-items: center;
      margin: 0 0 .4rem .25rem;
      img {
        width: .5rem;
        height: .5rem;
      }
      .list-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0 0 0 .1rem;
        .list-content-title {
          color: #513328;
          font-size: .26rem;
          font-weight: 500;
        }
        .list-content-intro {
          color: rgba(81, 51, 40, .65);
          font-size: .18rem;
        }
      }
    }
    .createOrder {
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
  <div class="tarot-wrapper" @scroll="scrollFunc" ref="Tarot">
    <div class="title" :class="['title', { 'active animate__fadeIn animate__animated': titleActive }]">
      <i class="return" @click="$router.go(-1)" />
      <img v-if="titleActive" :src="Data.face" />
      <div v-if="titleActive" class="content">
        <span>{{ Data.name }}</span>
        <span>{{ Data.nianxian }}年 从业年限</span>
      </div>
    </div>
    <div class="header">
      <div class="h-img">
        <img :src="Data.face" />
        <span>{{ Data.name }}</span>
      </div>
      <div class="h-star">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <span>5.0</span>
      </div>
      <div class="h-year"><span>{{ Data.nianxian }}</span>年 从业年限</div>
      <div class="h-tip">
        <span v-for="(list, eq) in Data.shanchang" :key="eq">{{ list }}</span>
      </div>
    </div>
    <div class="wrapper-content">
      <!-- 个人介绍 -->
      <div class="content-info" v-show="introStatus">
        <div class="item">
          <img src="../assets/icon/success.png" />
          <span class="color-1">平台认证</span>
          <img src="../assets/icon/money.png" />
          <span class="color-1">交易担保</span>
        </div>
        <div class="item">
          <div class="list"><span class="color-2">{{ Data.fensi }}</span>粉丝</div>
          <div class="list"><span class="color-2">{{ Data.pingjia }}</span>评价</div>
          <div class="list"><span class="color-2">{{ Data.jieda }}</span>解答</div>
        </div>
        <div class="intro">
          <div class="i-title">个人介绍</div>
          <div class="i-content">
            <div class="content-image-show">
              <img :src="Data.jieshaopic" class="i-photo" border="0" />
            </div>
            {{ Data.jieshao }}
          </div>
        </div>
        <div class="intro">
          <div class="i-title">培训学习经历</div>
          <div class="i-time">
            <div class="i-time-list" v-for="(list, eq) in Data.jingLiData" :key="eq">
              <span>{{ list.year }}</span>
              <span>{{ list.intro }}</span>
            </div>
          </div>
        </div>
        <div class="intro">
          <div class="i-title">服务案例</div>
          <div class="i-data">服务案例数</div>
          <div class="i-data-num">
            截止目前，共累计服务用户超过 
            <span v-for="(list, eq) in Data.anli" :key="eq">{{ list }}</span> 名。
          </div>
        </div>
        <div class="intro">
          <div class="i-title">预测精准实例</div>
          <div class="i-list" v-for="(list, eq) in Data.shiliData" :key="eq">
            <div class="i-list-name">{{ list.title }}</div>
            <div class="i-list-content">{{ list.intro }}</div>
          </div>
        </div>
      </div>
      <!-- 平台 -->
      <div class="content-platform" :class="[upDataClass, {'animate__fadeOutDown animate__animated': ClassStatus}]" v-show="platFormStatus">
        <div class="detail" @click="detailFunc">
          <img src="../assets/icon/arrow_down.png">详细资料
        </div>
        <div class="content">
          <div class="item">
            <div class="i-title">平台寄语</div>
            <div class="i-content">
              <img src="../assets/icon/syh.png">
              <span>{{ Data.qianming }}</span>
              <img class="img-right" src="../assets/icon/xyh.png">
            </div>
            <div class="i-plan" @click="promiseStatus = true">
              <div class="i-plan-title">塔罗精选计划</div>
              <div class="i-plan-content">
                <span>·保护隐私</span>
                <span>·支持退款</span>
                <span>·5轮甄选</span>
                <span>·资料真实</span>
                <span>·伦理审查</span>
              </div>
              <div class="i-plan-arrow"></div>
            </div>
          </div>
          <div class="item">
            <div class="i-title">服务</div>
            <div class="i-tip">
              <span>*支持文字、语音、通话</span>
              <span>*私人订制咨询方案</span>
            </div>
            <div class="i-box" v-for="(item, index) in Data.xmitems" :key="item.id">
              <div class="i-box-title">
                <div class="t-icon">
                  <img :src="item.xmicon || require('../assets/icon/bmxp.png')">
                </div>
                <div class="t-name">{{ item.name }}</div>
                <div class="t-price">￥{{ item.priceval }}</div>
                <div class="t-oldPrice">{{ item.pricevaltipold }}</div>
              </div>
              <div class="i-box-main">
                <p>本案例分析包括但不限于：</p>
                <!-- <p v-for="(list, eq) in item.jieshao" :key="eq">·{{ list }}</p> -->
                <p v-html="item.jieshao"></p>
              </div>
              <div class="i-box-button" @click="buyActive = index">立即咨询</div>
            </div>
          </div>
          <div class="item">
            <div class="i-title">
              评价反馈
              <!-- <span>查看{{ Data.pingjia }}名用户真实评价</span> -->
            </div>
            <div class="i-evaluate">
              <div class="e-left">
                <span>5.0</span>
                <div class="e-star">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>
              <div class="e-middle">
                <div class="e-middle-list">
                  <span>咨询质量</span>
                  <div class="e-star">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                </div>
                <div class="e-middle-list">
                  <span>回复速度</span>
                  <div class="e-star">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                </div>
              </div>
              <div class="e-right">
                <div class="e-middle-list">
                  <span>服务态度</span>
                  <div class="e-star">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="i-swiper">
              <div class="i-swiper-list" v-for="item in Data.pjitems" :key="item.id">
                <div class="list-top">
                  <div class="top-userinfo">
                    <img :src="item.yonghuface || require('../assets/icon/photo.png')">
                    <span>{{ item.yonghuname }}</span>
                  </div>
                  <div class="top-buyType">
                    <span>已购买</span>
                    <span class="color">{{ item.ordername }}</span>
                  </div>
                </div>
                <div class="list-tips">
                  <p v-for="(list, eq) in item.biaoqian" :key="eq" v-show="eq < 3">{{ list }}</p>
                </div>
                <div class="list-main">{{ item.content || '用户未评价~' }}</div>
                <div class="list-time">{{ item.time }}</div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="i-title">咨询师动态</div>
            <div class="i-wechat">
              <div class="i-wechat-list" v-for="item in Data.noteitems" :key="item.id">
                <div class="wechat-time">
                  {{ item.day }}<span>{{ item.yue }}月</span>
                </div>
                <div class="wechat-content">
                  <span>{{ item.content }}</span>
                  <div class="wechat-c-image">
                    <div class="image-box" v-for="(list, eq) in item.allpics" :key="eq" v-show="eq < 9">
                      <img :src="list" @click="ImagePreview(item.allpics, eq)">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- arrowup -->
    <div class="arrow animate__animated animate__infinite animate__fadeIn" v-if="introStatus" @click="arrowUpFunc"></div>
    <!-- 支付 -->
    <div :class="['buy', {'fadeInUp animate__animated': platFormStatus}]" v-if="platFormStatus">
      <div v-if="!followStatus" class="follow" @click="followFunc(1)">
        <img src="../assets/icon/unfollow.png">
        <span>关注</span>
      </div>
      <div v-if="followStatus" class="follow" @click="followFunc(2)">
        <img src="../assets/icon/follow.png">
        <span>已关注</span>
      </div>
      <div class="buy-button" @click="payStatus = true">购买TA的服务</div>
    </div>
    <!-- 郑重承诺 -->
    <van-popup v-model="promiseStatus" position="bottom">
      <div class="pay-content">
        <div class="pay-content-title">星座运势郑重承诺</div>
        <img class="close" src="../assets/icon/close.png" @click="promiseStatus = false">
        <div class="list" v-for="(item, index) in promiseData" :key="index">
          <img :src="require('../assets/icon/promise_' + (index + 1) + '.png')">
          <div class="list-content">
            <span class="list-content-title">{{ item.title }}</span>
            <span class="list-content-intro">{{ item.content }}</span>
          </div>
        </div>
        <div class="createOrder" @click="promiseStatus = false">知道了</div>
      </div>
    </van-popup>
    <!-- 购买服务 -->
    <van-popup v-model="payStatus" position="bottom">
      <div class="pay-content">
        <div class="pay-content-title">购买TA的服务</div>
        <img class="close" @click="payStatus = false" src="../assets/icon/close.png">
        <ul>
          <li v-for="(item, index) in Data.xmitems" :key="item.id" :class="['bor-b', {active: buyActive == index}]" @click="buyActive = index">
            <span class="color">{{ item.name }}</span>
            <span class="color-1">￥{{ item.priceval }}</span>
          </li>
        </ul>
        <div class="createOrder" @click="createOrderFunc">购买</div>
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
        <div class="tips">
          <p>您还未支付订单？支付之后即可获取一对一服务？</p>
          <p>(无法支付请联系QQ/微信：510034726)</p>
        </div>
        <div class="button">
          <div class="color-1" @click="unOrderStatus = false">我再想想</div>
          <div class="color-2" @click="goPay">前去支付</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { payOrder, getDiviner } from '@/fetch/api'
export default {
  name: "tarot",
  data () {
    return {
      Data: Object,
      buyActive: 0, // 购买的序列号
      payOrderId: '', // 支付订单id
      followStatus: false, // 关注状态
      payStatus: false, // 购买服务状态
      orderStatus: false, // 订单状态
      unOrderStatus: false, // 未支付状态
      titleActive: false,
      ClassStatus: false, // 动画状态
      introStatus: false, // 介绍状态
      platFormStatus: true, // 平台状态
      promiseStatus: false, // 郑重承诺
      upDataClass: '',
      promiseData: [{
        title: '全面隐私保护',
        content: '充分尊重每位来访者的隐私，全方位保护你的信息安全'
      }, {
        title: '24小时退款',
        content: '咨询师24小时内未回复订单，用户即可申请取消订单及退款'
      }, {
        title: '5轮严格甄选',
        content: '行业高水平入驻标准，精选TOP2%的入驻候选人'
      }, {
        title: '资料真实可靠',
        content: '咨询师均持有相关资格证书，信息经过真实性核验'
      }, {
        title: '专业审查机制',
        content: '平台专委会严肃处理违背占星、塔罗咨询伦理的各项行为'
      }]
    }
  },
  methods: {
    /**
     * 详细资料
     */
    detailFunc () {
      this.ClassStatus = true
      this.introStatus = true
      this.upDataClass = 'fadeInUp animate__animated'
      setTimeout(() => {
        this.platFormStatus = false
      }, 300)
    },
    /**
     * 查看平台
     */
    arrowUpFunc () {
      this.ClassStatus = false
      this.platFormStatus = true
      this.$refs.Tarot.scrollTo(0, 0)
      setTimeout(() => {
        this.introStatus = false
      }, 300)
    },
    /**
     * 滚动加载
     */
    scrollFunc (e) {
      this.titleActive = e.srcElement.scrollTop > 100
    },
    /**
     * 查看大图
     */
    ImagePreview (data, eq) {
      this.$ImagePreview({
        images: data,
        startPosition: eq
      })
    },
    /**
     * 购买TA的服务
     */
    createOrderFunc () {
      this.payOrderId = ''
      payOrder({
        expertuserid: this.Data.userid,
        userid: this.$userId,
        actiontype: 3,
        ordername: this.Data.xmitems[this.buyActive].name,
        price: this.Data.xmitems[this.buyActive].priceval,
        ordertype: 1
      }).then(res => {
        if (res.result == 1) {
          this.payOrderId = res.infos.orderid
          window.fortune.openactivity('com.fairytale.fortunetarot.controller.ExpertOrderDetailActivity', '0', '', `orderid#${res.infos.orderid}`)
          this.orderStatus = true
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
        if (res.result == 1) {
          this.orderStatus = false
          window.fortune.openactivity('startprivatechat', '0', '1', `userid#${Data.userid}@username#${Data.name}`)
        } else { 
          this.unOrderStatus = true
        }
      })
    },
    /**
     * 关注
     */
    followFunc (type) {
      payOrder({
        actiontype: type, //  1 关注 | 2 取消关注
        expertid: this.Data.id,
        userid: this.Data.userid
      }).then(res => {
        if (res.result == 1) {
          type == 1 ? this.$Toast('关注成功') : this.$Toast('取消关注')
          this.followStatus = type == 1
        }
      })
    },
    /**
     * 前去支付
     */
    goPay () {
      this.unOrderStatus = false
      this.orderStatus = true
      window.fortune.openactivity('com.fairytale.fortunetarot.controller.ExpertOrderDetailActivity', '0', '', `orderid#${this.payOrderId}`)
    }
  },
  mounted () {
    // 获取数据
    getDiviner({
      leibie: -2,
      userid: this.$route.query.id || this.$userId
    }).then(res => {
      if (res.result == 1) {
        res.infos[0].shanchang = res.infos[0].shanchang.split('#')
        // res.infos[0].xmitems.map(list => {
        //   list.jieshao = list.jieshao.split('，')
        // })
        res.infos[0].pjitems.map(list => {
          list.biaoqian = list.biaoqian.split('#')
        })
        res.infos[0].jingLiData = []
        res.infos[0].jingli = res.infos[0].jingli.split('@')
        res.infos[0].jingli.map(list => {
          let data = list.split('#')
          res.infos[0].jingLiData.push({
            year: data[0],
            intro: data[1]
          })
        })
        res.infos[0].shiliData = []
        res.infos[0].shili = res.infos[0].shili.split('@')
        res.infos[0].shili.map(list => {
          let data = list.split('\\n\\t\\t\\t')
          res.infos[0].shiliData.push({
            title: data[0],
            intro: data[1]
          })
        })
        res.infos[0].jieshao = res.infos[0].jieshao.replace('\\t\\t\\t', '')
        this.Data = res.infos[0]
      }
    })
  }
}
</script>
