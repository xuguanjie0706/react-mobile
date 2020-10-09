import React from 'react';
import './index.less';

const Custom = props => {
  const { children } = props;
  return <div className="SubmitButton">{children}</div>;
};

export default Custom;
