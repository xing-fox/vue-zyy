import {
  Post
} from './axios.js'

/**
 * @param 星盘数据 
 */
export const getData_XP = (param) => {
  return Post('/index.php?main_page=xingpan_handler', Object.assign(param, {
    isshenhe: localStorage.getItem('isshenhe') || null
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
