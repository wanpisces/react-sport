import { query as queryUsers, queryCurrent } from '@/services/user';
import API from '@/services/api';

export default {
  namespace: 'user',

  state: {
    list: [],
    currentUser: {},
    accountList: [],
  },

  effects: {
    *getAccount(_, { call, put }) {
      const response = yield call(API.ResponseGetAccount);
      yield put({
        type: 'getAccountList',
        payload: response,
      });
    },
    *fetch(_, { call, put }) {
      const response = yield call(queryUsers);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchCurrent(_, { call, put }) {
      const response = yield call(queryCurrent);
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
    },
  },

  reducers: {
    getAccountList(state, action) {
      console.log(action.payload.data);
      return {
        ...state,
        accountList: action.payload.data.list,
      };
    },
    save(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    saveCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload || {},
      };
    },
    changeNotifyCount(state, action) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload.totalCount,
          unreadCount: action.payload.unreadCount,
        },
      };
    },
  },
};
