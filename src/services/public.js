import { stringify } from 'qs';
import fetch from 'dva/fetch';
import request from '@/utils/request';
import URL from '@/services/url';
import { message } from 'antd';
import Cookies from 'js-cookie';
const tipMessage = res => {
  if (res.code === 2000) {
    message.success(res.msg);
  } else if (res.code === 4000) {
    message.error(res.msg);
  } else if (res.code === 4010) {
    message.warning(res.msg);
  }
};
export default new class Public {
  //获取token
  async ResponseGetUploadToken(params) {
    return request(URL.getToken, 'GET', params, true);
  }
  //获取七牛云地址

  async ResponseGetUploadUrl(formData) {
    return fetch('http://up.qiniu.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    }).then(res => {
      return res;
    });
  }
}();
