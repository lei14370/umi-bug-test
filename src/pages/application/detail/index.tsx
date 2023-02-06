import { BetaSchemaForm } from '@ant-design/pro-components';
import styles from './index.less';
import { message, Row, Col, Space, Form } from 'antd';
import { history, useSearchParams } from 'umi';
import Page from '@/components/Page';
import { AuthButton } from 'md-web-ui';
import { getInfo, add, update } from '@/services/application';

const PageComponent = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const [form] = Form.useForm();

  const submit = async (values: any) => {
    const saveValue = {
      ...values,
    };

    if (id) {
      await update({ ...saveValue, id });
      message.success('编辑成功');
    } else {
      await add(saveValue);
      message.success('添加成功');
    }

    history.back();
    // createOAuth2ClientUsingPOST(values)
  };

  return (
    <Page title={id ? '编辑' : '新增'} back>
      <BetaSchemaForm
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 10 }}
        layout="horizontal"
        rowProps={{
          gutter: [16, 0],
        }}
        initialValues={
          {
            // status: 1,
          }
        }
        submitter={{
          render: (submitterProps) => {
            return (
              <Row className={styles.btnGroup}>
                <Col span={14} offset={10}>
                  <Space>
                    <AuthButton
                      onClick={() => {
                        history.back();
                      }}
                    >
                      取消
                    </AuthButton>
                    <AuthButton
                      type="primary"
                      onClick={() => {
                        submitterProps.submit();
                      }}
                      {...submitterProps.submitButtonProps}
                    >
                      确认
                    </AuthButton>
                  </Space>
                </Col>
              </Row>
            );
          },
        }}
        onFinish={submit}
        params={{ id }}
        request={async (params) => {
          if (params.id) {
            const detailRes = await getInfo({ id });
            return detailRes;
          }
          return {
            status: 1,
          };
        }}
        form={form}
        columns={[
          {
            dataIndex: 'name',
            title: '应用名称',
            formItemProps: {
              rules: [
                {
                  required: true,
                  message: '此项为必填项',
                },
              ],
            },
          },
          {
            dataIndex: 'appId',
            title: 'appId',
            formItemProps: {
              rules: [
                {
                  required: true,
                  message: '此项为必填项',
                },
                { pattern: /^[^\u4e00-\u9fa5]+$/, message: '不能输入中文' },
              ],
            },
          },
          {
            dataIndex: 'appSecretKey',
            title: 'appSecretKey',
            formItemProps: {
              rules: [
                {
                  required: true,
                  message: '此项为必填项',
                },
                { len: 32, message: '长度32位' },
                { pattern: /^[^\u4e00-\u9fa5]+$/, message: '不能输入中文' },
              ],
            },
          },
          {
            dataIndex: 'status',
            title: '状态',
            valueType: 'select',
            fieldProps: {
              options: [
                {
                  value: 1,
                  label: '已启用',
                },
                {
                  value: 0,
                  label: '已停用',
                },
              ],
            },
          },
        ]}
      ></BetaSchemaForm>
    </Page>
  );
};

export default PageComponent;
