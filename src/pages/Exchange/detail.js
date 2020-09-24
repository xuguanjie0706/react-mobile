import React, { useState, useEffect } from 'react';
import { List, Radio, Button, WingBlank } from 'antd-mobile';
import './index.less';
import FixedView from './components/FixedView';
import { connect } from 'umi';
import config from '@/utils/config';

const data2 = [
  { value: 0, label: 'basketball', extra: 'details' },
  { value: 1, label: 'football', extra: 'details' },
];
const RadioItem = Radio.RadioItem;

const detail = props => {
  console.log(props);
  const { history, dispatch, exchange } = props;
  const { _goods: goodsList = [] } = exchange;
  const [selected, setSelected] = useState('');
  const handleRadio = (value, e) => {
    console.log(e);
    setSelected(value);
  };

  useEffect(() => {
    console.log(goodsList);
    // if (goodsList.length) {
    //   history.go(-1)
    // }
  }, []);

  const handleClick = () => {
    dispatch({
      type: 'exchange/selectOne',
      payload: selected,
    });
    history.push('/area');
  };

  const handleImgClick = e => {
    // e.stop
    e.stopPropagation();
    console.log(123);
  };
  return (
    <div className="room">
      <List>
        {goodsList.map(i => (
          <RadioItem
            className="item"
            key={i._id}
            checked={selected === i._id}
            onChange={e => handleRadio(i._id, e)}
          >
            <div className="list-item" style={{ display: 'flex' }}>
              <img
                onClick={handleImgClick}
                className="pic"
                src={config.url + i.img}
              />
              <p>{i.name}</p>
            </div>
            {/* <List.Item.Brief> {1231}</List.Item.Brief> */}
          </RadioItem>
        ))}
      </List>

      <FixedView>
        <WingBlank>
          <Button onClick={handleClick} type="primary">
            确定
          </Button>
        </WingBlank>
      </FixedView>
    </div>
  );
};

export default connect(({ exchange }) => ({ exchange: exchange.data }))(detail);
