<style lang="less" scoped>
  .wrapper {
    font-size: 0;
    width: 100%;
    line-height: 1;
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
      box-sizing: border-box;
      overflow: auto;
      .item-1 {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100%;
        border-radius: .1rem;
        background: #000;
        img {
          width: 80%;
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
        border-radius: .1rem;
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
          .info {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-size: .2rem;
            .info-title {
              color: rgba(81, 51, 40, .65);
              margin: 0 0 .1rem 0;
            }
            .intro {
              color: #513328;
            }
          }
          .status {
            width: .4rem;
            height: .4rem;
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
              width: .7rem;
              height: .7rem;
              border-radius: .35rem;
              background: #f7a2a8;
            }
            .info {
              flex: 1;
              margin: 0 0 0 .2rem;
              .name {
                color: #513328;
                font-size: .22rem;
                font-weight: bold;
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
              font-weight: bold;
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
                .info-num {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: #fff;
                  font-size: .28rem;
                  width: .4rem;
                  height: .4rem;
                  margin: 0 0 0 .1rem;
                  border-radius: .2rem;
                  background: #ac927f;
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
      <div class="title">
        <i class="icon return" @click="$router.go(-1)"></i>
        <span>本命星盘</span>
        <i class="icon menu" @click="getXpList"></i>
      </div>
      <ul class="nav bor-b">
        <li v-for="(item, index) in navList" :key="index" :class="{'active': index == navIndex}" @click="navIndex = index">{{ item }}</li>
      </ul>
      <div class="main">
        <div class="item item-1" v-if="navIndex == 0">
          <img :src="totalData.xingpanpic">
        </div>
        <div class="item item-2" v-if="navIndex == 1">
          <van-pull-refresh v-model="itemSecondStatus" @refresh="itemSecondStatus = false">
            <div class="list list-1">
              <div class="lock">
                <img src="../assets/images/lock_2.jpg">
              </div>
            </div>
            <div class="list list-2">
              <div class="lock">
                <img src="../assets/images/lock_2.jpg">
              </div>
            </div>
            <div class="list list-3">
              <div class="lock">
                <img src="../assets/images/lock_2.jpg">
              </div>
            </div>
            <div class="list list-4">
              <div class="lock">
                <img src="../assets/images/lock_2.jpg">
              </div>
            </div>
          </van-pull-refresh>
        </div>
        <div class="item item-3" v-if="navIndex == 2">
          <van-pull-refresh v-model="itemSecondStatus" @refresh="itemSecondStatus = false">
            <div v-for="(list, eq) in totalData.timus" :key="list.jmid" class="list bor-b">
              <div class="info">
                <div class="info-title">{{ list.keywords }}</div>
                <div class="intro">{{ list.timu }}</div>
              </div>
              <div class="status"></div>
            </div>
          </van-pull-refresh>
        </div>
        <div class="item item-4" v-if="navIndex == 3">
          <div class="list">
            <div class="list-title">行星信息</div>
            <div class="intro-1 bor-b">
              <div class="icon">@</div>
              <div class="info">
                <div class="name">太阳</div>
                <div class="info-cont">射手座12宫</div>
              </div>
              <div class="time">16.10</div>
            </div>
            <div class="intro-1 bor-b">
              <div class="icon">@</div>
              <div class="info">
                <div class="name">太阳</div>
                <div class="info-cont">射手座12宫</div>
              </div>
              <div class="time">16.10</div>
            </div>
            <div class="intro-2">
              <div class="intro-2-list bor-b">
                <div class="list-info">
                  <span>火</span>
                  <div class="info-num">5</div>
                </div>
                <div class="list-info">
                  <span>火</span>
                  <div class="info-num">5</div>
                </div>
              </div>
              <div class="intro-2-list bor-b">
                <div class="list-info">
                  <span>火</span>
                  <div class="info-num">5</div>
                </div>
                <div class="list-info">
                  <span>火</span>
                  <div class="info-num">5</div>
                </div>
              </div>
            </div>
          </div>
          <div class="list">
            <div class="list-title">行星信息</div>
            <div class="intro-1 bor-b">
              <div class="icon">@</div>
              <div class="info">
                <div class="name">太阳</div>
                <div class="info-cont">射手座12宫</div>
              </div>
              <div class="time">16.10</div>
            </div>
          </div>
        </div>
      </div>
      <div class="submit" @click="divineFunc">咨询占卜师</div>
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
            <!-- <li class="bor-b">
              <div>性别：</div>
              <div>男</div>
            </li>
            <li class="bor-b">
              <div>出生日期：</div>
              <div>1995年4月3月 12时12分</div>
            </li>
            <li class="bor-b">
              <div>出生地点：</div>
              <div>内蒙古 赤峰市 洪山区</div>
            </li> -->
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
import { getData_XP } from '@/fetch/api'
import Cont from './content'
import { setTimeout } from 'timers';
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
     * 跳转占星师
     */
    divineFunc () {
      this.$router.push({
        path: '/worker'
      })
    },
    /**
     * 获取星盘数据
     */
    getXpData () {
      getData_XP({
        userid: 1,
        actiontype: 5
      }).then(res => {
        if (res.result == 1) {
          this.totalData = res.infos
          this.activeXpId = res.infos.xpid
        } else {
          this.$Toast('您还没有星盘，请先创建星盘')
          setTimeout(() => {
            this.$router.push({
              path: '/createFile'
            })
          }, 1000)
        }
      })
    },
    /**
     * 获取报告数据
     */
    getReportData () {
      getData_XP({
        userid: 1,
        actiontype: 3
      }).then(res => {
        console.log(res)
      })
    },
    /**
     * 获取星盘记录
     */
    getXpList () {
      this.menuStatus = true
      getData_XP({
        userid: 1,
        actiontype: 3
      }).then(res => {
        this.listData = res.infos
      })
    },
    /**
     * 记录详情
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
        userid: 1,
        actiontype: 6
      }).then(res => {
        this.$Toast('删除成功！')
        this.deleteStatus = false
        this.listData = this.listData.filter(item => item.xpid !== this.deleteXpId)
        if (this.listData.length) {
          getData_XP({
            xpid: this.listData[0].xpid,
            userid: 1,
            actiontype: 4
          }).then(res => {
            this.totalData = res.infos
            this.activeXpId = res.infos.xpid
          })
        } else {
          this.$Toast('暂无星盘，请先创建星盘')
          setTimeout(() => {
            this.$router.push({
              path: '/createFile'
            })
          }, 1000)
        }
      })
    }
  }
}
</script>
