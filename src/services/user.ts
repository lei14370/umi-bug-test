// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';

/** 登录 POST /admin/comm/login */
export async function login(data: API.LoginData) {
  return request<API.API_RESULT<API.LoginRes>>('/admin/comm/login', {
    method: 'POST',
    data,
  });
}
/** 获取验证码 GET /admin/comm/captcha */
export async function getCaptcha(params: { height: number; width: number }) {
  return request<API.API_RESULT<API.CaptchaRes>>('/admin/comm/captcha', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}
/** 获取登录用户信息 GET /admin/comm/person */
export async function getUserInfo() {
  return request<API.API_RESULT<API.UserInfo>>('/admin/comm/person', {
    method: 'GET',
  });
}
/** 退出登录 POST /admin/comm/person */
export async function logout() {
  return request<API.API_RESULT<any>>('/admin/comm/person', {
    method: 'POST',
  });
}
/** 修改密码 POST /admin/sys/user/updatePassword */
export async function updatePassword(data: any) {
  return request<API.API_RESULT<any>>('/admin/sys/user/updatePassword', {
    method: 'POST',
    data,
  });
}
/** 分页 GET */
export async function findPage(params: any) {
  return request<API.API_RESULT<any>>('/admin/sys/user/page', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}
/**  新增 POST */
export async function add(data: any) {
  return request<API.API_RESULT<any>>('/admin/sys/user/add', {
    method: 'POST',
    data,
  });
}
/**  编辑 POST */
export async function update(data: any) {
  return request<API.API_RESULT<any>>('/admin/sys/user/update', {
    method: 'POST',
    data,
  });
}
/**  详情 GET */
export async function getInfo(params: any) {
  return request<API.API_RESULT<any>>('/admin/sys/user/info', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}
