import type { ActionType, ProColumns } from '@ant-design/pro-components';

import { useMemo, useRef } from 'react';
import { AuthButton } from 'md-web-ui';
import { history } from 'umi';

import Page from '@/components/Page';
import { tableListRequest } from '@/utils/common';
import { ProTable } from '@ant-design/pro-components';
import { PlusOutlined } from '@ant-design/icons';
import { findPage } from '@/services/application';
const PageComponent = () => {
  const actionRef = useRef<ActionType>();
  const columns = useMemo<ProColumns[]>(
    () => [
      {
        dataIndex: 'name',
        title: '应用名称',
      },
      {
        dataIndex: 'appId',
        title: 'appId',
      },
      // {
      //   dataIndex: 'appSecretKey',
      //   title: 'appSecretKey',
      //   hideInSearch: true,
      // },
      {
        dataIndex: 'status',
        title: '状态',
        valueType: 'select',
        valueEnum: {
          1: '已启用',
          0: '已停用',
        },
      },
      {
        dataIndex: 'createTime',
        title: '创建时间',
        hideInSearch: true,
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
                history.push('/application/detail?id=' + row.id);
              }}
            >
              编辑
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
              history.push('/application/detail');
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
