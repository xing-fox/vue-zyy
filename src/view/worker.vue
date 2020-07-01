<style lang="less" scoped>
  .wrapper {
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
      height: calc(100vh - 2rem);
      margin: .3rem .4rem 0;
      box-sizing: border-box;
      overflow: auto;
      ul>li {
        display: flex;
        align-items: center;
        width: 100%;
        height: 2.9rem;
        img {
          width: 2.1rem;
          height: 2.9rem;
          border-radius: 4px;
        }
        .intro {
          flex: 1;
          height: 2.6rem;
          padding: .15rem 0 .15rem .2rem;
          border-radius: 0 .1rem .1rem 0;
          background: #e8dad2;
          .intro-top {
            display: flex;
            color: rgba(81, 51, 40, .45);
            font-size: .22rem;
            p {
              &:nth-child(2) {
                margin: 0 .2rem;
                padding: 0 .2rem;
                position: relative;
                &:before {
                  border-left: 1px solid rgba(81, 51, 40, .45);
                }
                &:after {
                  border-right: 1px solid rgba(81, 51, 40, .45);
                }
              }
              span {
                color: rgba(81, 51, 40, 1);
                margin: 0 .1rem 0;
              }
            }
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
        <span>占星师</span>
      </div>
      <div class="content">
        <ul>
          <li>
            <img src="../assets/images/user.jpg">
            <div class="intro">
              <div class="intro-top">
                <p><span>162</span>粉丝</p>
                <p class="bor-l bor-r"><span>162</span>评价</p>
                <p><span>162</span>解答</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </Cont>  
</template>

<script>
import Cont from './content'
export default {
  name: 'worker',
  components: {
    Cont
  }
}
</script>
