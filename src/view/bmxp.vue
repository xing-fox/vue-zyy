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
      padding: .4rem .4rem 0;
      i {
        display: inline-block;
        width: .8rem;
        height: .8rem;
        background-size: 50% 50%;
        background-repeat: no-repeat;
        &.return {
          background-position: left center;
          background-image: url('../assets/icon/icon_return.png');
        }
        &.menu {
          background-position: right center;
          background-image: url('../assets/icon/icon_menu.png');
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
      height: calc(100vh - 3.8rem);
      margin: .3rem .4rem 0;
      border-radius: .1rem;
      box-sizing: border-box;
      overflow: auto;
      .item-1 {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100%;
        border-radius: .1rem;
        background: #e5d8cf;
        position: relative;
        .item-1-title {
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: #48291E;
          font-size: .26rem;
          text-align: center;
          position: absolute;
          top: .7rem;
          span {
            margin: 0 0 .2rem;
            &:first-child {
              font-weight: bold;
            }
          }
        }
        img {
          width: 90%;
          border-radius: 50%;
        }
        .tab {
          width: .97rem;
          height: .35rem;
          background-image: url('../assets/images/canshu.jpg');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          position: absolute;
          right: .35rem;
          bottom: .5rem;
        }
      }
      .item-2 {
        .list {
          width: 100%;
          height: 3.6rem;
          margin: 0 0 .1rem 0;
          border: .04rem solid #9f6c49;
          border-radius: .1rem;
          box-sizing: border-box;
          background-size: 100% 100%;
          background-repeat: no-repeat;
          position: relative;
          &.list-1 {
            background-image:url('../assets/images/report_bg_1.jpg');
          }
          &.list-2 {
            background-image:url('../assets/images/report_bg_2.jpg');
          }
          &.list-3 {
            background-image:url('../assets/images/report_bg_3.jpg');
          }
          &.list-4 {
            background-image:url('../assets/images/report_bg_4.jpg');
          }
          &:before {
            content: '';
            border: .04rem solid #c4916b;
            border-radius: .06rem;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }
          .lock {
            display: flex;
            align-items: center;
            justify-content: center;
            width: .54rem;
            height: .75rem;
            border-radius: 0 0 .27rem .27rem;
            background: #b93825;
            position: absolute;
            top: .1rem;
            right: .3rem;
            img {
              width: .4rem;
            }
          }
        }
      }
      .item-3 {
        min-height: 100%;
        padding: .2rem 0 0 0;
        box-sizing: border-box;
        background: #e5d8cf;
        .list {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 1.1rem;
          margin: 0 .2rem;
          position: relative;
          &:after {
            border-bottom: 1px solid #d8b293; 
          }
          &:last-child {
            border-bottom: none;
          }
          .info {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-size: .23rem;
            .info-title {
              display: flex;
              align-items: center;
              color: rgba(81, 51, 40, .65);
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
              color: #513328;
              line-height: .3rem;
            }
          }
          .status {
            width: .4rem;
            height: .4rem;
            margin: 0 0 0 .2rem;
            background-image: url('../assets/images/lock_1.jpg');
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
        }
      }
      .item-4 {
        .list {
          margin: 0 0 .2rem 0;
          padding: .3rem .2rem .1rem;
          border-radius: .1rem;
          background: #e5d8cf;
          .list-title {
            color: #b73724;
            font-size: .24rem;
            font-weight: bold;
          }
          .intro-1 {
            height: 1rem;
            display: flex;
            align-items: center;
            position: relative;
            &:after {
              border-bottom: 1px solid #d8b293; 
            }
            &:last-child:after,
            &:nth-last-child(2):after {
              content: none;
            }
            .icon {
              display: flex;
              align-items: center;
              justify-content: center;
              color: #fff;
              font-size: .3rem;
              font-family: fontXp;
              width: .64rem;
              height: .64rem;
              border-radius: .32rem;
              background: #ac927f;
            }
            .info {
              flex: 1;
              margin: 0 0 0 .2rem;
              .name {
                color: #513328;
                font-size: .22rem;
                font-weight: 500;
                margin: 0 0 .1rem 0;
              }
              .info-cont {
                color: rgba(81, 51, 40, .65);
                font-size: .2rem;
                font-weight: bold;
              }
            }
            .time {
              color: #513328;
              font-size: .28rem;
            }
          }
          .intro-2 {
            width: 100%;
            padding: .2rem;
            margin: .1rem 0 .2rem;
            border-radius: .1rem;
            box-sizing: border-box;
            background: #d6c5b9;
            .intro-2-list {
              display: flex;
              align-items: center;
              height: .8rem;
              position: relative;
              &:after {
                border-bottom: 1px solid #c9b4a6;
              }
              &:last-child:after {
                content: none;
              }
              .list-info {
                display: flex;
                align-items: center;
                color: #513328;
                font-size: .22rem;
                font-weight: bold;
                margin: 0 .4rem 0 0;
                span {
                  flex: 1;
                }
                .info-num {
                  color: #fff;
                  font-size: .24rem;
                  width: .4rem;
                  height: .4rem;
                  line-height: .42rem;
                  margin: 0 0 0 .1rem;
                  border-radius: 50%;
                  text-align: center;
                  box-sizing: border-box;
                  background: #ac927f;
                  &.color-1 {
                    background: #fe5756;
                  }
                  &.color-2 {
                    background: #f1a81b;
                  }
                  &.color-3 {
                    background: #47ba55;
                  }
                  &.color-4 {
                    background: #2194ca;
                  }
                }
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
          background: #d9cdc5;
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
      <template>
        <div class="title">
          <i class="icon return" @click="routeBack"></i>
          <span>本命星盘</span>
          <i class="icon menu" @click="getXpList"></i>
        </div>
        <ul class="nav bor-b">
          <li v-for="(item, index) in navList" :key="index" :class="{'active': index == navIndex}" @click="navIndex = index">{{ item }}</li>
        </ul>
        <div class="main">
          <div class="item item-1" v-if="navIndex == 0">
            <div class="item-1-title">
              <span>现代星盘</span>
              <span>Placidus</span>
            </div>
            <img :src="totalData.xingpanpic">
            <i class="tab" @click="navIndex = 3"></i>
          </div>
          <div class="item item-2" v-if="navIndex == 1">
            <van-pull-refresh v-model="itemSecondStatus" @refresh="itemSecondStatus = false">
              <div v-for="item in reportData" :key="item" :class="['list', `list-${item}`]" @click="reportDetailFunc(item)">
                <!-- <div class="lock">
                  <img src="../assets/images/lock_2.jpg">
                </div> -->
              </div>
            </van-pull-refresh>
          </div>
          <div class="item item-3" v-if="navIndex == 2">
            <van-pull-refresh v-model="itemSecondStatus" @refresh="itemSecondStatus = false">
              <div v-for="(list, eq) in totalData.timus" :key="list.jmid" class="list bor-b" @click="secretDetailFunc(list.jmid)">
                <div class="info">
                  <div class="info-title">
                    <i>{{ list.flag }}</i>
                    {{ list.keywords }}
                  </div>
                  <div class="intro">【已解锁】{{ list.timu }}</div>
                </div>
                <!-- <div class="status"></div> -->
              </div>
            </van-pull-refresh>
          </div>
          <div class="item item-4" v-if="navIndex == 3">
            <van-pull-refresh v-model="itemSecondStatus" @refresh="itemSecondStatus = false">
              <div class="list">
                <div class="list-title">行星信息</div>
                <div class="intro-1 bor-b" v-for="(item, index) in totalData.baseinfos" :key="index" v-show="(item.lati !== ' ') && item.weidu[0] != 0">
                  <div class="icon" :style="{'background': item.spec_1.color}">{{ item.spec_1.flag }}</div>
                  <div class="info">
                    <div class="name">{{ item.spec_1.value }}</div>
                    <div class="info-cont">{{ item.spec.value }}{{ item.house }}宫</div>
                  </div>
                  <div class="time">{{ `${item.weidu[0]}°${item.weidu[2]}′` }}</div>
                </div>
                <div class="intro-2">
                  <div class="intro-2-list bor-b">
                    <div class="list-info">
                      <span>火</span>
                      <div class="info-num color-1">{{ totalData.others.fir }}</div>
                    </div>
                    <div class="list-info">
                      <span>土</span>
                      <div class="info-num color-2">{{ totalData.others.ear }}</div>
                    </div>
                    <div class="list-info">
                      <span>风</span>
                      <div class="info-num color-3">{{ totalData.others.air }}</div>
                    </div>
                    <div class="list-info">
                      <span>水</span>
                      <div class="info-num color-4">{{ totalData.others.wat }}</div>
                    </div>
                  </div>
                </div>
                <div class="intro-2">
                  <div class="intro-2-list bor-b">
                    <div class="list-info">
                      <span>基本</span>
                      <div class="info-num">{{ totalData.others.d }}</div>
                    </div>
                    <div class="list-info">
                      <span>固定</span>
                      <div class="info-num">{{ totalData.others.fix }}</div>
                    </div>
                    <div class="list-info">
                      <span>变动</span>
                      <div class="info-num">{{ totalData.others.mut }}</div>
                    </div>
                  </div>
                </div>
                <div class="intro-2">
                  <div class="intro-2-list bor-b">
                    <div class="list-info">
                      <span>东半球</span>
                      <div class="info-num">{{ totalData.others.m }}</div>
                    </div>
                    <div class="list-info">
                      <span>西半球</span>
                      <div class="info-num">{{ totalData.others.n }}</div>
                    </div>
                  </div>
                </div>
                <div class="intro-2">
                  <div class="intro-2-list bor-b">
                    <div class="list-info">
                      <span>南半球</span>
                      <div class="info-num">{{ totalData.others.a }}</div>
                    </div>
                    <div class="list-info">
                      <span>北半球</span>
                      <div class="info-num">{{ totalData.others.car }}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="list">
                <div class="list-title">相位信息</div>
                <div class="intro-1 bor-b" v-for="(item, index) in totalData.xiangweis" :key="index">
                  <div class="icon" :style="{'background': item.color}">{{ item.flag }}</div>
                  <div class="info">
                    <div class="name">{{ item.xingxing01_name }}</div>
                    <div class="info-cont">{{ item.xingxing02_name }}</div>
                  </div>
                  <div class="time">{{ item.xiangwei_name }}</div>
                </div>
              </div>
              <div class="list">
                <div class="list-title">宫位信息</div>
                <div class="intro-1 bor-b" v-for="(item, index) in totalData.gongweis" :key="index">
                  <div class="icon" :style="{'background': item.color}">{{ item.flag }}</div>
                  <div class="info">
                    <div class="name">{{ item.gongtou }}宫</div>
                    <div class="info-cont">{{ item.name }}</div>
                  </div>
                  <div class="time">{{ `${item.gongweiList[0]}°${item.gongweiList[2]}′` }}</div>
                </div>
              </div>
            </van-pull-refresh>
          </div>
        </div>
        <div class="submit" @click="divineFunc">
          <span>咨询占卜师</span>
        </div>
        <!-- 建档列表 -->
        <van-popup v-model="menuStatus" position="bottom">
          <div class="menu-content">
            <ul>
              <li v-for="item in listData" :key="item.xpid" @click="choiseXp(item.xpid)" :class="['bor-b', {'active': item.xpid == activeXpId}]">
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
      </template>
      <router-view />
    </div>
  </Cont>
</template>

<script>
import Cont from './content'
import { getData_XP } from '@/fetch/api'
import {
  BaseInfoData,
  BaseInfoData_1,
  BaseInfoData_2,
  BaseInfoData_3
} from '@/assets/json/xp'
export default {
  name: 'bmxp',
  data () {
    return {
      navIndex: 0,
      navList: ['星盘', '报告', '解密', '参数'],
      menuStatus: false,
      dataStatus: false,
      deleteStatus: false,
      itemSecondStatus: false,
      activeXpId: '', // 当前星盘id
      deleteXpId: '', // 删除当前星盘id
      totalData: {}, // 当前星盘数据
      listData: [], // 星盘记录
      reportData: [1, 2, 3, 4], // 报告数据
      listDetailData: [] // 当前星盘个人信息
    }
  },
  components: {
    Cont
  },
  mounted () {
    this.getXpData()
  },
  methods: {
    /**
     * 创建星盘
     */
    createFunc () {
      if (this.listData.length === 5) return this.$Toast('最多创建5个星盘，请删除后再次创建')
      this.$router.push({
        path: '/createFile'
      })
    },
    /**
     * 星盘数据
     */
    getXpData () {
      getData_XP({
        userid: this.$userId,
        actiontype: 5
      }).then(res => {
        if (res.result == 1) {
          /**
           * 基本数据
           */
          res.infos.baseinfos.map(item => {
            item.weidu = item.zodic.split('-')
            item.zodic = item.zodic.split('-')[1]
            for (let list of BaseInfoData) {
              if (item.zodic === list.name) item.spec = list
            }
            for (let list of BaseInfoData_1) {
              if (item.name === list.name) item.spec_1 = list
            }
          })
          /**
           * 解密信息
           */
          res.infos.timus.map(item => {
            for (let list of BaseInfoData_1) {
              if (item.flag === list.name) item.flag = list.flag
            }
          })
          /**
           * 相位信息
           */
          res.infos.xiangweis.map(item => {
            for (let list of BaseInfoData_1) {
              if (item.xingxing01 === list.name) {
                item.flag = list.flag
                item.color = list.color
                item.xingxing01_name = list.value
              }
              if (item.xingxing02 === list.name) item.xingxing02_name = list.value
            }
            for (let list of BaseInfoData_2) {
              if (item.xiangwei === list.name) item.xiangwei_name = list.value
            }
          })
          /**
           * 宫位信息
           */
          res.infos.gongweis.map(item => {
            item.gongweiList = item.gongwei.split('-')
            for (let data of BaseInfoData) {
              if (item.gongweiList[1] === data.name) {
                item.flag = data.flag
                item.name = data.value
                item.color = data.color
              }
            }
          })
          this.totalData = res.infos
          this.activeXpId = res.infos.xpid
        } else {
          this.$router.push({
            path: '/createFile',
            query: {
              from: 'app'
            }
          })
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
     * 切换星盘
     */
    choiseXp (id) {
      getData_XP({
        xpid: id,
        userid: this.$userId,
        actiontype: 4
      }).then(res => {
        this.menuStatus = false
        /**
           * 基本数据
           */
          res.infos.baseinfos.map(item => {
            item.weidu = item.zodic.split('-')
            item.zodic = item.zodic.split('-')[1]
            for (let list of BaseInfoData) {
              if (item.zodic === list.name) item.spec = list
            }
            for (let list of BaseInfoData_1) {
              if (item.name === list.name) item.spec_1 = list
            }
          })
          /**
           * 解密信息
           */
          res.infos.timus.map(item => {
            for (let list of BaseInfoData_1) {
              if (item.flag === list.name) item.flag = list.flag
            }
          })
          /**
           * 相位信息
           */
          res.infos.xiangweis.map(item => {
            for (let list of BaseInfoData_1) {
              if (item.xingxing01 === list.name) {
                item.flag = list.flag
                item.color = list.color
                item.xingxing01_name = list.value
              }
              if (item.xingxing02 === list.name) item.xingxing02_name = list.value
            }
            for (let list of BaseInfoData_2) {
              if (item.xiangwei === list.name) item.xiangwei_name = list.value
            }
          })
          /**
           * 宫位信息
           */
          res.infos.gongweis.map(item => {
            item.gongweiList = item.gongwei.split('-')
            for (let data of BaseInfoData) {
              if (item.gongweiList[1] === data.name) {
                item.flag = data.flag
                item.name = data.value
                item.color = data.color
              }
            }
          })
          this.totalData = res.infos
          this.activeXpId = res.infos.xpid
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
              path: '/createFile',
              query: {
                from: 'app'
              }
            })
          }, 1000)
        }
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
    },
    /**
     * 跳转报告详情页
     */
    reportDetailFunc (id) {
      this.$router.push({
        path: 'bmxp/reportDetail',
        query: {
          xpid: this.activeXpId,
          itemid: id
        }
      })
    },
    /**
     * 跳转星盘解密页
     */
    secretDetailFunc (id) {
      this.$router.push({
        path: 'bmxp/secretDetail',
        query: {
          itemid: id
        }
      })
    },
    /**
     * 返回
     */
    routeBack () {
      window.fortune.closepage()
    }
  }
}
</script>
