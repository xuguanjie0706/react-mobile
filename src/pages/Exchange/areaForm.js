import React, { useState, useEffect } from 'react';
import {
  List,
  Radio,
  Button,
  WingBlank,
  Picker,
  Toast,
  TextareaItem,
} from 'antd-mobile';
import './index.less';
import Input from '@/components/Custom/Input';
import { createForm } from 'rc-form';
import areaList from './area';
import FixedView from './components/FixedView';
import { connect } from 'umi';

const Item = List.Item;
const AreaForm = props => {
  console.log(props);
  const { form, history, exchange, status, dispatch } = props;
  const { getFieldProps, setFieldsValue } = form;

  useEffect(() => {
    if (!status) {
      const memberId = localStorage.getItem('memberId');
      history.push('/Exchange/' + memberId);
    }

    document.title = '输入地址';
  }, []);

  const handleClick = () => {
    try {
      form.validateFields(async (err, values) => {
        // history.push("/detail")
        if (!err) {
          Toast.loading('');

          const province = areaList.find(item => item.value === values.area[0]);
          const city = province.children.find(
            item => item.value == values.area[1],
          );
          const districtr = city.children.find(
            item => item.value == values.area[2],
          );
          const area = [province.label, city.label, districtr.label];
          const _data = {
            ...values,
            area,
          };
          const r = await dispatch({
            type: 'exchange/exchange',
            payload: _data,
          });
          if (r) {
            Toast.hide();
            Toast.success('兑换成功', 3, null, true);
            setTimeout(() => {
              const memberId = localStorage.getItem('memberId');
              history.push('/Exchange/' + memberId);
            }, 1000);
          }
        } else {
          // console.log(err);

          // const errObj = form.getFieldsError();
          // console.log(errObj);
          // const msg = errObj[Object.keys(errObj)[0]];
          // console.log(msg);
          Toast.fail(
            err[Object.keys(err)[0]].errors[0].message,
            1,
            null,
            false,
          );
        }
      });
    } catch (error) {
      Toast.hide();
    }
  };
  return (
    <div className="room">
      <List>
        <Item>
          <Input
            {...getFieldProps('people', {
              rules: [
                {
                  required: true,
                  message: '收件人不能为空',
                },
              ],
            })}
            label="收件人"
          />
        </Item>
        <Item>
          <Input
            {...getFieldProps('mobile', {
              rules: [
                {
                  asyncValidator: (rule, value) => {
                    return new Promise((resolve, reject) => {
                      if (!/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(value)) {
                        reject('请输入正确的手机号');
                      }
                      resolve();
                    });
                  },
                },
              ],
            })}
            maxLength={11}
            label="手机号"
          />
        </Item>
        <Picker
          {...getFieldProps('area', {
            rules: [
              {
                required: true,
                message: '区域不能为空',
              },
            ],
          })}
          data={areaList}
          title="选择区域"
          extra="请选择"
        >
          <List.Item className="picker-item" arrow="horizontal">
            {' '}
            <span className="label">省市区:</span>
          </List.Item>
        </Picker>

        <Item>
          <TextareaItem
            title="详细地址："
            autoHeight
            {...getFieldProps('mainArea', {
              rules: [
                {
                  required: true,
                  message: '详细地址不能为空',
                },
              ],
            })}
            // label="详细地址"
            // className="textarea"
          />
        </Item>
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
export default connect(({ exchange }) => ({
  exchange: exchange.data,
  status: exchange.status,
}))(createForm()(AreaForm));
