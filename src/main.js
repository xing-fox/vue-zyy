import Vue from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment'
// import Vconsole from 'vconsole'
import JsBridge from './JsBridge'
import { Form, RadioGroup, Radio, Switch, Icon, DatetimePicker, Picker, Popup, Area } from 'vant'
import 'vant/lib/index.less'

Vue.use(Icon)
Vue.use(Form)
Vue.use(Area)
Vue.use(Popup)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Switch)
Vue.use(Picker)
Vue.use(DatetimePicker)
// new Vconsole()

// const getUrlParam = val => {
//   const url = window.location.href
//   if (url.indexOf('?') === -1) return false
//   const vars = url.split('?')[1].split('&')
//   for (let i = 0; i < vars.length; i++) {
//     let pair = vars[i].split('=')
//     if (pair[0] == val) return pair[1]
//   }
//   return false
// }

Vue.config.productionTip = false
Vue.prototype.$JsBridge = JsBridge
Vue.prototype.$moment = moment
// Vue.prototype.$formValue = getUrlParam('from') === 'app' // false --> 微信h5  || true --> app

// 获取token
// window.localStorage.setItem('token', '')
// JsBridge.GetIosMethods(bridge => {
//   bridge.callHandler('dueWebCallNative',{
//     actionType: 0,
//     actionTarget: 'GetCustomerId',
//     data: {}
//   }, res => {
//     Vue.prototype.$CustomerId = res
//   })
//   bridge.callHandler('dueWebCallNative',{
//     actionType: 0,
//     actionTarget: 'GetToken',
//     data: {}
//   }, res => {
//     window.localStorage.setItem('token', res)
//   })
//   new Vue({
//     router,
//     render: h => h(App),
//   }).$mount('#app')
//   return false
// })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
