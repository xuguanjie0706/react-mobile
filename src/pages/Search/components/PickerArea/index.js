import { List, InputItem, Picker, Toast, Modal, Icon } from 'antd-mobile';
import { Button, Input } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import area from './area';
import './index.less';
// import SelectArea from '../CustomFormItem/SelectArea';
import api from '@/api';

const SelectArea = props => {
  const { value, setItem, list, title } = props;
  const [visible, setVisible] = useState(false);
  // const [title, setTitle] = useState("")
  const onChange = v => {
    // const a = findArea(area, v)
    // const selectTitle = a.join('-');
    // const obj = list.find(item => item.agentAreaId === v.join('-'));
    // if (obj) {
    //   Toast.fail('您已选择该区域，每个区域仅支持选择一种代理类型');
    // } else {
    //   setItem(v, 'label');
    //   setItem(selectTitle, 'agentArea');
    //   // setTitle(selectTitle)
    // }
    // setVisible(false)
  };

  const findArea = (area, arr) => {
    try {
      const province = area.find(item => item.value === arr[0]);
      const city = province.children.find(item => item.value == arr[1]);
      const districtr = city.children.find(item => item.value == arr[2]);
      return [province.label, city.label, districtr.label];
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Picker
      visible={visible}
      data={area}
      value={value}
      // onChange={v => this.setState({ pickerValue: v })}
      onOk={onChange}
      style={{ width: '100%' }}
      onDismiss={() => setVisible(false)}
    >
      <div style={{ position: 'relative', width: '100%' }}>
        <Input
          onFocus={e => e.target.blur()}
          disabled={title}
          value={title}
          style={{ width: '100%' }}
          placeholder="代理区域"
          readOnly
          onClick={() => setVisible(true)}
        ></Input>
        <img
          style={{ width: 6, position: 'absolute', right: 10, top: 10 }}
          src={pickerImg}
          alt=""
        />
      </div>
    </Picker>
  );
};

export default SelectArea;
