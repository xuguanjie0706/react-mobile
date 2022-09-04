/*
 * @Author: xgj
 * @since: 2022-09-01 21:59:10
 * @lastTime: 2022-09-04 13:11:46
 * @LastAuthor: xgj
 * @FilePath: /react-mobile/src/pages/report/index.js
 * @message:
 */
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
import { Select } from 'antd';
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
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');
  const [total, setTotal] = useState(0);
  const initData = async () => {
    const r = await api.Goods.allbysimple();
    setList(r || []);
  };
  const handleClick = () => {
    form.validateFields(async (err, values) => {
      if (values.num > total) {
        return Toast.fail('库存不能小于出货数量');
      }
      if (err) {
        return Toast.fail('数据错误');
      }
      const r = await api.Order.mail(values);
      if (r) {
        Toast.success('提交成功');
        form.resetFields();
      }
    });
  };
  useEffect(() => {
    initData();
  }, []);

  useEffect(() => {
    getNumMatter(form.getFieldValue('_goods'));
  }, [form.getFieldValue('_goods')]);
  const getNumMatter = async _goods => {
    if (_goods) {
      const count = await api.Matter.count({
        _goods: form.getFieldValue('_goods'),
        status: '1',
      });
      setTotal(count);
    } else {
      setTotal(0);
    }
  };

  const onSearch = () => {};

  return (
    <div className="report-room">
      <WingBlank>
        <WhiteSpace></WhiteSpace>
        <div className="form-room">
          <div className="input-room">
            {/* <InputItem
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
              <span>名称</span>
            </InputItem> */}
            <List>
              <List.Item
                extra={
                  <Select
                    showSearch
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    style={{ width: 300, paddingRight: 10 }}
                    {...getFieldProps('_goods', {
                      rules: [
                        {
                          required: true,
                          message: '名称不能为空',
                        },
                      ],
                    })}
                  >
                    {list.map(item => (
                      <Option value={item._id} key={item._id}>
                        {item.name}
                      </Option>
                    ))}
                  </Select>
                }
              >
                名称
              </List.Item>
              <List.Item extra={<span>{total}</span>}> 库存</List.Item>
            </List>

            <InputItem
              {...getFieldProps('num', {
                rules: [
                  {
                    required: true,
                    message: '密码不能为空',
                  },
                ],
                // initialValue: 'wy5yjPmi',
              })}
              clear
              type="number"
              autocomplete="new-password"
            >
              数量
            </InputItem>
          </div>
          <WhiteSpace></WhiteSpace>
          <WhiteSpace></WhiteSpace>
          <WhiteSpace></WhiteSpace>
          <Button loading={loading} onClick={handleClick} type="primary">
            提交
          </Button>
        </div>
      </WingBlank>
    </div>
  );
};

export default connect(({ exchange, setting }) => ({ setting: setting.data }))(
  createForm()(Home),
);
