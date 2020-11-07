import {
  Post
} from './axios.js'

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

/**
 * @param 星盘数据 
 */
export const getData_XP = (param) => {
  return Post('/index.php?main_page=xingpan_handler', Object.assign(param, {
    isshenhe: getUrlParam('isshenhe')
  }))
}

/**
 * @param 占星师
 */
export const getDiviner = (param) => {
  return Post('/index.php?main_page=expert_list', param)
}

/**
 * @param 意见反馈
 */
export const getBack = (param, data) => {
  return Post(`/index.php?main_page=xingpan_handler&${data}`, param)
}

/**
 * @param 订单
 */
export const payOrder = (param) => {
  return Post(`index.php?main_page=expert_handler`, param)
}

/**
 * @param 塔罗牌
 */
export const getTarot = (param) => {
  return Post(`index.php?main_page=tarotuniv_handler`, param)
}
