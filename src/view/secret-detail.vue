<style lang="less" scoped>
  .wrapper-secret {
    width: 100%;
    height: 100%;
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
    .main-secret {
      height: calc(100vh - 2.8rem);
      margin: .3rem .4rem 0;
      border-radius: .1rem;
      box-sizing: border-box;
      background: #e5d8cf;
      overflow: auto;
      .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: .2rem;
        padding: .3rem;
        box-sizing: border-box;
        .info-title {
          display: flex;
          align-items: center;
          color: rgba(81, 51, 40, .8);
          margin: 0 0 .1rem 0;
          i {
            display: inline-block;
            font-size: .24rem;
            font-weight: bold;
            font-family: fontXp;
            margin: 0 .1rem 0 0;
          }
        }
        .intro {
          color: rgba(81, 51, 40, .8);
          font-size: .22rem;
          line-height: .3rem;
        }
        .info-detail {
          color: #513328;
          font-size: .24rem;
          line-height: .3rem;
          text-indent: 1em; 
          margin: .1rem 0 0 0;
        }
      }
    }
  }
</style>

<template>
  <Cont>  
    <div class="wrapper-secret">
      <div class="title">
        <i class="icon return" @click="$router.go(-1)"></i>
        <span>星盘解密</span>
      </div>
      <div class="main-secret">
        <div class="info">
          <div class="info-title">
            <i>{{ totalData.font }}</i>
            {{ totalData.keywords }}</div>
          <div class="intro">{{ totalData.timu }}</div>
          <div class="info-detail" v-html="totalData.content"></div>
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
import { getData_XP } from '@/fetch/api'
import {
  BaseInfoData_1
} from '@/assets/json/xp'
export default {
  name: 'secretDetail',
  data () {
    return {
      totalData: {}
    }
  },
  components: {
    Cont
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      getData_XP({
        itemid: this.$route.query.itemid,
        actiontype: 7
      }).then(res => {
        BaseInfoData_1.map(item => {
          if (item.name === res.infos.flag) return res.infos.font = item.flag
        })
        this.totalData = Object.assign(res.infos, {
          content: `【解答】${res.infos.content}`
        })
      })
    },
    /**
     * 跳转占星师
     */
    divineFunc () {
      this.$router.push({
        path: '/worker',
        query: {
          from: 'app'
        }
      })
    }
  }
}
</script>
