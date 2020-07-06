<style lang="less" scoped>
  .wrapper-detail {
    width: 100%;
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
    .main {
      height: calc(100vh - 2.8rem);
      margin: .3rem .4rem 0;
      border-radius: .1rem;
      box-sizing: border-box;
      overflow: auto;
      ul>li {
        color: #513328;
        width: 100%;
        margin: 0 0 .35rem 0;
        padding: .35rem .3rem;
        border-radius: .1rem;
        box-sizing: border-box;
        background: #e5d8cf;
        &:last-child {
          margin: 0 0 .1rem 0;
        }
        .list-title {
          display: flex;
          align-items: center;
          font-size: .24rem;
          width: 100%;
          .icon {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-family: fontMini;
            width: .4rem;
            height: .4rem;
            margin: 0 .15rem 0 0;
            border-radius: .2rem;
          }
          .name {
            flex: 1;
          }
          .time {
            font-size: .28rem;
            font-weight: bold;
          }
        }
        .list-content {
          font-size: .24rem;
          text-indent: 2em;
          line-height: .3rem;
          margin: .2rem 0 0 0;
        }
      }
    }
  }
</style>

<template>
  <Cont>
    <div class="wrapper-detail">
      <div class="title">
        <i class="icon return" @click="$router.go(-1)"></i>
        <span>本命星盘</span>
      </div>
      <div class="main">
        <ul>
          <li v-for="(item, index) in totalData" :key="item.index">
            <div class="list-title">
              <div class="icon" :style="{'background': item.flagcolor}">{{ item.flag }}</div>
              <span class="name">{{ item.title }}</span>
              <span class="time">{{ item.degree }}</span>
            </div>
            <div class="list-content">
              <span v-html="item.contentText.content"></span>
            </div>
          </li>
        </ul>
      </div>
      <div class="submit" @click="divineFunc">咨询占星师</div>
    </div>
  </Cont>
</template>

<script>
import Cont from './content'
import { getData_XP } from '@/fetch/api'
export default {
  name: 'bmxpDetails',
  data () {
    return {
      totalData: []
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
        xpid: this.$route.query.xpid,
        itemid: this.$route.query.itemid,
        actiontype: 2
      }).then(res => {
        let {
          contentinfos,
          titleinfos
        } = res.infos
        titleinfos.map(item => {
          item.contentText = contentinfos[item.tag] || {
            content: false
          }
        })
        titleinfos = titleinfos.filter(list => list.contentText.content)
        this.totalData = titleinfos
      })
    },
    /**
     * 跳转占星师
     */
    divineFunc () {
      this.$router.push({
        path: '/worker'
      })
    }
  }
}
</script>
