import React, { useEffect } from 'react';
import { List, Button, WingBlank } from 'antd-mobile';
import FixedView from './components/FixedView';
import config from '@/utils/config';
import { connect } from 'umi';

const detail = props => {
  const { history, dispatch, selectInfo = {}, status } = props;
  const { imgs = [] } = selectInfo;
  console.log(selectInfo);
  useEffect(() => {
    if (!status) {
      const memberId = localStorage.getItem('memberId');
      history.push('/Exchange/' + memberId);
    }
  }, []);

  const handleClick = () => {
    history.push('/area');
  };
  return (
    <div className="room">
      <div className="hl-scroll">
        {imgs.map(item => (
          <img className="pic" key={item} src={config.url + item} alt="" />
        ))}
        <FixedView>
          <WingBlank>
            <Button onClick={handleClick} type="primary">
              确定
            </Button>
          </WingBlank>
        </FixedView>
      </div>
    </div>
  );
};

export default connect(({ exchange }) => ({
  selectInfo: exchange.select,
  status: exchange.status,
}))(detail);
