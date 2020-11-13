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
        background-image: url("../assets/icon/experticon.png");
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
    height: calc(100vh - 2.7rem);
    padding: .4rem .4rem 0;
    box-sizing: border-box;
    overflow: auto;
    .item-2 {
      height: 100%;
      box-sizing: border-box;
      overflow-y: auto;
      .list-item {
          display: flex;
          align-items: center;
          flex-direction: column;
          align-items: stretch;
          padding: .2rem;
          margin: 0 0 .25rem;
          border-radius: .06rem;
          box-sizing: border-box;
          background: rgba(229, 216, 207, .5);
          &:last-child {
            padding-bottom: 0;
            border-bottom: 0;
          }
          .img {
            width: 100%;
            height: 3rem;
            border-radius: .06rem;
            margin-right: .2rem;
            overflow: hidden;
            background-color: #aeaeae;
            display: flex;
            justify-content: center;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .right {
            flex: 1;
            display: flex;
            flex-direction: column;
          }
          .info {
            flex: 1;
            color: #cecece;
            font-size: .24rem;
            margin: .05rem 0;
            line-height: .3rem;
            .info-name {
              color: #fff;
              font-size: .3rem;
              line-height: .4rem;
              margin: .1rem 0;
            }
          }
          .bottom {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            font-size: .22rem;
            line-height: .4rem;
            .num {
              font-size: .22rem;
              color: #513328;
              padding-left: .32rem;
              background:url(../assets/images/icon-play.png) left center no-repeat;
              background-size: .24rem .24rem;
            }
            .price {
              color:#B73724;
            }
          }
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
.van-cell,
.van-collapse-item__content {
  background: initial;
}
.tlyjy .van-cell::after {
  transform: scaleY(0.5);
  border-bottom-color: #c8b7ae;
}
.tlyjy .van-cell--clickable:active {
  background-color: rgba(0, 0, 0, 0);
}
</style>

<template>
  <Cont>
    <div class="wrapper">
      <template>
        <div class="title">
          <i class="icon return" @click="routeBack"></i>
          <span>塔罗课堂</span>
          <i class="tips" @click="tipFunc"></i>
        </div>
        <ul class="nav bor-b" v-if="navList.length && navList.length > 1">
          <li
            v-for="(item, index) in navList"
            :key="index"
            :class="{ active: index == navIndex }"
            @click="changeNav(index)">
            {{ item.title }}
          </li>
        </ul>
        <div class="main tlyjy" v-if="navList.length">
          <div class="item-2">
            <div
              class="list-item"
              v-for="(item, eq) in navList[navIndex].edus"
              :key="eq"
              @click="goTo(item.id)">
              <div class="img">
                <img :src="item.pic" />
              </div>
              <div class="right">
                <div class="info">
                  <div class="info-name">{{ item.name }}</div>
                  <p>{{ item.nametip }}</p>
                </div>
                <div class="bottom">
                  <div class="num">{{ item.views }}</div>
                  <div class="price">{{ item.lessonstip }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <router-view></router-view>
    </div>
  </Cont>
</template>

<script>
import Cont from "./content";
import { getTarot } from "@/fetch/api";
export default {
  name: "tlyjy",
  data() {
    return {
      /**
       * 导航
       */
      navIndex: 0,
      navList: []
    }
  },
  components: {
    Cont
  },
  methods: {
    /**
     * 切换导航
     */
    changeNav(eq) {
      this.navIndex = eq
    },
    /**
     * 导师tip
     */
    tipFunc () {
      window.fortune.openactivity('com.fairytale.webpage.WebAcvitity','weburl_tag','http://newos.glassmarket.cn/webapps/jumper/index.php','extra_info_tag', 'jumpertype=5', '0', '0')
    },
    /**
     * 页面跳转
     */
    goTo(id) {
      this.$router.push({
        path: "/tlyjy/tlkt",
        query: {
          id: id,
          from: "app"
        }
      });
    },
    /**
     * 获取塔罗牌
     */
    getData() {
      getTarot({
        actiontype: 5,
        userid: this.$userId
      }).then(({ infos }) => {
        this.navList = infos.alledus
      })
    },
    /**
     * 返回
     */
    routeBack() {
      if (this.from == "app") return this.$router.go(-1)
      return window.fortune.closepage()
    }
  },
  mounted() {
    this.getData()
  }
}
</script>
