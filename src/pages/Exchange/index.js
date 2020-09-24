import React, { useState, useEffect } from 'react';
import {
  Button,
  WingBlank,
  WhiteSpace,
  Picker,
  List,
  InputItem,
  Radio,
  Toast,
} from 'antd-mobile';
import Input from '@/components/Custom/Input';
import { createForm } from 'rc-form';
import './index.less';
import { connect } from 'umi';
import api from '@/api';

const RadioItem = Radio.RadioItem;
const Exchange = props => {
  // console.log(props);
  const {
    form,
    history,
    dispatch,
    match: {
      params: { memberId },
    },
  } = props;
  const { getFieldProps } = form;
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [exchangeData, setExchangeData] = useState({});
  const [selected, setSelected] = useState('');
  // console.log(form);

  useEffect(() => {
    if (memberId) {
      localStorage.setItem('memberId', memberId);
    }
  }, []);

  const handleClick = () => {
    form.validateFields(async (err, values) => {
      const _data = {
        ...values,
        _member: memberId,
      };
      if (!err) {
        setLoading(true);
        const r = await dispatch({
          type: 'exchange/getone',
          payload: _data,
        });
        setLoading(false);
        console.log(r);
        if (r) {
          setExchangeData(r);
          history.push('/detail');
        } else {
          Toast.fail('卡号或者密码不正确', 1, null, false);
        }
      } else {
        const errObj = form.getFieldsError();
        const msg = errObj[Object.keys(errObj)[0]];
        Toast.fail(msg, 1, null, false);
      }
    });
  };
  const handleRadio = e => {
    console.log(e);
    setSelected(e);
  };

  return (
    <div className="room">
      <div
        className="exchange"
        style={{
          backgroundImage:
            'url("http://localhost:7001/public/files/16008578191407479.png")',
        }}
      >
        <WingBlank>
          <WhiteSpace></WhiteSpace>
          <div className="form-room">
            <Input.Group>
              <Input
                {...getFieldProps('card', {
                  rules: [
                    {
                      required: true,
                      message: '卡号不能为空',
                    },
                  ],
                  initialValue: '10100461570385',
                })}
                label="卡号"
              />
              <Input.Password
                {...getFieldProps('password', {
                  rules: [
                    {
                      required: true,
                      message: '密码不能为空',
                    },
                  ],
                  initialValue: 'bPZpqUSZ',
                })}
                autocomplete="new-password"
                label="密码"
              />
            </Input.Group>
            <WhiteSpace></WhiteSpace>
            <Button loading={loading} onClick={handleClick} type="primary">
              {' '}
              确定
            </Button>
          </div>
        </WingBlank>
      </div>
    </div>
  );
};

export default connect(({ exchange }) => ({}))(createForm()(Exchange));
