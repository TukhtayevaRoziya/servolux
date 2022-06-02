import React, { useState } from 'react';
import { Drawer, Button, Space } from 'antd';

import 'antd/dist/antd.css';
import './Navbar.css'

export const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className='navbarB'>
      <Space>
        <div className='openBtn' onClick={showDrawer}>
          <div></div>
          <div></div>
        </div>
      </Space>
      <Drawer
        title=""
        placement={'top'}
        width={500}
        onClose={onClose}
        visible={visible}
      >
        <div>
          <p>AGRO</p>
          <p>PROM</p>
          <p>HOLDING</p>
        </div>
      </Drawer>
    </div>
  );
};
