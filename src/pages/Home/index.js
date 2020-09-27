import React, { useEffect, useState } from 'react';
import { Toast, Result } from 'antd-mobile';
import api from '@/api';
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
  const initData = async () => {
    // Toast.loading("")
    const r = await api.Weixin.getOpenidWeb({
      code: obj.code,
      MemberId: obj.state.split('#')[0],
    });
    if (r) {
      setIsFinish(1);
    } else {
      setIsFinish(2);
    }
  };
  useEffect(() => {
    initData();
  }, []);
  return (
    <div className="room">
      {isFinish === 1 && (
        <Result
          // img={myImg('https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg')}
          title="绑定成功"
        />
      )}
      {isFinish === 2 && (
        <Result
          // img={myImg('https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg')}
          title="绑定失败"
        />
      )}
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
