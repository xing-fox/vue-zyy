<style lang="less" scoped>
.tarot-wrapper {
  font-size: 0;
  width: 100vw;
  height: 100vh;
  padding: 1.2rem 0 0 0;
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
    padding: 0 0 0 1.2rem;
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
      top: 0;
      left: 0.4rem;
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
        // box-sizing: border-box;
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
        }
        img {
          float: left;
          width: 2rem;
          height: 2.4rem;
          margin: 0 0.2rem 0.2rem 0;
          border-radius: 0.1rem;
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
      .arrow {
        width: 0.46rem;
        height: 0.4rem;
        margin: 0.4rem auto 0;
        background-image: url("../assets/icon/arrow_up.png");
        background-size: 80% 80%;
        background-repeat: no-repeat;
        background-position: center center;
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
            }
          }
          .i-tip {
            display: flex;
            align-items: center;
            color: #513328;
            font-size: .22rem;
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
                i {
                  display: inline-block;
                  width: .27rem;
                  height: .27rem;
                  background-image: url('../assets/icon/bmxp.png');
                  background-size: 100% 100%;
                  background-repeat: no-repeat;
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
                font-size: .18rem;
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
            // &::-webkit-scrollbar {
            //   display: none;
            // }
            .i-swiper-list {
              display: inline-block;
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
            padding: 0 0 1rem 0;
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
                  line-height: .4rem;
                }
                .wechat-c-image {
                  display: flex;
                  flex-wrap: wrap;
                  width: 100%;
                  margin: .2rem 0 0 0;
                  img {
                    width: 1.8rem;
                    height: 1.8rem;
                    margin: 0 .15rem .15rem 0;
                    &:nth-child(3n) {
                      margin: 0 0 .15rem 0;
                    }
                  }
                }
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
        height: 1.8rem;
        background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .9));
        position: absolute;
        bottom: 0;
        img {
          width: .4rem;
          height: .62rem;
          margin: 0 .35rem 0 0;
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
    }
  }
}
</style>

<template>
  <div class="tarot-wrapper" @scroll="scrollFunc">
    <div class="title" :class="['title', { 'active animate__fadeIn animate__animated': titleActive }]">
      <i class="return" @click="$router.go(-1)" />
      <img v-if="titleActive" src="../assets/images/user.jpg" />
      <div v-if="titleActive" class="content">
        <span>塔罗师悟空</span>
        <span>9年 从业年限</span>
      </div>
    </div>
    <div class="header">
      <div class="h-img">
        <img src="../assets/images/user.jpg" />
        <span>塔罗师悟空</span>
      </div>
      <div class="h-star">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <span>5.0</span>
      </div>
      <div class="h-year"><span>9</span>年 从业年限</div>
      <div class="h-tip">
        <span>#事业分析</span>
        <span>#爱情策略</span>
        <span>#生活解困</span>
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
          <div class="list"><span class="color-2">162</span>粉丝</div>
          <div class="list"><span class="color-2">162</span>评价</div>
          <div class="list"><span class="color-2">162</span>解答</div>
        </div>
        <div class="intro">
          <div class="i-title">个人介绍</div>
          <div class="i-content">
            <img src="../assets/images/user.jpg" class="i-photo" border="0" />
            占星学是用天体的相对位置和相对运动（尤其是太阳系内的行星的位置）来解释或预言人的和行为的系统。是太阳系内的行星的位置）来解释或预言人的和行为的系统。是太阳系内的行星的位置）来解释或预言人的和行为的系统。占星师是遵循占星学原理，利用人的出生地、出生时间绘制星盘，借此来解释人的性格和命运的人。
            占星学是用天体的相对位置和相对运动（尤其是太阳系内的行星的位置）来解释或预言人的和行为的系统。占星师是遵循占星学原理，利用人的出生地、出生时间绘制星盘，借此来解释人的性格和命运的人。
          </div>
        </div>
        <div class="intro">
          <div class="i-title">培训学习经历</div>
          <div class="i-time">
            <div class="i-time-list">
              <span>2013年 - 2014年</span>
              <span>初步认识塔罗牌并自学</span>
            </div>
            <div class="i-time-list">
              <span>2013年 - 2014年</span>
              <span>初步认识塔罗牌并自学</span>
            </div>
            <div class="i-time-list">
              <span>2013年 - 2014年</span>
              <span>初步认识塔罗牌并自学</span>
            </div>
          </div>
        </div>
        <div class="intro">
          <div class="i-title">服务案例</div>
          <div class="i-data">服务案例数</div>
          <div class="i-data-num">
            截止目前，共累计服务用户超过 <span>2</span><span>0</span><span>0</span
            ><span>0</span> 名。
          </div>
        </div>
        <div class="intro">
          <div class="i-title">预测精准实例</div>
          <div class="i-list">
            <div class="i-list-name">【案例一】</div>
            <div class="i-list-content">
              一位女客户找到我，与其男友交往3年有余，期间觉得男友不太有上进心，但却有点放不下，所以想要知道未来感情的发展。后分析出结果改男友性格上有点极端，并叮嘱女客户尽量分手，千万不要与男友有正面冲突。
            </div>
          </div>
          <div class="i-list">
            <div class="i-list-name">【案例一】</div>
            <div class="i-list-content">
              一位女客户找到我，与其男友交往3年有余，期间觉得男友不太有上进心，但却有点放不下，所以想要知道未来感情的发展。后分析出结果改男友性格上有点极端，并叮嘱女客户尽量分手，千万不要与男友有正面冲突。
            </div>
          </div>
        </div>
        <div class="arrow animate__animated animate__infinite animate__fadeIn" @click="arrowUpFunc"></div>
      </div>
      <!-- 平台 -->
      <div class="content-platform" :class="{'animate__fadeOutDown animate__animated': ClassStatus, 'fadeInUp animate__animated': !ClassStatus}" v-show="platFormStatus">
        <div class="detail" @click="detailFunc">
          <img src="../assets/icon/arrow_down.png">详细资料
        </div>
        <div class="content">
          <div class="item">
            <div class="i-title">平台寄语</div>
            <div class="i-content">
              <img src="../assets/icon/syh.png">
              <span>这里是编辑对塔罗师的介绍语录这里是编辑对塔罗师的介绍语录这里是编辑对塔罗师的介绍语录这里是编辑对塔罗师的介绍语录这里是编辑对塔罗师的介绍语录这里是编辑对塔罗师的介绍语录</span>
              <img class="img-right" src="../assets/icon/xyh.png">
            </div>
            <div class="i-plan">
              <div class="i-plan-title">塔罗精选计划</div>
              <div class="i-plan-content">保护隐私·支持退款·5轮甄选·资料真实·伦理审查</div>
            </div>
          </div>
          <div class="item">
            <div class="i-title">服务</div>
            <div class="i-tip">
              <span>*支持文字、语音、通话</span>
              <span>*私人订制咨询方案</span>
            </div>
            <div class="i-box">
              <div class="i-box-title">
                <div class="t-icon">
                  <i></i>
                </div>
                <div class="t-name">本名星盘</div>
                <div class="t-price">￥88</div>
                <div class="t-oldPrice">￥500</div>
              </div>
              <div class="i-box-main">
                <p>本案例分析包括但不限于：</p>
                <p>·个人性格</p>
                <p>·适合什么样的职业</p>
                <p>·拥有怎样的财运</p>
                <p>·婚姻如何</p>
                <p>·父母以及个人或者伴侣的健康如何</p>
              </div>
              <div class="i-box-button">立即咨询</div>
            </div>
            <div class="i-box">
              <div class="i-box-title">
                <div class="t-icon">
                  <i></i>
                </div>
                <div class="t-name">本名星盘</div>
                <div class="t-price">￥88</div>
                <div class="t-oldPrice">￥500</div>
              </div>
              <div class="i-box-main">
                <p>本案例分析包括但不限于：</p>
                <p>·个人性格</p>
                <p>·适合什么样的职业</p>
                <p>·拥有怎样的财运</p>
                <p>·婚姻如何</p>
                <p>·父母以及个人或者伴侣的健康如何</p>
              </div>
              <div class="i-box-button">立即咨询</div>
            </div>
            <div class="i-box">
              <div class="i-box-title">
                <div class="t-icon">
                  <i></i>
                </div>
                <div class="t-name">本名星盘</div>
                <div class="t-price">￥88</div>
                <div class="t-oldPrice">￥500</div>
              </div>
              <div class="i-box-main">
                <p>本案例分析包括但不限于：</p>
                <p>·个人性格</p>
                <p>·适合什么样的职业</p>
                <p>·拥有怎样的财运</p>
                <p>·婚姻如何</p>
                <p>·父母以及个人或者伴侣的健康如何</p>
              </div>
              <div class="i-box-button">立即咨询</div>
            </div>
          </div>
          <div class="item">
            <div class="i-title">
              评价反馈
              <span>查看546名用户真实评价</span>
            </div>
            <div class="i-evaluate">
              <div class="e-left">
                <span>4.9</span>
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
              <div class="i-swiper-list">
                <div class="list-top">
                  <div class="top-userinfo">
                    <img src="../assets/icon/photo.png">
                    <span>182****5656</span>
                  </div>
                  <div class="top-buyType">
                    <span>已购买</span>
                    <span class="color">[婚恋感情]</span>
                  </div>
                </div>
                <div class="list-tips">
                  <p>专业技术厉害</p>
                  <p>良师益友</p>
                  <p>细致耐心</p>
                </div>
                <div class="list-main">AI占卜很厉害，很快很准确的就找到了我需要的占卜。</div>
                <div class="list-time">2020-07-27</div>
              </div>
              <div class="i-swiper-list">
                <div class="list-top">
                  <div class="top-userinfo">
                    <img src="../assets/icon/photo.png">
                    <span>182****5656</span>
                  </div>
                  <div class="top-buyType">
                    <span>已购买</span>
                    <span class="color">[婚恋感情]</span>
                  </div>
                </div>
                <div class="list-tips">
                  <p>专业技术厉害</p>
                  <p>良师益友</p>
                  <p>细致耐心</p>
                </div>
                <div class="list-main">AI占卜很厉害，很快很准确的就找到了我需要的占卜。</div>
                <div class="list-time">2020-07-27</div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="i-title">咨询师动态</div>
            <div class="i-wechat">
              <div class="i-wechat-list">
                <div class="wechat-time">
                  24<span>7月</span>
                </div>
                <div class="wechat-content">
                  <span>这里是是咨询师动态详情这里是是咨询师动态详情这里是是咨询师动态详情这里是是咨询师动态详情这里是是咨询师动态详情</span>
                  <div class="wechat-c-image">
                    <img src="../assets/images/report_bg_1.jpg">
                    <img src="../assets/images/report_bg_2.jpg">
                    <img src="../assets/images/report_bg_3.jpg">
                    <img src="../assets/images/report_bg_2.jpg">
                    <img src="../assets/images/report_bg_3.jpg">
                  </div>
                </div>
              </div>
              <div class="i-wechat-list">
                <div class="wechat-time">
                  24<span>7月</span>
                </div>
                <div class="wechat-content">
                  <span>这里是是咨询师动态详情这里是是咨询师动态详情这里是是咨询师动态详情这里是是咨询师动态详情这里是是咨询师动态详情</span>
                  <div class="wechat-c-image">
                    <img src="../assets/images/report_bg_1.jpg">
                    <img src="../assets/images/report_bg_2.jpg">
                    <img src="../assets/images/report_bg_3.jpg">
                    <img src="../assets/images/report_bg_2.jpg">
                    <img src="../assets/images/report_bg_3.jpg">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="buy">
          <img src="../assets/icon/follow.png">
          <div class="buy-button">购买TA的服务</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDiviner } from '@/fetch/api'
export default {
  name: "tarot",
  data() {
    return {
      titleActive: false,
      ClassStatus: false, // 动画状态
      introStatus: false, // 介绍状态
      platFormStatus: true // 平台状态
    }
  },
  methods: {
    /**
     * 详细资料
     */
    detailFunc () {
      this.ClassStatus = true
      this.introStatus = true
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
      setTimeout(() => {
        this.introStatus = false
      }, 300)
    },
    /**
     * 滚动加载
     */
    scrollFunc (e) {
      this.titleActive = e.srcElement.scrollTop > 100
    }
  },
  mounted () {
    /**
     * 获取数据
     */
    getDiviner({
      leibie: -1,
      userid: this.$route.query.id
    }).then(res => {
      console.log(res)
    })
  }
}
</script>
