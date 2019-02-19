// use localStorage to store the authority info, which might be sent from server in actual project.
import Cookies from 'js-cookie';
export function getAuthority(str) {
  const isLogin = JSON.parse(Cookies.get('userInfo')).token ? true : false;
  // return localStorage.getItem('antd-pro-authority') || ['admin', 'user'];
  const authorityString =
    typeof str === 'undefined' ? JSON.parse(Cookies.get('userInfo')).token : str;
  // authorityString could be admin, "admin", ["admin"]
  let authority;
  try {
    authority = isLogin ? ['admin'] : ['guest'];
  } catch (e) {
    authority = authorityString;
  }
  if (typeof authority === 'string') {
    return [authority];
  }
  return authority || ['admin'];
}

export function setAuthority(authority) {
  const proAuthority = typeof authority === 'string' ? [authority] : authority;
  return localStorage.setItem('antd-pro-authority', JSON.stringify(proAuthority));
}
