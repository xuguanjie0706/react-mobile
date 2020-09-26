// import { PageLoading } from '@ant-design/pro-layout'; // loading components from code split
// // https://umijs.org/plugin/umi-plugin-react.html#dynamicimport

// export default PageLoading;

import React from 'react';
import './index.less';

import { Spin } from 'antd';
const CustomSpin = () => {
  return (
    <div className="CustomSpin">
      <Spin></Spin>
    </div>
  );
};
export default CustomSpin;
