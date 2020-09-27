import React, { useEffect, useState } from 'react';
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
  const [data, setData] = useState({});
  useEffect(() => {
    api.Weixin.getOpenidWeb({
      code: obj.code,
      MemberId: obj.state,
    }).then(r => {
      setData(r);
      console.log(r);
    });
  }, []);
  return (
    <div className="room">
      {JSON.stringify(data)}||
      {window.location.href}
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
