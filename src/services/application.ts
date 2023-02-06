// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';

/** 分页 GET */
export async function findPage(params: any) {
  return request<API.API_RESULT<any>>('/monitor/application/page', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}
/**  新增 POST */
export async function add(data: any) {
  return request<API.API_RESULT<any>>('/monitor/application/add', {
    method: 'POST',
    data,
  });
}
/**  编辑 POST */
export async function update(data: any) {
  return request<API.API_RESULT<any>>('/monitor/application/update', {
    method: 'POST',
    data,
  });
}
/**  详情 GET */
export async function getInfo(params: any) {
  return request<API.API_RESULT<any>>('/monitor/application/info', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}
/**  list GET */
export async function getList(params: any) {
  return request<API.API_RESULT<any>>('/monitor/application/list', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}
