import React, { useEffect, useState } from 'react';
import { Toast, Result } from 'antd-mobile';
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
  // const dataStr = .split("?")[1]
  // dataStr[]
  console.log(query);
  const [isFinish, setIsFinish] = useState(0);
  const [list, setList] = useState([1, 2, 3]);
  const initData = async () => {};
  useEffect(() => {
    initData();
  }, []);
  return (
    <div className="sale-room">
      {list.map(item => (
        <>
          <div className="cell">
            <div className="left">
              <img src="https://img2.baidu.com/it/u=2131313921,3723847704&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1662138000&t=6e6f0762ef63655e44bfa9f0770b241b"></img>
            </div>
            <div className="right">
              <div className="name">伊利舒化奶</div>
              <div className="price-room">
                <div className="activePrice">惊爆价12</div>
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
