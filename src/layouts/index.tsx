import React from 'react';
import { PageLoading } from '@ant-design/pro-layout';
import '@/globel.less';
// import { Redirect, connect } from 'umi';
// import { stringify } from 'querystring';
// import { ConfigProvider } from 'antd';
// import zhCN from 'antd/es/locale/zh_CN';
// import 'moment/locale/zh-cn';
class SecurityLayout extends React.PureComponent {
  state = {
    isReady: false,
  };

  componentDidMount() {
    this.setState({
      isReady: true,
    });
    document.title = '系统功能';
  }

  render() {
    const { isReady } = this.state;
    const { children } = this.props; // You can replace it to your authentication rule (such as check token exists)
    // 你可以把它替换成你自己的登录认证规则（比如判断 token 是否存在）

    // const isLogin = currentUser && currentUser.userid;
    // const queryString = stringify({
    //   redirect: window.location.href,
    // });

    // if ((!isLogin && loading) || !isReady) {
    //   return <PageLoading />;
    // }

    // if (!isLogin && window.location.pathname !== '/user/login') {
    //   return <Redirect to={`/user/login?${queryString}`} />;
    // }

    return children;
  }
}

export default SecurityLayout;
