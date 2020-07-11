import {
  Post
} from './axios.js'

/**
 * @param 星盘数据 
 * actiontype：1，表示新建星盘
 * userid：用户id
 * name：昵称
 * sex：性别0->女，1->男
 * cityname：城市名称
 * cityid：城市id
 * y：出生年
 * m：出生月
 * d：出生日
 * h：出生小时（0-23）
 * mi：出生分钟（0-59）
 * dst：是否采用夏时令，0->否 1->是
 */
export const getData_XP = (param) => {
  return Post('/index.php?main_page=xingpan_handler', param)
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