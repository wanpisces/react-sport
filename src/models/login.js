import { routerRedux } from 'dva/router';
import { stringify } from 'qs';
import User from '@/services/api';
import { setAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';
import { reloadAuthorized } from '@/utils/Authorized';
import router from 'umi/router';
export default {
  namespace: 'login',
  state: {
    status: undefined,
    verify_img: '',
    verify_id: '',
  },

  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(User.fakeAccountLogin, payload);
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      });
      // Login successfully
      if (response.code == 2000) {
        // const urlParams = new URL(window.location.href);
        // const params = getPageQuery();
        // let { redirect } = params;
        // if (redirect) {
        //   const redirectUrlParams = new URL(redirect);
        //   if (redirectUrlParams.origin === urlParams.origin) {
        //     redirect = redirect.substr(urlParams.origin.length);
        //     if (redirect.match(/^\/.*#/)) {
        //       redirect = redirect.substr(redirect.indexOf('#') + 1);
        //     }
        //   } else {
        //     window.location.href = redirect;
        //     return;
        //   }
        // }
        router.push('/dashboard/analysis');
        // yield put(routerRedux.replace('/'));
      }
    },

    *getCaptcha({ payload }, { put, call }) {
      const response = yield call(getFakeCaptcha, payload);
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      });
    },
    *verificationCode({ payload }, { put, call }) {
      const response = yield call(User.getVerificationCode, payload);
      yield put({
        type: 'getVerificationStatus',
        payload: response,
      });
    },
    *logout(_, { put }) {
      yield put({
        type: 'changeLoginStatus',
        payload: {
          status: false,
          currentAuthority: 'guest',
        },
      });
      reloadAuthorized();
      yield put(
        routerRedux.push({
          pathname: '/user/login',
          search: stringify({
            redirect: window.location.href,
          }),
        })
      );
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      return {
        ...state,
        payload,
      };
    },
    getVerificationStatus(state, { payload }) {
      return {
        ...state,
        verify_img: payload.verify_img,
        verify_id: payload.verify_id,
      };
    },
  },
};
