import axios from 'axios'
import qs from 'qs'
import store from '@/store'
import { Toast } from 'vant'

// axios 配置
axios.defaults.timeout = 50000
// axios.defaults.baseURL = '/api'
axios.defaults.baseURL = 'http://newos.glassmarket.cn'
// axios.defaults.withCredentials = true

axios.interceptors.request.use(config => {
  store.commit('CHANGE_LOADINGSTATUS', true)
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  store.commit('CHANGE_LOADINGSTATUS', false)
  return response
}, error => {
  store.commit('CHANGE_LOADINGSTATUS', false)
  return store.commit('CHANGE_NETWORKSTATUS', true)
})

export function Get (url, param, headers) {
  return new Promise((resolve, reject) => {
    axios.get(url, headers, {
      params: param
    }).then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function Fetch (url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: param
    }).then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function Post (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(params), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    }).then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function Put (url, params) {
  return new Promise((resolve, reject) => {
    axios.put(url, qs.stringify(params), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function PutRequest (url, params) {
  return new Promise((resolve, reject) => {
    axios.put(url, params, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    }).then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function Delete (url, params) {
  return new Promise((resolve, reject) => {
    axios.delete(url, {
      data: qs.stringify(params),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    }).then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    }).catch((error) => {
      reject(error)
    })
  })
}
