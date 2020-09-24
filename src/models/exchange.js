import api from '@/api';

const Model = {
  namespace: 'exchange',
  state: {
    data: {},
    select: '',
    status: false,
  },
  effects: {
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

        return true;
      } else {
        return false;
      }
    },
    *selectOne({ payload }, { call, put }) {
      // const response = yield call(api.ExchangeCard.getone, payload);

      yield put({
        type: 'changeStatus',
        payload: payload,
        key: 'select',
      });
      return true;
    },
    *exchange({ payload }, { select, call, put }) {
      const response = yield select(({ exchange }) => {
        return {
          _usegoods: exchange.select,
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
  },
  reducers: {
    changeStatus(state, { payload, key }) {
      return { ...state, [key]: payload };
    },
  },
};
export default Model;
