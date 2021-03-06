/**
 * @namespace enum
 */

/**
 * @memberof enum
 * @description 套餐状态
 * @function RESERVATION_STATUS_ENUM
 * @param {number}  1 已预约
 * @param {number}  2 已取消
 */

export const RESERVATION_STATUS_ENUM = {
  1: '已预约',
  2: '已取消',
};

/**
 * @memberof enum
 * @description 性别状态
 * @function SEX_ENUM
 * @param {number}  1 男
 * @param {number}  2 女
 * @param {number}  3 未知
 */

export const SEX_ENUM = {
  1: '男',
  2: '女',
  3: '未知',
};

/**
 * @memberof enum
 * @description 血压、血糖状态
 * @function BLOOD_STATUS_ENUM
 * @param {number}  1 偏低
 * @param {number}  2 正常
 * @param {number}  3 偏高
 */

export const BLOOD_STATUS_ENUM = {
  1: '偏低',
  // 2: '正常',
  3: '偏高',
};

/**
 * @memberof enum
 * @description 管理员状态
 * @function USER_STATUS_ENUM
 * @param {number}  1 管理员
 * @param {number}  2 商家
 * @param {number}  3 用户
 */

export const USER_STATUS_ENUM = {
  1: '管理员',
  2: '商家',
  3: '用户',
};

/**
 * @memberof enum
 * @description 单位
 * @function UNIT_ENUM
 * @param {number}  1 无
 * @param {number}  2 元
 * @param {number}  3 天
 */

export const UNIT_ENUM = {
  1: '无',
  2: '元',
  3: '天',
};

/**
 * @memberof enum
 * @description 单位
 * @function UNIT_ENUM
 * @param {number}  1 无
 * @param {number}  2 元
 * @param {number}  3 天
 */

export const STATUS_USE_ENUM = {
  1: '正常',
  2: '已兑换',
  3: '已完成',
};
