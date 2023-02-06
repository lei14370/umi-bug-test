import React, { useCallback, useRef, useState } from 'react';
import { Form, Input, Spin, message, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useModel, history } from 'umi';

import { utils } from 'md-web-ui';
import { login, getCaptcha, getUserInfo } from '@/services/user';
import styles from './index.less';

import { useMount } from 'ahooks';

const Login: React.FC = () => {
  const verifyRef = useRef<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [form] = Form.useForm<API.LoginData>();
  const { setInitialState } = useModel('@@initialState');
  const [base64, setBase64] = useState<string>();
  const [svg, setSvg] = useState<any>();
  const getCaptchaImage = useCallback(async () => {
    const { captchaId, data } = await getCaptcha({
      height: 36,
      width: 110,
    });
    verifyRef.current = captchaId || '';
    if (data?.includes('data:image/png;base64,')) {
      setBase64(data);
      setSvg(null);
    } else {
      setBase64(undefined);
      setSvg(data);
    }
  }, []);
  useMount(() => {
    document.title = 'login';
    getCaptchaImage();
  });
  const onFinish = useCallback(async () => {
    const values = await form.validateFields();
    try {
      setLoading(true);
      const loginRes = await login({
        ...values,
        captchaId: verifyRef.current,
      });
      utils.setStorage('token', loginRes?.token);
      const userMsg = await getUserInfo();
      utils.setStorage('userMsg', userMsg);

      setInitialState({
        currentUser: userMsg,
        collapsed: false,
      });
      setLoading(false);

      message.success('登录成功');
      history.push('/');
    } catch (e) {
      setLoading(false);
      getCaptchaImage();
    }
  }, [form, getCaptchaImage]);

  return (
    <Spin spinning={loading}>
      <div className={styles.container}>
        <div className={styles.bgWrapper}>
          <img src={require('@/assets/images/login/login-bg.jpg')} />
        </div>
        <div className={styles.loginWrap}>
          <div className={styles.formWrapper}>
            <div className={styles.header}>
              <img src={require('@/assets/images/login/logo.png')} />
            </div>
            <Form
              className={styles.loginForm}
              onFinish={onFinish}
              size={'middle'}
              form={form}
            >
              <div className={styles.label}>用户名</div>
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: '请输入用户名',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <div className={styles.label}>密码</div>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input.Password
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>
              <div className={styles.label}>验证码</div>
              <div className={styles.verificationCodeWarp}>
                <Form.Item
                  name="verifyCode"
                  className={styles.verificationCodeContent}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <div
                  className={styles.verificationCode}
                  onClick={getCaptchaImage}
                >
                  {svg ? (
                    <div
                      className="svg"
                      dangerouslySetInnerHTML={{ __html: svg }}
                    />
                  ) : (
                    <img src={base64} alt="验证码" />
                  )}
                </div>
              </div>
              <Button
                htmlType="submit"
                type="primary"
                className={styles.loginFormButton}
              >
                登录
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </Spin>
  );
};

export default Login;
