import React, { useEffect, useState } from 'react';
import api from '@/api';
import './index.less';
import {
  Button,
  WingBlank,
  WhiteSpace,
  Picker,
  List,
  InputItem,
  Radio,
  Toast,
  NavBar,
} from 'antd-mobile';
import Input from '@/components/Custom/Input';
import { createForm } from 'rc-form';
import { connect } from 'umi';
const Home = props => {
  console.log(props);
  const { form } = props;
  const { getFieldProps } = form;
  const [isFinish, setIsFinish] = useState(0);
  const [list, setList] = useState([1, 2, 3]);
  const [loading, setLoading] = useState(false);
  const initData = async () => {};
  useEffect(() => {
    initData();
  }, []);
  const handleClick = () => {};
  return (
    <div className="room">
      <WingBlank>
        <WhiteSpace></WhiteSpace>
        <div className="form-room">
          <div className="input-room">
            <InputItem
              clear
              {...getFieldProps('card', {
                rules: [
                  {
                    required: true,
                    message: '卡号不能为空',
                  },
                ],
                // initialValue: 'xx10100505075500',
              })}
              // label="卡号"
            >
              <span>卡号</span>
            </InputItem>
            <InputItem
              {...getFieldProps('password', {
                rules: [
                  {
                    required: true,
                    message: '密码不能为空',
                  },
                ],
                // initialValue: 'wy5yjPmi',
              })}
              clear
              // type="password"
              autocomplete="new-password"
            >
              密码
            </InputItem>
          </div>
          <WhiteSpace></WhiteSpace>
          <WhiteSpace></WhiteSpace>
          <WhiteSpace></WhiteSpace>
          <Button loading={loading} onClick={handleClick} type="primary">
            兑换
          </Button>
        </div>
      </WingBlank>
    </div>
  );
};

export default connect(({ exchange, setting }) => ({ setting: setting.data }))(
  createForm()(Home),
);
