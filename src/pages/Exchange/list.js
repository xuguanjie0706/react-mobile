import React, { useState, useEffect } from 'react';
import { List, Radio, Button, WingBlank, Result } from 'antd-mobile';
import './index.less';
import FixedView from './components/FixedView';
import { connect } from 'umi';
import config from '@/utils/config';

const data2 = [
  { value: 0, label: 'basketball', extra: 'details' },
  { value: 1, label: 'football', extra: 'details' },
];
const RadioItem = Radio.RadioItem;
const { Item } = List;
const myImg = src => (
  <img src={src} className="spe am-icon am-icon-md" alt="" />
);
const detail = props => {
  console.log(props);
  const { history, dispatch, exchange, setting } = props;
  const { _goods: goodsList = [], sendInfo } = exchange;
  const [selected, setSelected] = useState('');
  const handleRadio = (value, e) => {
    console.log(e);
    setSelected(value);
  };

  useEffect(() => {
    if (!exchange.status) {
      const memberId = localStorage.getItem('memberId');
      history.push('/Exchange/' + memberId);
    }
  }, []);

  const handleClick = i => {
    dispatch({
      type: 'exchange/selectOne',
      payload: i,
    });
    history.push('/detail');
  };

  const handleImgClick = e => {
    // e.stop
    e.stopPropagation();
    console.log(123);
  };

  return (
    <div className="room">
      {exchange.status === '1' && (
        <div className="hl-scroll">
          <List>
            {goodsList.map(i => (
              <Item onClick={() => handleClick(i)}>
                <div className="list-item" style={{ display: 'flex' }}>
                  <img
                    onClick={handleImgClick}
                    className="pic"
                    src={config.url + i.img}
                  />
                  <div>
                    <p className="title">{i.name}</p>
                    <p className="desc">{i.value}</p>
                  </div>
                </div>
              </Item>
            ))}
          </List>
        </div>
      )}

      {exchange.status === '2' && (
        <div>
          <Result
            // img={myImg('https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg')}
            title="卡号已兑换,请等待发货"
            message={<div>如有疑问请拨打 {setting.phone || 18079442444} </div>}
          />
        </div>
      )}
      {exchange.status === '3' && (
        <div>
          <Result
            // img={myImg('https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg')}
            title="已发货"
            message={
              <div className="pre">
                {/* <p>快递单号</p> */}
                {sendInfo.map(item => (
                  <div>{`${item.sendName}单号:${item.sendNumber} \n 备注：${item.remarks}`}</div>
                ))}
              </div>
            }
          />
        </div>
      )}
    </div>
  );
};

export default connect(({ exchange, setting }) => ({
  exchange: exchange.data,
  setting: setting.data,
}))(detail);
