import { delStorage } from 'md-web-ui/es/utils';
import { ModalForm, ProFormText } from '@ant-design/pro-form';
import { Dropdown, message } from 'antd';
import React, { useState } from 'react';
import { history, useModel } from 'umi';
import styles from './index.less';

import { logout, updatePassword } from '@/services/user';
import {
  FormOutlined,
  LogoutOutlined,
  SettingOutlined,
} from '@ant-design/icons';
const AvatarDropdown: React.FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  const [settingModalVisible, setSettingModalVisible] = useState(false);

  if (!initialState) {
    return null;
  }
  const { currentUser } = initialState;

  if (!currentUser || !currentUser?.id) {
    return null;
  }

  const goLogin = () => {
    delStorage('token');
    delStorage('userMsg');
    history.replace('/login');
  };

  const passwordConfirm = async (values: any) => {
    updatePassword(values).then(() => {
      message.success('修改密码成功');
      setSettingModalVisible(false);
      goLogin();
    });
  };

  const onLogout = () => {
    setInitialState((s) => ({ ...s, collapsed: false, currentUser: null }));
    logout().then(() => {
      message.success('退出登录成功');
      goLogin();
    });
  };

  return (
    <div>
      <Dropdown
        overlay={
          <div className={styles.overlay}>
            <div className={styles.info}>
              <img
                src={
                  'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg'
                }
                alt=""
              />
              <span className={`${styles.name}`}>{currentUser.nickName}</span>
            </div>
            <div className={styles.list}>
              <div
                className={styles.item}
                onClick={() => {
                  setSettingModalVisible(true);
                }}
              >
                <FormOutlined />
                <span>修改密码</span>
              </div>
              <div className={styles.item} onClick={onLogout}>
                <LogoutOutlined />
                <span>退出登录</span>
              </div>
            </div>
          </div>
        }
      >
        <SettingOutlined />
      </Dropdown>
      <ModalForm
        width={400}
        open={settingModalVisible}
        modalProps={{
          forceRender: true,
          destroyOnClose: true,
        }}
        title="修改密码"
        onOpenChange={(visible) => setSettingModalVisible(visible)}
        onFinish={passwordConfirm}
      >
        <ProFormText.Password
          width="md"
          name="password"
          label="旧密码"
          rules={[
            {
              required: true,
            },
          ]}
        />
        <ProFormText.Password
          width="md"
          name="newPassword"
          label="新密码"
          rules={[
            {
              required: true,
            },
          ]}
        />
        <ProFormText.Password
          width="md"
          name="confirmPassword"
          label="确认密码"
          rules={[
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value) {
                  return Promise.reject('请输入确认密码');
                }
                if (getFieldValue('newPassword') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('您输入的两个密码不匹配');
              },
            }),
          ]}
        />
      </ModalForm>
    </div>
  );
};

export default AvatarDropdown;
