import React, { useState } from 'react';
import './index.less';

const Custom = () => {
  const [isShow, setIsShow] = useState(true);
  const handleClick = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="shop">
      <div className="shop-btn">
        {isShow && <div className="shop-order-btn">订单</div>}
        <div
          className={`shop-car-btn ${isShow && 'active'}`}
          onClick={handleClick}
        >
          购物车
        </div>
        <div className="shop-buy-btn">购买</div>
      </div>
    </div>
  );
};

export default Custom;
