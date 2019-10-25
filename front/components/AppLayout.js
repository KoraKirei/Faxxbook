import React, { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'antd';

const AppLayout = ({ children }) => {

  return (
    <Menu style={{ width: 256 }} defaultSelectedKeys={['1']} mode="horizontal">
      <Menu.Item key="home"><Link href="/"><a>Home</a></Link></Menu.Item>
      <Menu.Item key="todo"><Link href="/todo"><a>Todo</a></Link></Menu.Item>
      <Menu.Item key="feeds"><Link href="/feeds"><a>Feeds</a></Link></Menu.Item>
    </Menu>
  );
};

// AppLayout.propTypes = {
//   children: PropTypes.node,
// };

export default AppLayout;