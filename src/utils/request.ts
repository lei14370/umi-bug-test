import { message } from 'antd';
import { utils } from 'md-web-ui';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import { isFunction } from 'lodash';
import { delStorage, getStorage } from 'md-web-ui/es/utils';
export const axiosInstance = axios.create({
  timeout: 100000,
  baseURL: '/api',
});

axiosInstance.interceptors.request.use((config) => {
  const $config = {
    ...config,
  };
  // @ts-ignore
  config.headers['x-http-lang'] = getStorage('locals');
  if (utils.getStorage('token')) {
    $config.headers = {
      Authorization: utils.getStorage('token') as string,
      ...config.headers,
    };
  }
  return $config;
});

axiosInstance.interceptors.response.use(
  function (res: any) {
    return Promise.resolve(res);
  },
  function (err) {
    console.log(err);
    const { response } = err;
    if (response.status === 401 && window.location.pathname !== '/login') {
      window.location.replace('/login');
      delStorage('token');
    }
    return Promise.reject(response?.data || err);
  },
);

type RequestVo<R> = {
  loading?: boolean;
  handleError?: boolean;
  handleSuccess?: boolean;
  successMessage?: string;
  errMessage?: string;
  seccuessCode?: number;
  onResponse?: (response: AxiosResponse<R>) => void;
} & AxiosRequestConfig;

export default function <R extends API_RESULT>(
  url: string,
  {
    handleError = true,
    errMessage = '',
    handleSuccess = false,
    successMessage = '',
    seccuessCode,
    onResponse,
    ...rest
  }: RequestVo<R>,
) {
  return new Promise<R['data']>((resolve, reject) => {
    const requestData: AxiosRequestConfig = {
      url,
      ...rest,
    };

    axiosInstance(requestData)
      .then((res: AxiosResponse<R>) => {
        console.log(res);
        if (isFunction(onResponse)) {
          onResponse(res);
          return;
        }
        if (requestData.responseType === 'blob') {
          return resolve(res);
        }
        if (res.data.code === 1000 || res.data.code === seccuessCode) {
          if (handleSuccess) {
            if (successMessage) {
              message.success(successMessage);
            } else {
              message.success(res.data.message || 'success');
            }
          }
          resolve(res.data.data);
        } else {
          message.error(res.data.message);
          reject(res.data.data);
        }
      })
      .catch((err) => {
        if (handleError) {
          if (errMessage) {
            message.error(errMessage);
          } else {
            message.error(err.message || 'system error');
          }
        }
        reject(err);
      });
  });
}

// 文件流转blob对象下载
export function downloadFile(blob: Blob, fileName: string) {
  // const blob = new Blob(data, {type: `application/${type};charset=utf-8`});
  // 获取heads中的filename文件名
  const downloadElement = document.createElement('a');
  // 创建下载的链接
  const href = window.URL.createObjectURL(blob);
  downloadElement.href = href;
  // 下载后文件名
  downloadElement.download = fileName;
  document.body.appendChild(downloadElement);
  // 点击下载
  downloadElement.click();
  // 下载完成移除元素
  document.body.removeChild(downloadElement);
  // 释放掉blob对象
  window.URL.revokeObjectURL(href);
}
