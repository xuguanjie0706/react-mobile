/*
 * @Author: xgj
 * @since: 2022-09-01 21:31:56
 * @lastTime: 2022-09-01 21:51:56
 * @LastAuthor: xgj
 * @FilePath: /react-mobile/src/pages/sale/index.js
 * @message:
 */
import React, { useEffect, useState } from 'react';
import { Toast, Result } from 'antd-mobile';
import api from '@/api';
import './index.less';
import config from '@/utils/config';
const Home = props => {
  console.log(props);
  const {
    history,
    location: { query },
  } = props;
  let obj = getUrlData(window.location.href);
  console.log(obj);
  // const dataStr = .split("?")[1]
  // dataStr[]
  console.log(query);
  const [isFinish, setIsFinish] = useState(0);
  const [list, setList] = useState([1, 2, 3]);
  const initData = async () => {
    const r = await api.Show.f();
    console.log(r);
    setList(r);
  };
  useEffect(() => {
    initData();
  }, []);
  return (
    <div className="sale-room">
      {list.map(item => (
        <>
          <div className="cell">
            <div className="left">
              <img src={config.url + item.img}></img>
            </div>
            <div className="right">
              <div className="name">{item.name}</div>
              <div className="price-room">
                <div className="activePrice">惊爆价{item.mailPrice}</div>
                <div className="originalPrice">原价20</div>
                <div className="num">
                  库存 <span>12</span>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
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
