import request from '../../utils/request';
const gateway = 'weixin';
/**
 * @memberof apis
 * @description: 描述方法
 * @function provinces
 * @param {type}  传入参数
 * @author 陈(后端对接人名称)
 * @see {@link https://t.com/doc/MrD0qNADV}
 * @return {object} 接口对象
 */

export const getOpenidWeb = (data = {}) => {
  return request.post({
    url: 'getOpenidWeb',
    data,
    gateway,
  });
};
