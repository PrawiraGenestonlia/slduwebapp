import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import '../../index.css';

const { Header } = Layout;

export default class PageHeader extends Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['0']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><a href="/">SLDU Skill Set Portal</a></Menu.Item>
          </Menu>
        </Header>
      </Layout>
    )
  }
}