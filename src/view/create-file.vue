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
    .content {
      padding: .2rem 0;
      margin: .4rem .4rem 0;
      border-radius: .1rem;
      box-sizing: border-box;
      background: #e5d8cf;
      .item {
        display: flex;
        align-items: center;
        height: .6rem;
        margin: 0 .2rem;
        position: relative;
        &:after {
          border-bottom: 1px solid #c8b7ae; 
        }
        &:last-child:after {
          content: none;
        }
        .name {
          color: #513328;
          font-size: .2rem;
        }
      }
    }
  }
</style>

<template>
  <Cont>
    <div class="wrapper">
      <div class="title">
        <i class="icon return"></i>
        <span>新建档案</span>
      </div>
      <div class="content">
        <div class="item bor-b">
          <div class="name">姓名</div>
          <div class="info"></div>
        </div>
        <div class="item bor-b">
          <div class="name">性别</div>
          <div class="info"></div>
        </div>
        <div class="item bor-b">
          <div class="name">出生日期</div>
          <div class="info"></div>
        </div>
        <div class="item bor-b">
          <div class="name">出生地点</div>
          <div class="info"></div>
        </div>
        <div class="item bor-b">
          <div class="name">是否夏令时</div>
          <div class="info"></div>
        </div>
      </div>
      <div class="submit">完成</div>
    </div>
  </Cont>
</template>

<script>
import Cont from './content'
export default {
  name: 'createfile',
  components: {
    Cont
  }
}
</script>
