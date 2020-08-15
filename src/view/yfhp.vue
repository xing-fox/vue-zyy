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
    height: calc(100vh - 3.3rem);
    margin: 0.4rem 0.4rem 0;
    box-sizing: border-box;
    overflow: auto;
    .yfhp-content {
      width: 100%;
      height: 100%;
      position: relative;
      .yfhp-content-bg {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .yfhp-content-main {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        .yfhp-box {
          width: 4.35rem;
          height: 4.58rem;
          transition: All 3s ease;
          transform-origin: 50% 50%;
          position: relative;
          background: url("../assets/images/hp-bg2.png") no-repeat;
          background-size: 100% 100%;
          &.active {
            transform: rotate(720deg);
            -webkit-transform: rotate(720deg);
            -moz-transform: rotate(720deg);
            -o-transform: rotate(720deg);
            -ms-transform: rotate(720deg);
          }
          .heart {
            display: inline-block;
            position: absolute;
            left: 50%;
            top: 50%;
            width: 0.9rem;
            height: 0.84rem;
            margin: -0.42rem 0 0 -0.45rem;
            background: url("../assets/images/hp-img2.png") no-repeat;
            background-size: 100% 100%;
          }
          & > div {
            position: absolute;
            background: url("../assets/images/hp-add.png") no-repeat;
            background-size: 100% 100%;
            width: 1.73rem;
            height: 1.73rem;
            img {
              display: block;
              width: 100%;
              height: 100%;
            }
            span {
              position: absolute;
              width: 100%;
              font-size: 0.3rem;
              color: #fff;
              left: 0;
              line-height: 0.8rem;
              text-align: center;
            }
          }
          .left {
            left: -0.5rem;
            top: 0.5rem;
            transition: all 1s ease;
            &.active {
              top: calc(50% - .865rem);
              left: calc(50% - .865rem);
            }
            span {
              top: -0.7rem;
            }
          }
          .right {
            right: -0.5rem;
            bottom: 0.5rem;
            transition: all 1s ease;
            &.active {
              right: calc(50% - .865rem);
              bottom: calc(50% - .865rem);
            }
            span {
              bottom: -0.7rem;
            }
          }
        }
      }
    }
  }
  .menu-content {
    padding: .3rem 0;
    ul>li {
      color: #7f665c;
      font-size: .22rem;
      display: flex;
      align-items: center;
      height: .9rem;
      padding: 0 .25rem;
      position: relative;
      &.active {
        cursor: not-allowed;
        pointer-events: none;
        background: #cec3bb;
      }
      &:after {
        border-bottom: 1px solid #d8b293; 
      }
      .name {
        flex: 1;
      }
      .icon {
        width: .4rem;
        height: .4rem;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        &.edit {
          margin: 0 .1rem 0 0;
          background-position: left center;
          background-image: url('../assets/images/edit.png');
        }
        &.delete {
          background-position: right center;
          background-image: url('../assets/images/delete.png');
        }
      }
    }
    .create {
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
  .data-content {
    width: 6.5rem;
    padding: .3rem .25rem;
    box-sizing: border-box;
    ul>li {
      display: flex;
      align-items: center;
      color: #513328;
      font-size: .22rem;
      width: 100%;
      height: .7rem;
      position: relative;
      &:after {
        border-bottom: 1px solid #d8b293;
      }
    }
    .sure {
      color: #e5d8cf;
      font-size: .26rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 90%;
      height: .8rem;
      margin: .2rem auto 0;
      background: #b5341f;
      border-radius: 4px;
    }
  }
  .delete-content {
    width: 5.3rem;
    padding: .2rem .5rem .45rem;
    box-sizing: border-box;
    .tips {
      color: #513328;
      font-size: .24rem;
      display: flex;
      justify-content: center;
      width: 100%;
      margin: .5rem 0;
    }
    .button {
      display: flex;
      justify-content: space-between;
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
  <Cont>
    <div class="wrapper">
      <div class="title">
        <i class="icon return" @click="routeBack"></i>
        <span>缘分合盘</span>
      </div>
      <div class="main">
        <div class="yfhp-content">
          <img class="yfhp-content-bg" src="../assets/images/hp-bg.png">
          <div class="yfhp-content-main">
            <div :class="['yfhp-box', {'active': startHpStatus}]">
              <i class="heart"></i>
              <div :class="['left', {'active': startHpStatus}]" @click="hpData.active = false; getXpList()">
                <img :src="hpData.left.id ? hpData.left.imgs: hpData.left.img" />
                <span>{{ hpData.left.name }}</span>
              </div>
              <div :class="['right', {'active': startHpStatus}]" @click="hpData.active = true; getXpList()">
                <img :src="hpData.right.id ? hpData.right.imgs : hpData.right.img" />
                <span>{{ hpData.right.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="submit" @click="divineFunc">
        <span>开始合盘</span>
      </div>
      <!-- 建档列表 -->
      <van-popup v-model="menuStatus" position="bottom">
        <div class="menu-content">
          <ul>
            <li
              v-for="item in listData"
              :key="item.xpid"
              @click="choiseXp(item)"
              :class="['bor-b', {'active': (item.xpid == hpData.left.id) ||  (item.xpid == hpData.right.id)}]">
              <div class="name">{{ item.name }}</div>
              <i class="icon edit" @click.stop.prevent="listDetails(item.content)"></i>
              <i class="icon delete" @click.stop.prevent="deleteStatus = true; deleteXpId = item.xpid"></i>
            </li>
          </ul>
          <div class="create" @click="createFunc">新建档案</div>
        </div>
      </van-popup>
      <!-- 个人资料 -->
      <van-popup v-model="dataStatus" :style="{ 'border-radius': '4px' }">
        <div class="data-content">
          <ul>
            <li class="bor-b" v-for="(item, index) in listDetailData" :key="index">
              <div>{{ item }}</div>
            </li>
          </ul>
          <div class="sure" @click="dataStatus = false">确定</div>
        </div>
      </van-popup>
      <!-- 删除资料 -->
      <van-popup v-model="deleteStatus" :style="{ 'border-radius': '4px' }">
        <div class="delete-content">
          <div class="tips">是否确认删除此档案?</div>
          <div class="button">
            <div class="color-1" @click="deleteStatus = false">取消</div>
            <div class="color-2" @click="deleteData">确认</div>
          </div>
        </div>
      </van-popup>
    </div>
  </Cont>
</template>

<script>
import Cont from './content'
import { getData_XP } from '@/fetch/api'
import { setTimeout } from 'timers';
export default {
  name: 'yfhp',
  data () {
    return {
      from: this.$route.query.from, // app 内页跳转
      listData: [],
      listDetailData: [],
      menuStatus: false,
      dataStatus: false,
      deleteStatus: false,
      startHpStatus: false,
      hpData: {
        active: false,
        left: {
          id: '',
          img: require('../assets/images/hp-add.png'),
          imgs: require('../assets/images/hp-img.png'),
          name: '请选择'
        },
        right: {
          id: '',
          img: require('../assets/images/hp-add.png'),
          imgs: require('../assets/images/hp-img.png'),
          name: '请选择'
        }
      }
    }
  },
  components: {
    Cont
  },
  methods: {
    /**
     * 创建星盘
     */
    createFunc () {
      if (this.listData.length === 5) return this.$Toast('最多创建5个星盘，请删除后再次创建')
      this.$router.push({
        path: '/createFile',
        query: {
          type: 1,
          origin: 'hp'
        }
      })
    },
    /**
     * 星盘记录
     */
    getXpList () {
      this.menuStatus = true
      getData_XP({
        userid: this.$userId,
        actiontype: 3
      }).then(res => {
        this.listData = res.infos
      })
    },
    /**
     * 星盘记录详情
     */
    listDetails (data) {
      this.dataStatus = true
      this.listDetailData = data.split('<br>')
    },
    /**
     * 删除星盘记录
     */
    deleteData () {
      this.deleteStatus = true
      getData_XP({
        xpid: this.deleteXpId,
        userid: this.$userId,
        actiontype: 6
      }).then(res => {
        this.$Toast('删除成功！')
        this.deleteStatus = false
        this.listData = this.listData.filter(item => item.xpid !== this.deleteXpId)
        if (this.listData.length) {
          this.choiseXp(this.listData[0].xpid)
        } else {
          this.$Toast('暂无星盘，请先创建星盘')
          setTimeout(() => {
            this.$router.push({
              type: 1,
              path: '/createFile'
            })
          }, 1000)
        }
      })
    },
    /**
     * 开始合盘
     */
    divineFunc () {
      if (!this.hpData.left.id || !this.hpData.right.id) return this.$toast('请先选择合盘信息')
      this.startHpStatus = true
      getData_XP({
        actiontype: 9,
        userid: this.$userId,
        xingpan01id: this.hpData.left.id,
        xingpan02id: this.hpData.right.id
      }).then(res => {
        if (res.result == 1) {
          // this.$toast('合盘成功')
          setTimeout(() => {
            this.$router.push({
              path: '/bjp'
            })
          }, 1000)
        }
      })
    },
    /**
     * 选择合盘用户
     */
    choiseXp (data) {
      this.menuStatus = false
      if (!this.hpData.active) {
        this.hpData.left.id = data.xpid
        this.hpData.left.name = data.name
      } else {
        this.hpData.right.id = data.xpid
        this.hpData.right.name = data.name
      }
    },
    /**
     * 返回
     */
    routeBack () {
      // from: app 主路径是H5app
      // type: 1 本命盘主动跳转
      // type: 0 本名盘自动跳转
      if (this.$route.query.type == 1) return this.$router.go(-1)
      if (this.$route.query.type == 0 && this.$route.query.from == 'app') return this.$router.go(-2)
      if (this.$route.query.type == 0 && !this.$route.query.from) return window.fortune.closepage()
    }
  }
}
</script>
