import type { ActionType, ProColumns } from '@ant-design/pro-components';

import { useMemo, useRef } from 'react';
import { AuthButton } from 'md-web-ui';
import { history } from 'umi';

import Page from '@/components/Page';
import { tableListRequest } from '@/utils/common';
import { ProTable } from '@ant-design/pro-components';
import { PlusOutlined } from '@ant-design/icons';
import { findPage } from '@/services/logs';
const PageComponent = () => {
  const actionRef = useRef<ActionType>();

  const columns = useMemo<ProColumns[]>(
    () => [
      {
        dataIndex: 'createTime',
        title: '创建时间',
        hideInSearch: true,
      },
      {
        dataIndex: 'createTime',
        title: '创建时间',
        valueType: 'dateRange',
        hideInTable: true,
        // search:{
        //   transform:(val)=>{
        //     return val.json(',')
        //   }
        // }
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
        hideInSearch: true,
      },
      {
        dataIndex: 'ipAddr',
        title: 'ip地址',
        hideInSearch: true,
      },
      {
        dataIndex: 'thirdCustomerId',
        title: '用户Id',
      },
      {
        dataIndex: 'cellPhone',
        title: '用户电话',
      },
      {
        dataIndex: 'url',
        title: 'url',
      },
      {
        dataIndex: 'userAgent',
        title: '游览器信息',
      },
      {
        title: '操作',
        key: '操作',
        hideInForm: true,
        hideInSearch: true,
        render: (row: any) => {
          return [
            <AuthButton
              type="link"
              key="3"
              onClick={() => {
                history.push('/logs/detail?id=' + row.id);
              }}
            >
              详情
            </AuthButton>,
          ];
        },
      },
    ],
    [],
  );

  return (
    <Page title="用户管理">
      <ProTable
        columns={columns}
        actionRef={actionRef}
        rowKey="id"
        headerTitle={[
          <AuthButton
            type="primary"
            key="1"
            icon={<PlusOutlined />}
            onClick={() => {
              history.push('/user/detail');
            }}
          >
            新增
          </AuthButton>,
        ]}
        request={tableListRequest(findPage)}
      />
    </Page>
  );
};

export default PageComponent;
