import request from '../../utils/request';
const gateway = 'exchangeCard';
/**
 * @memberof apis
 * @description: 描述方法
 * @function getonebysimple
 * @param {type}  传入参数
 * @author 许(后端对接人名称)
 * @see {@link https://t.com/doc/MrD0qNADV}
 * @return {object} 接口对象
 */

export const getonebysimple = (data = {}) => {
  return request.post({
    url: 'getonebysimple',
    data,
    gateway,
  });
};

/**
 * @memberof apis
 * @description: 描述方法
 * @function provinces
 * @param {type}  传入参数
 * @author 许(后端对接人名称)
 * @see {@link https://t.com/doc/MrD0qNADV}
 * @return {object} 接口对象
 */

export const pagesimple = (data = {}) => {
  return request.post({
    url: 'pagesimple',
    data,
    gateway,
  });
};

/**
 * @memberof apis
 * @description: 描述方法
 * @function editoradd
 * @param {type}  传入参数
 * @author 许(后端对接人名称)
 * @see {@link https://t.com/doc/MrD0qNADV}
 * @return {object} 接口对象
 */

export const editoradd = (data = {}) => {
  return request.post({
    url: 'editoradd',
    data,
    gateway,
  });
};

/**
 * @memberof apis
 * @description: 描述方法
 * @function editoradd
 * @param {type}  传入参数
 * @author 许(后端对接人名称)
 * @see {@link https://t.com/doc/MrD0qNADV}
 * @return {object} 接口对象
 */

export const getsomebysimple = (data = {}) => {
  return request.post({
    url: 'getsomebysimple',
    data,
    gateway,
  });
};

/**
 * @memberof apis
 * @description: 描述方法
 * @function Delete
 * @param {type}  传入参数
 * @author 许(后端对接人名称)
 * @see {@link https://t.com/doc/MrD0qNADV}
 * @return {object} 接口对象
 */

export const remove = (data = {}) => {
  return request.post({
    url: 'remove',
    data,
    gateway,
  });
};

/**
 * @memberof apis
 * @description: 批量新增
 * @function addSome
 * @param {type}  传入参数
 * @author 许(后端对接人名称)
 * @see {@link https://t.com/doc/MrD0qNADV}
 * @return {object} 接口对象
 */

export const addSome = (data = {}) => {
  return request.post({
    url: 'addSome',
    data,
    gateway,
  });
};

/**
 * @memberof apis
 * @description: 定制化分页带详情
 * @function page
 * @param {type}  传入参数
 * @author 许(后端对接人名称)
 * @see {@link https://t.com/doc/MrD0qNADV}
 * @return {object} 接口对象
 */

export const page = (data = {}) => {
  return request.post({
    url: 'page',
    data,
    gateway,
  });
};

/**
 * @memberof apis
 * @description: 查找用户信息
 * @function getone
 * @param {type}  传入参数
 * @author 许(后端对接人名称)
 * @see {@link https://t.com/doc/MrD0qNADV}
 * @return {object} 接口对象
 */

export const getone = (data = {}) => {
  return request.post({
    url: 'getone',
    data,
    gateway,
  });
};

/**
 * @memberof apis
 * @description: 查找用户信息
 * @function exchange
 * @param {type}  传入参数
 * @author 许(后端对接人名称)
 * @see {@link https://t.com/doc/MrD0qNADV}
 * @return {object} 接口对象
 */

export const exchange = (data = {}) => {
  return request.post({
    url: 'exchange',
    data,
    gateway,
  });
};
