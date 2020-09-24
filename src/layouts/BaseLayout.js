import React, { useState } from 'react';
import { TabBar } from 'antd-mobile';

const BaseLayout = props => {
  console.log(123);
  const { children } = props;
  const tabBars = [
    {
      name: 'blueTab',
      title: 'Life',
      icon: '',
    },
  ];
  const [selectedTab, setSelectedTab] = useState('blueTab');

  return (
    <div className="room">
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        tabBarPosition="bottom"
        // hidden={this.state.hidden}
      >
        <TabBar.Item
          title="首页"
          key="Life"
          icon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          selectedIcon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          selected={selectedTab === 'blueTab'}
          onPress={() => {
            setSelectedTab('blueTab');
          }}
          data-seed="logId"
        >
          1232
          {/* {this.renderContent('Life')} */}
        </TabBar.Item>
        <TabBar.Item
          title="首页"
          key="Life"
          icon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          selectedIcon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          selected={selectedTab === 'redTab'}
          badge={1}
          onPress={() => {
            setSelectedTab('redTab');
          }}
          data-seed="logId"
        >
          188
          {/* {this.renderContent('Life')} */}
        </TabBar.Item>
      </TabBar>
    </div>
  );
};

export default BaseLayout;
