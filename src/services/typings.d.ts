declare namespace API {
  interface API_RESULT<T> {
    data: T;
    code: number;
    message: string;
  }
  type LoginData = {
    username: string;
    password: string;
    captchaId: string;
    verifyCode: string;
  };
  type LoginRes = {
    expire: string;
    token: string;
  };
  type CaptchaRes = {
    captchaId?: string;
    data?: any;
  };
  type UserInfo = {
    address: string;
    email: string;
    headPortrait: string;
    id: number;
    locked: boolean;
    mobile: string;
    nickName: string;
    realName: string;
    sex: string;
    systemCode: string;
    verification: boolean;
    menuUrls: string[];
    name: string;
    phone: string;
  };
}
