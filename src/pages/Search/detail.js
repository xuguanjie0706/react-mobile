import React, { useEffect } from 'react';
import { connect } from 'umi';
import { Result, List } from 'antd-mobile';
import './index.less';
const Item = List.Item;
const Brief = Item.Brief;
const StatusEnum = {
  2: '已兑换',
  3: '待发货',
  4: '已发货',
};
const Detail = props => {
  console.log(props);
  const { setting, list, history } = props;

  useEffect(() => {
    if (list.length === 0) {
      history.go(-1);
    }
  }, []);
  return (
    <div className="search-detail">
      <Result
        // img={myImg('https://gw.alipayobjectss.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg')}
        title="查询成功"
        message={<div>如有疑问请拨打 {setting.phone || ''} </div>}
      />
      <div className="hl-margin-10">
        <List renderHeader={() => '订单信息'}>
          {list.map(item => (
            <List.Item
              key={item.card}
              align="top"
              extra={StatusEnum[item.status]}
              wrap
              multipleLine
            >
              卡号:{item.card}
              <Brief>
                <div className="my-brief">
                  {item.exchangeTime &&
                    '兑换时间:' +
                      moment(item.exchangeTime).format('YYYY-MM-DD HH:mm:ss') +
                      '\n'}
                  {item.address &&
                    '收件人:' +
                      item.address.people +
                      ' 手机号:' +
                      item.address.mobile +
                      '\n收货地址:' +
                      item.address.area.join('').toString() +
                      item.address.mainArea +
                      '\n'}
                  {item.sendInfo &&
                    item.sendInfo.map(it => (
                      <div>
                        {it.sendName + ':' + it.sendNumber + '\n' + it.remarks
                          ? '备注:' + it.remarks
                          : '' + '\n'}
                      </div>
                    ))}
                </div>
              </Brief>
            </List.Item>
          ))}
        </List>
      </div>
    </div>
  );
};

export default connect(({ exchange, setting }) => ({
  list: exchange.list,
  setting: setting.data,
}))(Detail);
