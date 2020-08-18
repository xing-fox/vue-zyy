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
  .main {
    height: calc(100vh - 1.2rem);
    padding: .4rem .4rem 0;
    box-sizing: border-box;
    overflow: auto;
    .van-collapse-item {
      background-color:#E5D8CF;
      border-radius:.06rem;
      overflow: hidden;
      margin-bottom: .2rem;
      .img {
        width: 1.1rem;
        height: 1.1rem;
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
        margin: auto;
        background:url(../assets/images/icon-arrow.png) no-repeat;
        background-size: 100% 100%;
        transition: all .3s ease;
      }
    }
    .van-collapse-item__title--expanded {
      .arrow {
        transform: rotate(180deg);
      }
    }
    .collapse-title {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .list-box {
      .list-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: .2rem;
        &:last-child {
          margin-bottom: 0;
        }
        .img {
          width: .9rem;
          height: .9rem;
          margin-left: .4rem;
        }
        h5 {
          font-weight: normal;
        }
        .arrow {
          transform: rotate(270deg);
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
        <span>塔罗研究院</span>
      </div>
      <div class="main tlyjy">
        <van-collapse v-model="activeNames" accordion :border="false">
          <van-collapse-item v-for="(item, index) in listData" :name="index" :key="index">
            <div slot="title" class="collapse-title">
              <div class="img"></div>
              <div class="info">
                <h5>{{ item.typeName }}</h5>
                <p>{{ item.desc }}</p>
              </div>
            </div>
            <div slot="right-icon" class="arrow"></div>
            <div class="list-box">
              <div class="list-item" v-for="(ite, ind) in item.child" :key="'item' + index + ind">
                <div class="img"></div>
                <div class="info">
                  <h5>{{ ite.name }}</h5>
                  <p>{{ ite.desc }}</p>
                </div>
                <div class="arrow"></div>
              </div>
            </div>
          </van-collapse-item>
          <van-collapse-item v-for="(item, index) in listData" :name="index" :key="index">
            <div slot="title" class="collapse-title">
              <div class="img"></div>
              <div class="info">
                <h5>{{ item.typeName }}</h5>
                <p>{{ item.desc }}</p>
              </div>
            </div>
            <div slot="right-icon" class="arrow"></div>
            <div class="list-box">
              <div class="list-item" v-for="(ite, ind) in item.child" :key="'item' + index + ind">
                <div class="img"></div>
                <div class="info">
                  <h5>{{ ite.name }}</h5>
                  <p>{{ ite.desc }}</p>
                </div>
                <div class="arrow"></div>
              </div>
            </div>
          </van-collapse-item>
        </van-collapse>
      </div>
    </div>
  </Cont>
</template>

<script>
import Cont from './content'
export default {
  name: 'tlyjy',
  data () {
    return {
      activeNames: 0,
      listData: [
        {
          img: '',
          typeName: '牌面类型',
          desc: '包含大阿卡纳、小阿卡纳，宫廷牌三种模式',
          child: [{
            img: '',
            name: '大阿卡纳',
            desc: '22张大阿卡纳牌'
          }, {
            img: '',
            name: '小阿卡纳',
            desc: '22张大阿卡纳牌'
          }, {
            img: '',
            name: '宫廷牌',
            desc: '22张大阿卡纳牌'
          }]
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
