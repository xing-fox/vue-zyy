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
      padding: .2rem 0;
      margin: .4rem .4rem 0;
      border-radius: .1rem;
      box-sizing: border-box;
      background: #e5d8cf;
      .item {
        display: flex;
        align-items: center;
        height: .7rem;
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
        .info {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          input {
            -webkit-appearance: none;
            color: #513328;
            font-size: .24rem;
            width: 100%;
            height: .24rem;
            text-align: right;
            border: none;
            background: none;
          }
        }
      }
    }
  }
</style>
<style>
  .van-radio--horizontal {
    margin: 0 0 0 8px;
  }
</style>

<template>
  <Cont>
    <div class="wrapper">
      <div class="title">
        <i class="icon return" @click="$router.go(-1)"></i>
        <span>新建档案</span>
      </div>
      <div class="content">
        <div class="item bor-b">
          <div class="name">姓名</div>
          <div class="info">
            <input type="text" v-model="formData.name" placeholder="请输入姓名">
          </div>
        </div>
        <div class="item bor-b">
          <div class="name">性别</div>
          <div class="info">
            <van-radio-group v-model="formData.sex" direction="horizontal">
              <van-radio :name="1" icon-size="16px">男</van-radio>
              <van-radio :name="2" icon-size="16px">女</van-radio>
            </van-radio-group>
          </div>
        </div>
        <div class="item bor-b">
          <div class="name">出生日期</div>
          <div class="info" @click="showDatePicker = true">
            <input type="text" disabled v-model="formData.date" placeholder="请选择日期">
            <van-icon name="notes-o" size="18" style="margin: 0 0 0 5px;" />
          </div>
        </div>
        <div class="item bor-b">
          <div class="name">出生地点</div>
          <div class="info" @click="showCityPicker = true">
            <input type="text" disabled v-model="formData.addr" placeholder="请选择">
            <van-icon name="arrow-down" size="18" style="margin: 0 0 0 5px;" />
          </div>
        </div>
        <div class="item bor-b">
          <div class="name">是否夏令时</div>
          <div class="info">
            <van-switch v-model="formData.checked" size="18px" active-color="#7f665c" inactive-color="#eee" />
          </div>
        </div>
      </div>
      <div class="submit">完成</div>
      <van-popup v-model="showDatePicker" position="bottom">
        <van-datetime-picker v-model="currentDate" type="datetime" title="请选择日期" @cancel="showDatePicker = false" @confirm="confirmDate" />
      </van-popup>
      <van-popup v-model="showCityPicker" position="bottom">
        <van-area title="请选择" :area-list="areaList" :columns-placeholder="addrCityPlaceholder" @cancel="showCityPicker = false" @confirm="confirmCity" />
      </van-popup>
    </div>
  </Cont>
</template>

<script>
import Cont from './content'
import Area from '@/assets/json/area'
export default {
  name: 'createfile',
  data () {
    return {
      currentDate: new Date(),
      showDatePicker: false,
      addrCityPlaceholder: [],
      showCityPicker: false,
      areaList: Area,
      formData: {
        addr: '',
        date: '',
        name: '',
        sex: 1,
        checked: false
      }
    }
  },
  components: {
    Cont
  },
  methods: {
    confirmDate (data) {
      this.showDatePicker = false
      this.currentDate = data
      this.formData.date = this.$moment(data).format('YYYY-MM-DD HH:mm')
    },
    confirmCity (data) {
      this.showCityPicker = false
      this.addrCityPlaceholder = data.map(item => item.name)
      this.formData.addr = data.map(item => item.name).join('-')
    }
  }
}
</script>
