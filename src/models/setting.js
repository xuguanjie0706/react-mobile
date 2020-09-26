import api from '@/api';

const Model = {
  namespace: 'setting',
  state: {
    data: {},
    status: false,
  },
  effects: {
    *getone({ payload }, { call, put }) {
      const response = yield call(api.MemberSetting.getone, payload);
      if (response && response !== true) {
        yield put({
          type: 'changeStatus',
          payload: response,
          key: 'data',
        });
        document.title = response.name;
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
  },
  reducers: {
    changeStatus(state, { payload, key }) {
      return { ...state, [key]: payload };
    },
  },
};
export default Model;
