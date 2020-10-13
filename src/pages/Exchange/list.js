import React, { useState, useEffect } from 'react';
import {
  List,
  Radio,
  Modal,
  Toast,
  Result,
  InputItem,
  Button,
  WingBlank,
} from 'antd-mobile';
import './index.less';
import FixedView from './components/FixedView';
import { connect } from 'umi';
import config from '@/utils/config';
import api from '@/api';

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
  // console.log(props);
  const { history, dispatch, exchange, setting } = props;
  const { _goods: goodsList = [], sendInfo } = exchange;

  const [isShow, setIsShow] = useState(false);
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (!exchange.status) {
      const memberId = localStorage.getItem('memberId');
      history.push('/Exchange/' + memberId);
    }
    document.title = '商品列表';
    // console.log(goodsList);
    // if (goodsList.length === 1) {
    //   dispatch({
    //     type: 'exchange/selectOne',
    //     payload: goodsList[0],
    //   });
    //   history.push('/detail');
    // }
  }, []);

  // const handleClickImg = () => {

  // }

  const handleClickImg = async item => {
    // console.log(item);
    Toast.loading(null, 10);
    try {
      const r = await api.Pic.getpic({ code: item.sendNumber });
      // console.log(r);
      setUrl(r);
      setIsShow(true);
      // history.push("/image")
      if (r) {
        Toast.hide();
        // window.location.href = r
      }
    } catch (error) {
      Toast.hide();
    }
  };

  const handleClick = i => {
    // console.log(i);
    if (i.num === 0) {
      Toast.fail('库存不足', 1, null, false);
      return;
    }
    dispatch({
      type: 'exchange/selectOne',
      payload: i,
    });
    history.push('/detail');
  };

  const handleButtonClick = async (i, e) => {
    e.stopPropagation();
    if (i.num === 0) {
      Toast.fail('库存不足', 1, null, false);
      return;
    }
    await dispatch({
      type: 'exchange/selectOne',
      payload: i,
    });
    history.push('/area');
    // console.log(123);
  };

  return (
    <div className="room">
      {exchange.status === '1' && (
        <div className="hl-scroll padding-b50">
          {/* <List> */}
          {goodsList.map(i => (
            // <Item >
            <div
              onClick={() => handleClick(i)}
              key={i._id}
              className="list-item"
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ display: 'flex' }}>
                <img
                  // onClick={handleImgClick}
                  className="pic"
                  src={config.url + i.img}
                />
                <div className="title-room">
                  <p className="title">{i.name}</p>
                  <p className="desc">{i.value}</p>
                  <p className="kucun">当前库存: {i.num}</p>
                  {/* <Button type="primary" inline size="small" style={{ marginLeft: '4px', marginTop: 8 }}>选择</Button> */}
                </div>
              </div>
              <div className="address">以下地区不发货:澳门、台湾、香港</div>
              <div className="button-room">
                <Button
                  onClick={e => handleButtonClick(i, e)}
                  style={{ width: 100 }}
                  type="primary"
                  size="small"
                  inline={true}
                >
                  选择
                </Button>
              </div>
            </div>
            // </Item>
          ))}
          <div className="bottom-room">请选择要兑换的商品</div>
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
            title="商家已处理,请等待发货"
            message={<div>如有疑问请拨打 {setting.phone || 18079442444} </div>}
          />
        </div>
      )}
      {exchange.status === '4' && (
        <div>
          <Result
            // img={myImg('https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg')}
            title="已发货"
            message={
              <div className="pre">
                {/* <p>快递单号</p> */}
                {sendInfo.map(item => (
                  <div key={item.sendNumber}>
                    {`${item.sendName}单号:${item.sendNumber} \n 备注：${item.remarks} `}{' '}
                    <span onClick={() => handleClickImg(item)}>点击查看</span>
                  </div>
                ))}
              </div>
            }
          />
        </div>
      )}
      {/* <InputItem /> */}
      <Modal
        popup
        visible={isShow}
        onClose={() => setIsShow(false)}
        animationType="slide-up"
      >
        <div className="send-pic-room">
          <img onClick={() => setIsShow(false)} src={url} alt="" />
        </div>
      </Modal>
    </div>
  );
};

export default connect(({ exchange, setting }) => ({
  exchange: exchange.data,
  setting: setting.data,
}))(detail);
