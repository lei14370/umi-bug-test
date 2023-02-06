type InitConfig = {
  appId: string;
  getThirdCustomerId: () => string;
  getCellPhone: () => string;
};
import request from './request';
class WebLog {
  appId?: string;
  getThirdCustomerId?: () => string;
  getCellPhone?: () => string;
  init({ appId, getThirdCustomerId, getCellPhone }: InitConfig) {
    this.appId = appId;
    this.getThirdCustomerId = getThirdCustomerId;
    this.getCellPhone = getCellPhone;
    window.onerror = (msg, url, line, $col, error) => {
      console.log(msg, url, line, $col, error, 'error');
      //没有URL不上报！上报也不知道错误
      if (msg !== 'Script error.' && !url) {
        return true;
      }
      //采用异步的方式
      setTimeout(() => {
        const data: any = {};
        //不一定所有浏览器都支持col参数
        const col = $col || (window.event && window.event.errorCharacter) || 0;

        data.url = url;
        data.line = line;
        data.col = col;
        if (!!error && !!error.stack) {
          //如果浏览器有堆栈信息
          //直接使用
          data.msg = error.stack.toString();
        } else if (!!arguments.callee) {
          //尝试通过callee拿堆栈信息
          const ext = [];
          let f = arguments.callee.caller,
            c = 10;
          //这里只拿三层堆栈信息
          while (f && --c > 0) {
            ext.push(f.toString());
            if (f === f.caller) {
              break; //如果有环
            }
            f = f.caller;
          }
          data.msg = ext.join(',');
        }
        this.error(data, 'code_error');
      }, 0);

      // return true;
    };
  }
  error = (data: any, action: 'api_error' | 'code_error') => {
    console.log(data, 'error');
    request('/web-logs/monitor/application/logs/error', {
      appId: this.appId,
      action,
      params: data,
      thirdCustomerId: this.getThirdCustomerId?.(),
      cellPhone: this.getCellPhone?.(),
      url: window.location.href,
      version: APP_VERSION,
    });
  };
  info = (data: any, action: string) => {
    request('/web-logs/monitor/application/logs/info', {
      appId: this.appId,
      action,
      params: data,
      thirdCustomerId: this.getThirdCustomerId?.(),
      cellPhone: this.getCellPhone?.(),
      url: window.location.href,
      version: APP_VERSION,
    });
  };
}
const webLog = new WebLog();
export { webLog, request };
