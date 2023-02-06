import { isEmpty, isNil } from 'lodash';
import moment from 'moment';
type CommonSearchParams<T> = {
  size: number | undefined;
  page: number | undefined;
} & T;

type CommonList<T = Record<string, any>> = {
  /** 数据 */
  list: T[];
  /** 总量 */
  pagination: {
    page: number;
    size: number;
    total: number;
  };
};
export const dateTypeParamFormatter = (day: any, index: number) => {
  let $day: any = day;
  if (isNil(day)) {
    return '';
  }
  if ($day && (/\d{4}-\d{2}-\d{2}/.test($day) || $day instanceof moment)) {
    $day =
      index > 0
        ? moment($day).format('YYYY-MM-DD 23:59:59')
        : moment($day).format('YYYY-MM-DD 00:00:00');
  }
  return $day;
};
export const searchQueryFormatter = (query: Record<string, any>) => {
  const data: Record<string, any> = { ...query };
  for (const key in data) {
    if (data.hasOwnProperty(key) && data[key] === '') {
      delete data[key];
    } else if (data[key] instanceof Array) {
      if (data[key].length > 0) {
        data[key] = (data[key] as any[])
          .map((i, index) => {
            return dateTypeParamFormatter(i, index);
          })
          .join(',');
      }
    }
  }
  return data;
};
export function formatMoney(money: number | string) {
  if (isEmpty(money.toString())) {
    return '';
  }
  const reg = /(?=(\B)(\d{3})+$)/g;
  return money.toString().replace(reg, ',');
}
export function tableListRequest<T = any, P = any>(
  convertFunction: (
    data: CommonSearchParams<P>,
    options?: Record<string, any>,
  ) => Promise<CommonList<T> | undefined>,
  defaultParams?: Record<string, any>,
) {
  return async (
    _data: P & {
      pageSize?: number;
      current?: number;
    } & Record<string, any>,
  ) => {
    const data = { ..._data };
    const pageNum = data.current;
    delete data.current;
    const $data = searchQueryFormatter(data) as P & {
      pageSize?: number;
    } & Record<string, any>;
    const res = await convertFunction({
      ...defaultParams,
      page: pageNum,
      size: data.pageSize,
      ...$data,
    });
    console.log(res);
    return {
      data: res?.list,
      total: res?.pagination?.total,
    };
  };
}
