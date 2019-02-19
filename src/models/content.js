import { routerRedux } from 'dva/router';
import { stringify } from 'qs';
import API from '@/services/api';
import router from 'umi/router';
var listArg = null;
export default {
  namespace: 'content',
  state: {
    objData: null,
    dataList: [],
    total_num: 0,
    listArg: {},
  },

  effects: {
    *bannerList({ payload }, { call, put, select }) {
      const response = yield call(API.ResponseBannerList, payload);
      listArg = payload;
      yield put({
        type: 'getBannerList',
        payload: response,
      });
    },
    *bannerState({ payload }, { call, put, select }) {
      // const args = yield select(state => state.global.listArg);
      yield call(API.ResponseBannerState, payload);
    },
    *bannerDelete({ payload }, { call, put, select }) {
      // const args = yield select(state => state.global.listArg);
      yield call(API.ResponseBannerDelete, payload);
    },
  },

  reducers: {
    getBannerList(state, action) {
      const payload = action.payload;
      return {
        ...state,
        dataList: payload.data.list,
        total_num: payload.data.total_num,
      };
    },
  },
};
