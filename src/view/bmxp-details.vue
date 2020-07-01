<style lang="less" scoped>
  .wrapper {
    font-size: 0;
    width: 100%;
    line-height: 1;
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
    .main {
      height: calc(100vh - 2.8rem);
      margin: .3rem .4rem 0;
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
            width: .4rem;
            height: .4rem;
            margin: 0 .15rem 0 0;
            border-radius: .2rem;
            background: #f08894;
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
          line-height: .3rem;
          margin: .2rem 0 0 0;
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
      </div>
      <div class="main">
        <ul>
          <li>
            <div class="list-title">
              <div class="icon">&</div>
              <span class="name">太阳落入白羊座</span>
              <span class="time">16:10</span>
            </div>
            <div class="list-content">
              <span>太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座</span>
            </div>
          </li>
          <li>
            <div class="list-title">
              <div class="icon"></div>
              <span class="name">太阳落入白羊座</span>
              <span class="time">16:10</span>
            </div>
            <div class="list-content">
              <span>太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座</span>
            </div>
          </li>
          <li>
            <div class="list-title">
              <div class="icon"></div>
              <span class="name">太阳落入白羊座</span>
              <span class="time">16:10</span>
            </div>
            <div class="list-content">
              <span>太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座</span>
            </div>
          </li>
          <li>
            <div class="list-title">
              <div class="icon"></div>
              <span class="name">太阳落入白羊座</span>
              <span class="time">16:10</span>
            </div>
            <div class="list-content">
              <span>太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座</span>
            </div>
          </li>
          <li>
            <div class="list-title">
              <div class="icon"></div>
              <span class="name">太阳落入白羊座</span>
              <span class="time">16:10</span>
            </div>
            <div class="list-content">
              <span>太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座太阳落入白羊座</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="submit">咨询占星师</div>
    </div>
  </Cont>
</template>

<script>
import Cont from './content'
export default {
  name: 'bmxpDetails',
  components: {
    Cont
  }
}
</script>
