import React, { useState, useEffect } from 'react';
import { TabBar, NavBar } from 'antd-mobile';
const BaseLayout = props => {
  console.log(props);
  const {
    children,
    history,
    location: { pathname },
  } = props;
  const tabBars = [
    {
      name: 'exchange',
      title: '首页',
      icon: 'icon-shouye',
      url: '/Exchange/',
    },
    {
      name: 'search',
      title: '查询',
      icon: 'icon-chaxun',
      url: '/Search/',
    },
  ];
  const [selectedTab, setSelectedTab] = useState('exchange');

  const handleClick = item => {
    const memberId = localStorage.getItem('memberId');
    setSelectedTab(item.name);
    history.push(item.url + memberId);
  };

  useEffect(() => {
    const tab = tabBars.find(item => {
      let index = pathname.indexOf(item.url);
      return index !== -1;
    });
    setSelectedTab(tab.name);
  }, [pathname]);

  return (
    <div className="room">
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        tabBarPosition="bottom"
      >
        {tabBars.map(item => (
          <TabBar.Item
            key={item.title}
            title={item.title}
            selected={selectedTab === item.name}
            onPress={() => handleClick(item)}
            icon={
              <span
                style={{
                  fontSize: 22,
                  lineHeight: 1,
                }}
                className={`iconfont ${item.icon}`}
              ></span>
            }
            selectedIcon={
              <span
                style={{
                  fontSize: 22,
                  lineHeight: 1,
                  color: '#33A3F4',
                }}
                className={`iconfont ${item.icon}`}
              ></span>
            }
          >
            {children}
          </TabBar.Item>
        ))}
      </TabBar>
    </div>
  );
};

export default BaseLayout;
