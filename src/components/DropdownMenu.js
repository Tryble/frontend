import React from 'react';
import { Menu, Icon } from 'antd'


const DropdownMenu = () => {
  return (
    <Menu>
      <Menu.Item key="0">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          View Profile
        </a>
      </Menu.Item>
      <Menu.Item key="1">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          Requests
        </a>
      </Menu.Item>
      <Menu.Item key="2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          Account Settings
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <Icon type="logout" />
        Logout
      </Menu.Item>
    </Menu>
  );
}

export default DropdownMenu;
