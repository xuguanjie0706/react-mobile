import api from '@/api';

const Model = {
  namespace: 'exchange',
  state: {
    data: {},
    select: {},
    list: [],
    status: false,
  },
  effects: {
    // 查询卡号密码
    *getone({ payload }, { call, put }) {
      const response = yield call(api.ExchangeCard.getone, payload);
      if (response && response !== true) {
        yield put({
          type: 'changeStatus',
          payload: response,
          key: 'data',
        });
        yield put({
          type: 'changeStatus',
          payload: true,
          key: 'status',
        });

        return response;
      } else {
        return false;
      }
    },
    /* 选中摸个商品 */
    *selectOne({ payload }, { call, put }) {
      // const response = yield call(api.ExchangeCard.getone, payload);

      yield put({
        type: 'changeStatus',
        payload: payload,
        key: 'select',
      });
      return true;
    },
    /* 兑换摸个商品 */
    *exchange({ payload }, { select, call, put }) {
      const response = yield select(({ exchange }) => {
        return {
          _usegoods: exchange.select._id,
          _id: exchange.data._id,
          status: exchange.data.status,
        };
      });
      const _data = {
        ...response,
        address: payload,
      };
      const r = yield call(api.ExchangeCard.exchange, _data);
      if (r) {
        return true;
      } else {
        return false;
      }
    },
    /* 通过手机查询订单 */
    *getonebymobile({ payload }, { select, call, put }) {
      const response = yield call(api.ExchangeCard.getonebymobile, payload);
      if (response && response !== true) {
        yield put({
          type: 'changeStatus',
          payload: response,
          key: 'list',
        });
        return response;
      } else {
        return false;
      }
    },
  },
  reducers: {
    changeStatus(state, { payload, key }) {
      return { ...state, [key]: payload };
    },
  },
};
export default Model;
