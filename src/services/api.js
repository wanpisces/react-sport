import { stringify } from 'qs';
import request from '@/utils/request';
import URL from '@/services/url';
import { message } from 'antd';
import Cookies from 'js-cookie';
import { userInfo } from 'os';
const tipMessage = res => {
  if (res.code === 2000) {
    message.success(res.msg);
  } else if (res.code === 4000) {
    message.error(res.msg);
  } else if (res.code === 4010) {
    message.warning(res.msg);
  }
};
export default new class API {
  async fakeAccountLogin(params) {
    return request(URL.login, 'POST', params, true).then(res => {
      tipMessage(res);
      if (res.code == 2000) {
        Cookies.set('userInfo', res.data);
      }
      return res;
    });
  }
  async getVerificationCode(params) {
    return request(URL.verificationCode, 'GET', params, true);
  }
  async ResponseBannerList(params) {
    return request(URL.banner, 'GET', params);
  }
  async ResponseBannerState(params) {
    return request(URL.bannerState, 'PUT', params).then(res => {
      tipMessage(res);
      return res;
    });
  }
  async ResponseBannerDelete(params) {
    return request(URL.banner, 'DELETE', params).then(res => {
      tipMessage(res);
      return res;
    });
  }
  //获取用户数据
  async ResponseGetAccount() {
    return request(URL.getAccount, 'GET', {});
  }
}();

// export async function queryProjectNotice() {
//   return request('/api/project/notice');
// }

// export async function queryActivities() {
//   return request('/api/activities');
// }

// export async function queryRule(params) {
//   return request(`/api/rule?${stringify(params)}`);
// }

// export async function removeRule(params) {
//   return request('/api/rule', {
//     method: 'POST',
//     body: {
//       ...params,
//       method: 'delete',
//     },
//   });
// }

// export async function addRule(params) {
//   return request('/api/rule', {
//     method: 'POST',
//     body: {
//       ...params,
//       method: 'post',
//     },
//   });
// }

// export async function updateRule(params) {
//   return request('/api/rule', {
//     method: 'POST',
//     body: {
//       ...params,
//       method: 'update',
//     },
//   });
// }

// export async function fakeSubmitForm(params) {
//   return request('/api/forms', {
//     method: 'POST',
//     body: params,
//   });
// }

// export async function fakeChartData() {
//   return request('/api/fake_chart_data');
// }

// export async function queryTags() {
//   return request('/api/tags');
// }

// export async function queryBasicProfile() {
//   return request('/api/profile/basic');
// }

// export async function queryAdvancedProfile() {
//   return request('/api/profile/advanced');
// }

// export async function queryFakeList(params) {
//   return request(`/api/fake_list?${stringify(params)}`);
// }

// export async function removeFakeList(params) {
//   const { count = 5, ...restParams } = params;
//   return request(`/api/fake_list?count=${count}`, {
//     method: 'POST',
//     body: {
//       ...restParams,
//       method: 'delete',
//     },
//   });
// }

// export async function addFakeList(params) {
//   const { count = 5, ...restParams } = params;
//   return request(`/api/fake_list?count=${count}`, {
//     method: 'POST',
//     body: {
//       ...restParams,
//       method: 'post',
//     },
//   });
// }

// export async function updateFakeList(params) {
//   const { count = 5, ...restParams } = params;
//   return request(`/api/fake_list?count=${count}`, {
//     method: 'POST',
//     body: {
//       ...restParams,
//       method: 'update',
//     },
//   });
// }

// export async function fakeAccountLogin(params) {
//   return request(URL.login, {
//     method: 'POST',
//     body: params,
//   });
// }

// export async function fakeRegister(params) {
//   return request('/api/register', {
//     method: 'POST',
//     body: params,
//   });
// }

// export async function queryNotices() {
//   return request('/api/notices');
// }

// export async function getFakeCaptcha(mobile) {
//   return request(`/api/captcha?mobile=${mobile}`);
// }
