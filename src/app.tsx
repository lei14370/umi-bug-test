import { getUserInfo } from '@/services/user';
import RightContent from './components/RightContent';
import { webLog } from 'web-tools/es/web-log';
import { utils } from 'md-web-ui';
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
type InitialStateType = {
  currentUser?: API.UserInfo;
  collapsed: boolean;
};
webLog.init({
  appId: 'NC',
  getCellPhone: () => utils.getStorage('userMsg')?.phone,
  getThirdCustomerId: () => utils.getStorage('userMsg')?.id,
  appSecretKey: '123456342322ttffewsswwsswddddddw',
});
export async function getInitialState(): Promise<InitialStateType> {
  const userMsg = await getUserInfo();
  return { collapsed: false, currentUser: userMsg };
}

export const layout = ({
  initialState,
}: {
  initialState: InitialStateType;
}) => {
  console.log(initialState);
  return {
    menu: {
      locale: false,
    },
    logo: '/images/small-logo.png',
    className: 'web-log-layout',
    rightContentRender: () => null,
    avatarProps: {
      src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
      size: 'small',
      title: initialState?.currentUser?.nickName,
    },
    actionsRender: () => [<RightContent key="rightContent" />],
  };
};
