import { ProDescriptions } from '@ant-design/pro-components';
import styles from './index.less';
import { useSearchParams } from 'umi';
import Page from '@/components/Page';
import RuntimeError from './containers/RuntimeError';
import { findSourcesContent } from '@/services/logs';
import { useState } from 'react';

const PageComponent = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const [data, setData] = useState<any>({});
  return (
    <Page title={id ? '编辑' : '新增'} back>
      <div className={styles.page}>
        <ProDescriptions
          title="日志信息"
          column={2}
          request={async () => {
            const $data = await findSourcesContent({ id });
            setData($data);
            return {
              success: true,
              data: $data,
            };
          }}
          columns={[
            {
              dataIndex: 'createTime',
              title: '创建时间',
            },
            {
              dataIndex: 'appId',
              title: '应用appId',
            },
            {
              dataIndex: 'version',
              title: 'version',
            },
            {
              dataIndex: 'type',
              title: '日志类型',
              valueType: 'select',
              valueEnum: {
                0: '错误日志',
                1: '行为日志',
              },
            },
            {
              dataIndex: 'action',
              title: '行为',
            },
            {
              dataIndex: 'ip',
              title: 'ip',
            },
            {
              dataIndex: 'thirdCustomerId',
              title: '监控用户Id',
            },
            {
              dataIndex: 'cellPhone',
              title: '监控用户电话',
            },
            {
              dataIndex: 'ipAddr',
              title: 'ip地址',
            },
            {
              dataIndex: 'url',
              title: 'url',
            },
            {
              dataIndex: 'userAgent',
              title: '游览器信息',
            },
          ]}
        ></ProDescriptions>
        <pre id="out_pre" style={{ whiteSpace: 'pre-line' }}>
          <code>{data.params}</code>
        </pre>
        {data.sourcesContent ? (
          <RuntimeError errorRecord={data.sourcesContent}></RuntimeError>
        ) : null}
      </div>
    </Page>
  );
};

export default PageComponent;
