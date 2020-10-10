import React, { useEffect } from 'react';
import { List, Button, WingBlank } from 'antd-mobile';
import FixedView from './components/FixedView';
import config from '@/utils/config';
import { connect } from 'umi';

function lazyload(e, els = []) {
  var seeHeight = e.clientHeight;
  var scrollTop = e.scrollTop;
  els.forEach(item => {
    if (item.src === '') {
      if (item.offsetTop < seeHeight + scrollTop) {
        item.src = item.getAttribute('data-src');
      }
    }
  });
}

const detail = props => {
  const { history, dispatch, selectInfo = {}, status } = props;
  const { imgs = [] } = selectInfo;
  // console.log(selectInfo);
  useEffect(() => {
    if (!status) {
      const memberId = localStorage.getItem('memberId');
      history.push('/Exchange/' + memberId);
    }
    const els = document.querySelectorAll('.lazy');
    const elRoom = document.querySelector('.hl-scroll');
    elRoom.addEventListener('scroll', e => lazyload(e.target, els), false);

    // document.querySelector(".hl-scroll").onscroll = function (e) {
    //   console.log(e);
    // }
    lazyload(elRoom, els);
    document.title = '商品详情';
  }, []);

  const handleClick = () => {
    history.push('/area');
  };
  return (
    <div className="room">
      <div className="hl-scroll">
        {imgs.map(item => (
          <img
            className="pic lazy"
            data-src={config.url + item}
            key={item}
            // src={config.url + item}
            alt=""
          />
        ))}
        <FixedView>
          <WingBlank>
            <Button onClick={handleClick} type="primary">
              确认兑换
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
