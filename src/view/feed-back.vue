<style lang="less" scoped>
  .feed-back {
    display: flex;
    flex-direction: column;
    font-size: 0;
    line-height: initial;
    width: 100vw;
    height: 100vh;
    background-image: url('../assets/images/bg_back.jpg');
    background-size: 100% auto;
    background-repeat: no-repeat;
    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: .36rem;
      width: 100%;
      height: 1rem;
      i {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        background-image: url('../assets/icon/left.png');
        background-size: 50% 50%;
        background-repeat: no-repeat;
        background-position: center center;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: .4rem;
      margin: .2rem 0 0 0;
      border-radius: .5rem .5rem 0 0;
      background: #fff;
      .cont-form {
        flex: 1;
        width: 100%;
        padding: .6rem 0 0 0;
        background: #effaff;
        input {
          -webkit-appearance: none;
          border: none;
          color: #999;
          font-size: .24rem;
          width: calc(100% - .6rem);
          height: .6rem;
          margin: 0 .3rem;
          border-bottom: 1px solid #ddd;
          box-sizing: border-box;
          background: none;
          position: relative;
        }
        textarea {
          -webkit-appearance: none;
          border: none;
          color: #999;
          font-size: .24rem;
          width: calc(100% - .6rem);
          min-height: 2rem;
          line-height: .5rem;
          padding: 2px 0;
          margin: 0 .3rem;
          background: none;
        }
      }
      .cont-submit {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: .28rem;
        width: 100%;
        height: .8rem;
        margin: .4rem 0 0 0;
        border-radius: .1rem;
        background: #2ea4ed;
      }
    }
  }
</style>

<template>
  <div class="feed-back">
    <div class="title">
      <i @click="routeBack"></i>
      <span>意见反馈</span>
    </div>
    <div class="content">
      <div class="cont-form">
        <input v-model="input" type="text" placeholder="请填写您的QQ，邮箱或者微信，方便我们再次联系您">
        <textarea v-model="textarea" placeholder="请写上您的意见和建议"></textarea>
      </div>
      <div class="cont-submit" @click="submit">提交</div>
    </div>
  </div>
</template>

<script>
import { getBack } from '@/fetch/api'
export default {
  name: 'feedBack',
  data () {
    return {
      input: '',
      textarea: ''
    }
  },
  methods: {
    submit () {
      if (!this.textarea) return this.$Toast('您还没有写上您的反馈意见')
      getBack({
        actiontype: 8,
        userinfo: this.input,
        content: this.textarea
      }).then(res => {
        if (res.result == 1) return window.fortune.closepage
      })
    },
    routeBack () {
      return window.fortune.closepage
    }
  }
}
</script>
