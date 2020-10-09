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
import config from '@/utils/config';
import bg from '@/assets/bg.png';

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
    setting,
  } = props;
  const { getFieldProps } = form;
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [exchangeData, setExchangeData] = useState({});
  const [isShow, setIsShow] = useState(false);
  const [userData, setUserData] = useState({});
  // console.log(form);

  const initLoad = async () => {
    await dispatch({
      type: 'setting/getone',
      payload: { _member: memberId },
    });
    const user = await api.User.getone({ _id: memberId });
    if (user) {
      setUserData(user);
    }
    setIsShow(true);
  };

  useEffect(() => {
    if (memberId) {
      localStorage.setItem('memberId', memberId);
    }
    initLoad();
  }, []);

  const handleClick = () => {
    form.validateFields(async (err, values) => {
      if (!err) {
        const _data = {
          password: values.password.replace(/(^\s*)|(\s*$)/g, ''),
          card: values.card.replace(/(^\s*)|(\s*$)/g, ''),
          _member: memberId,
        };
        setLoading(true);
        const r = await dispatch({
          type: 'exchange/getone',
          payload: _data,
        });
        setLoading(false);
        console.log(r);
        if (r) {
          setExchangeData(r);
          if (r._goods.length) {
            dispatch({
              type: 'exchange/selectOne',
              payload: r._goods[0],
            });
            history.push('/detail');
          } else {
            history.push('/list');
          }
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

  return (
    <div className="room">
      {isShow && (
        <div
          className="exchange"
          style={{
            backgroundImage: `url("${
              setting.img ? config.url + setting.img : bg
            }")`,
          }}
        >
          {' '}
          {userData.status ? (
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
                      // initialValue: '10100502598630',
                    })}
                  >
                    <span>手机号</span>
                  </InputItem>
                </div>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <Button loading={loading} onClick={handleClick} type="primary">
                  查询
                </Button>
              </div>
            </WingBlank>
          ) : (
            <div className="center-view"> 系统异常</div>
          )}
        </div>
      )}
    </div>
  );
};

export default connect(({ exchange, setting }) => ({ setting: setting.data }))(
  createForm()(Exchange),
);
