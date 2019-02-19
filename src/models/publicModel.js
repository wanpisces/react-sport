import { routerRedux } from 'dva/router';
import { stringify } from 'qs';
import Public from '@/services/public';
import router from 'umi/router';
export default {
  namespace: 'publicModel',
  state: {
    tokenPayload: null,
    url: '',
  },

  effects: {
    *getToken({ payload }, { call, put }) {
      const response = yield call(Public.ResponseGetUploadToken, payload);
      yield put({
        type: 'getUploadToken',
        payload: response.data,
      });
    },
    *uploadFile({ payload }, { call, put }) {
      const response = yield call(Public.ResponseGetUploadUrl, payload.formData);
      yield put({
        type: 'getUploadUrl',
        payload: response,
      });
    },
  },

  reducers: {
    getUploadToken(state, { payload }) {
      return {
        ...state,
        tokenPayload: payload,
      };
    },
    getUploadUrl(state, { payload }) {
      return {
        ...state,
        url: payload.key,
      };
    },
  },
};
