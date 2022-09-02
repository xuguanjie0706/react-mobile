/*
 * @Author: xgj
 * @since: 2022-09-01 21:31:56
 * @lastTime: 2022-09-03 02:23:30
 * @LastAuthor: xgj
 * @FilePath: /react-mobile/src/pages/Our/index.js
 * @message:
 */
import React, { useEffect, useState } from 'react';
import { Toast, Result, List } from 'antd-mobile';
import api from '@/api';

import './index.less';
const Home = props => {
  console.log(props);
  const {
    history,
    location: { query },
  } = props;
  let obj = getUrlData(window.location.href);
  console.log(obj);
  console.log(query);
  const [isFinish, setIsFinish] = useState(0);
  const [user, setUser] = useState({});
  const initData = async () => {
    const r = await api.User.check();
    setUser(r);
  };
  useEffect(() => {
    initData();
  }, []);
  return (
    <div className="room">
      <List>
        <List.Item extra={user.total}>总收入</List.Item>
        <List.Item extra={user.balance}>本月收入</List.Item>
      </List>
    </div>
  );
};

function getUrlData(str) {
  try {
    if (str.indexOf('?') !== -1) {
      const dataStr = str.split('?')[1];
      const obj = dataStr.split('&');
      const _obj = {};
      obj.forEach(item => {
        const _o = item.split('=');
        _obj[_o[0]] = _o[1];
        return _o;
      });
      return _obj;
    }
    return {};
  } catch (error) {}
}

export default Home;
