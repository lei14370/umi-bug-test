// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';

/** 分页 GET */
export async function findPage(params: any) {
  return request<API.API_RESULT<any>>('/monitor/application/logs/page', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}
/**  详情 GET */
export async function findSourcesContent(params: any) {
  return request<API.API_RESULT<any>>(
    '/monitor/application/logs/findSourcesContent',
    {
      method: 'GET',
      params: {
        ...params,
      },
    },
  );
}
