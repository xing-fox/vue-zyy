import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from './router'
import moment from 'moment'
// import Vconsole from 'vconsole'
import JsBridge from './JsBridge'
import { Form, RadioGroup, Radio, Switch, Icon, DatetimePicker, Picker, Popup, Area, PullRefresh, Loading, Toast, ImagePreview } from 'vant'
import 'vant/lib/index.less'

Vue.use(Icon)
Vue.use(Form)
Vue.use(Area)
Vue.use(Popup)
Vue.use(PullRefresh)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Switch)
Vue.use(Picker)
Vue.use(Loading)
Vue.use(DatetimePicker)
// new Vconsole()

const getUrlParam = val => {
  const url = window.location.href
  if (url.indexOf('?') === -1) return false
  const newArr = url.split('?')
  newArr.shift()
  const vars = newArr.join('&').split('&')
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split('=')
    if (pair[0] == val) return pair[1]
  }
  return false
}

Vue.config.productionTip = false

Vue.prototype.$Toast = Toast
Vue.prototype.$moment = moment
Vue.prototype.$JsBridge = JsBridge
Vue.prototype.$ImagePreview = ImagePreview
Vue.prototype.$Url = window.location.href

Vue.prototype.$userId = process.env.NODE_ENV === "production" ? getUrlParam('userid') : 1

if (getUrlParam('appflag') == 3) {
  require(['./assets/app.js'], function(ios) {
    console.log('app.js load complete')
  })
}

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
